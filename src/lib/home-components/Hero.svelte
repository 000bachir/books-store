<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { gsap } from 'gsap'
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { tick } from 'svelte';

	let timeline : gsap.core.Timeline
	onMount(()=>{
		gsap.registerPlugin(ScrollTrigger)
		let animatedWords = gsap.utils.toArray<HTMLElement>(".animated-word")
		let triggerAnimation = document.getElementById('animation-start') as HTMLElement
		if(animatedWords.length === 0 || !triggerAnimation ){
			console.error("failed to load the elements in the dom please check the dev tool")
			return
		}
		timeline = gsap.timeline({
			scrollTrigger : {
				trigger : triggerAnimation , 
				start : '-150px top',
				end : 'bottom bottom',
				scrub : 1.5
			}
		})
		tick().then(()=>{
			timeline.fromTo(animatedWords,{
				opacity : 0 ,
				scale : 0
			},{
				opacity : 1 ,
				scale : 1 ,
				stagger : 1.5,
				duration : 1.4,
			})
		})
	})

	onDestroy(()=>{
		if(timeline){
			timeline.kill()
		}
		ScrollTrigger.getAll().forEach((trigger => trigger.kill()))
	})


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

		<article class="h-20 w-full relative flex items-center justify-center flex-col gap-5">
			<h1 class="text-2xl font-semibold" >So i decided to build this to help me</h1>
			<span class = "text-sm">this is a personal project that if someone use i might make a bit of money 😅</span>
		</article>
	</section>
</main>

<style>
	/**
    *TODO : add responsiveness
    */
</style>
