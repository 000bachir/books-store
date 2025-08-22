<!--TODO : need to see how can i end the timeline on destroy-->

<!-- <script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import gsap from 'gsap';
	import ScrollTrigger from 'gsap/ScrollTrigger';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		let selectedWords = document.getElementById('animated-words') as HTMLElement;
		let animationTriggerPoint = document.getElementById('animation-start') as HTMLDivElement;
		let animatedWords = gsap.utils.toArray<HTMLElement>('.animated-word');

		if (!selectedWords || animatedWords.length === 0 || !animationTriggerPoint) {
			console.error('failed to load elements, please refer to the console or the dev tool');
			return;
		}
		let timeline = gsap.timeline({
			scrollTrigger: {
				trigger: animationTriggerPoint,
				start: '-150px top',
				end: 'bottom bottom',
				scrub: 1.5
			}
		});
		//---!getComputedStyle  only accepts one element that is why i only the first word color
		const currentColor = getComputedStyle(animatedWords[0]).color;
		// timeline.fromTo(
		// 	animatedWords,
		// 	{ color: currentColor },
		// 	{
		// 		duration: 1.2,
		// 		stagger: 0.75,
		// 		color: () => {
		// 			let colors = [
		// 				'#03045e',
		// 				'#262d79',
		// 				'#475492',
		// 				'#677bab',
		// 				'#88a2c4',
		// 				'#a9c9dd',
		// 				'#caf0f6'
		// 			];
		// 			return colors[Math.floor(Math.random() * colors.length)];
		// 		}
		// 	}
		// );
		timeline.to(
			animatedWords,
			{
				duration: 1.2,
				stagger: 0.75,
                immediateRender : false,
				color: () => {
					let colors = [
						'#03045e',
						'#262d79',
						'#475492',
						'#677bab',
						'#88a2c4',
						'#a9c9dd',
						'#caf0f6'
					];
					return colors[Math.floor(Math.random() * colors.length)];
				}
			}
		);
	});

	onDestroy(() => {
		ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
	});
</script> -->
<!-- 
<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import gsap from 'gsap';
    import ScrollTrigger from 'gsap/ScrollTrigger';    


    
    
	function WordsChangingColorAnimation() {

        const animatedWords = gsap.utils.toArray<HTMLElement>('.animated-word');
            const animationTriggerPoint = document.getElementById('animation-start');

		if (!animationTriggerPoint || animatedWords.length === 0) {
			console.error('failled to load elements in the dom');
			return;
		}

		let timeline: gsap.core.Timeline = gsap.timeline({
			scrollTrigger: {
				trigger: animationTriggerPoint,
				start: '-150px top',
				end: 'bottom bottom',
				scrub: 1.5
			}
		});

		timeline.to(animatedWords, {
			duration: 1.2,
			stagger: 0.75,
			color: () => {
				let colors = ['#03045e', '#262d79', '#475492', '#677bab', '#88a2c4', '#a9c9dd', '#caf0f6'];
				return colors[Math.floor(Math.random() * colors.length)];
			}
		});
		return timeline;
	}

	onMount(async() => {

        const gsap = (await import('gsap')).default;
		const { ScrollTrigger } = await import('gsap/ScrollTrigger');


		let timeline = WordsChangingColorAnimation();

		const observer = new MutationObserver(() => {
			if (timeline) {
				timeline.kill();
			}
			// re building with new colors
			timeline = WordsChangingColorAnimation();
		});

		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ['class']
		});
	});

	onDestroy(() => {
		let timeline = WordsChangingColorAnimation();

		const observer = new MutationObserver(() => {
			if (timeline) {
				timeline.kill();
			}
			// re building with new colors
			timeline = WordsChangingColorAnimation();
		});
	});
</script> -->
<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import  gsap  from 'gsap';
    import ScrollTrigger from 'gsap/dist/ScrollTrigger';
	
	let timeline: gsap.core.Timeline | null = null;
	let observer: MutationObserver | null = null;

	async function WordsChangingColorAnimation() {
		

		const animatedWords = gsap.utils.toArray<HTMLElement>('.animated-word');
		const animationTriggerPoint = document.getElementById('animation-start');
		
		if (!animationTriggerPoint || animatedWords.length === 0) {
			console.error('Failed to load elements in the DOM');
			return null;
		}

		// Register plugin if not already registered
			gsap.registerPlugin(ScrollTrigger);
		

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: animationTriggerPoint,
				start: '-150px top',
				end: 'bottom bottom',
				scrub: 1.5
			}
		});

		const colors = ['#03045e', '#262d79', '#475492', '#677bab', '#88a2c4', '#a9c9dd', '#caf0f6'];

		tl.to(animatedWords, {
			duration: 1.2,
			stagger: 0.75,
			color: (index: number) => {
				return colors[index % colors.length]; 
			}
		});

		return tl;
	}

	async function initializeAnimation() {
		try {
            timeline = await WordsChangingColorAnimation();
			// Clean up existing timeline
			if (timeline) {
				timeline.kill();
				timeline = null;
			}

			// Wait a tick to ensure DOM is ready
			await new Promise(resolve => setTimeout(resolve, 0));
			
		} catch (error) {
			console.error('Error initializing animation:', error);
		}
	}

	onMount(async () => {
		try {
			// Dynamic imports for GSAP
			const gsapModule = await import('gsap');
			const scrollTriggerModule = await import('gsap/ScrollTrigger');


			// Initialize first animation
			await initializeAnimation();

			// Watch for dark/light mode changes or other class changes
			observer = new MutationObserver(async (mutations) => {
				const hasClassChange = mutations.some(
					mutation => mutation.type === 'attributes' && mutation.attributeName === 'class'
				);
				
				if (hasClassChange) {
					await initializeAnimation();
				}
			});

			observer.observe(document.documentElement, {
				attributes: true,
				attributeFilter: ['class']
			});
		} catch (error) {
			console.error('Error setting up GSAP animation:', error);
		}
	});

	onDestroy(() => {
		// Clean up timeline
		if (timeline) {
			timeline.kill();
			timeline = null;
		}

		// Clean up observer
		if (observer) {
			observer.disconnect();
			observer = null;
		}

		// Clean up ScrollTrigger instances
		if (gsapInstance?.plugins?.ScrollTrigger) {
			gsapInstance.plugins.ScrollTrigger.getAll().forEach((trigger: any) => {
				trigger.kill();
			});
		}
	});
</script>

<main class="relative mx-auto h-auto w-full overflow-hidden">
	<section
		class="relative grid h-96 w-full grid-cols-2 overflow-hidden border-b-[1px] border-gray-900 dark:border-gray-300"
	>
		<article
			class="relative flex h-full w-full flex-col items-center justify-center gap-5 overflow-hidden"
		>
			<h1 class="text-center text-4xl font-semibold text-balance">
				From title to your shelf in seconds 😎
			</h1>
			<span class="text-lg font-semibold"> in case an llm isn't really your first choice 😅 </span>
			<button
				class="flex items-center justify-center rounded-4xl bg-black px-12 py-8 text-2xl font-semibold text-white shadow-2xl dark:bg-white dark:text-black"
			>
				<a href="/"> Browse 👀 </a>
			</button>
		</article>
		<!--* THIS WAS SUPPOSED TO BE A 3D MODEL BIT THE LAPTOP IS TII OLD AND SLOW RENDEREING IT WOULD TAKE TIME MAUBE CHANGE IT IN THE FUTUR IT IS PLACE IB THE MODELS/CHILDHOOD_BOOK.GLB WITH THRELTE -->
		<article class="relative flex h-full w-full items-center justify-center overflow-hidden">
			<img src="/gifs/loop_animation.gif" loading="lazy" class="aspect-square h-64" alt="" />
		</article>
	</section>
	<section
		id="animation-start"
		class="relative flex h-32 w-full items-center justify-center overflow-hidden"
	>
		<!--!!!!!!! there is a bu here where the color of the text doesn't change for exemple if the user in the middle of the website does change the theme color and the animation already happed the color won't change for exmple the user choose light the color is still light and do not become dark    -->
		<h1 id="animated-words" class="text-3xl font-semibold">
			<span class="animated-word">A</span>
			<span class="animated-word">bit</span>
			<span class="animated-word">weird</span>
			<span class="animated-word">but</span>
			<span class="animated-word">let</span>
			<span class="animated-word">me</span>
			<span class="animated-word">explain</span>
			<span class="">🤔</span>
		</h1>
	</section>

	<section class="relative mx-auto h-auto w-[95%] overflow-hidden">
		<article class="grid h-96 w-full grid-cols-2">
			<div class="col-span-1 flex h-full w-full flex-col items-center justify-center gap-6">
				<p class="text-center text-lg font-semibold text-balance">
					I spend most of my time scrolling on TikTok and, on rare occasions, I stumble upon a book
					review where the story feels like the first time I read Harry Potter. But unfortunately,
					Google is filled with blog posts or dropshipping websites offering the same books at
					sometimes twice the price. So I thought, why not leverage the power of big tech companies
					(I mean, they use our data anyway 😒)
				</p>
				<span class="text-sm">Because finding a book should be easier than scrolling 🤷‍♂️</span>
			</div>
			<div
				class="relative col-span-1 flex h-full w-full items-center justify-center overflow-hidden"
			>
				<img src="/gifs/real_target.gif" loading="lazy" class="aspect-square h-64" alt="" />
			</div>
		</article>
	</section>
</main>

<style>
	/**
    *TODO : add responsiveness
    */
</style>
