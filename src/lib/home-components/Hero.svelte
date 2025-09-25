<!-- ! do not forget about the responsiveness -->
<script lang="ts">
	import LimitlessLibrary from '$lib/assets/icons/Learning-rafiki.svg';
	import bookLover from '$lib/assets/icons/Book lover-bro.svg';
	import AudioBook from '$lib/assets/icons/Audiobook-pana.svg';
</script>

<section
	id="testimonials-container"
	class="relative flex h-[800px] w-full items-center justify-center"
>
	<div class="outerdiv relative flex h-full w-full items-center justify-center">
		<div class="innerdiv">
			<!-- div1 -->
			<div class="div1 relative rounded-xl px-6 py-4 shadow-2xs">
				<div
					id="image_illustration_container"
					class="overflow-hidden absolute top-0 left-0 flex h-full w-full items-center justify-center rounded-xl"
				>
					<img
						src={AudioBook}
						alt="illustration of a book and cup of coffe"
						class="object-cover size-7/12"
					/>
				</div>
				<div class="content absolute z-50">
					<h4 class="mb-4 text-2xl font-bold text-[#FFE066]">Lose yourself in new worlds</h4>
					<p class="text-lg font-semibold text-[#fffff]">
						Adventure, mystery, fantasy, knowledge—every page is a doorway waiting to be opened.
					</p>
				</div>
			</div>
			<!-- div2 -->
			<div class="div2 rounded-xl px-6 py-4 shadow-2xs">
				<div class="content">
					<h4 class="mb-4 text-2xl font-bold text-[#FFD6E0]">Stories that stay with you</h4>
					<p class="text-lg font-semibold text-black ">
						From timeless classics to bold new voices, discover books that speak to your soul.
					</p>
				</div>
			</div>
			<!-- div3 -->
			<div class="div3 relative rounded-xl px-6 py-4 shadow-2xs">
				<div
					id="image_illustration_container"
					class="absolute top-0 left-0 flex h-full w-full items-center justify-center rounded-xl"
				>
					<img
						src={LimitlessLibrary}
						alt="illustration of a book and cup of coffe"
						class="object-cover"
					/>
				</div>
				<div class="content absolute z-50">
					<h4 class="mb-4 text-2xl font-bold text-[#FFFFFF]">A library without limits</h4>
					<p class="text-lg font-semibold text-black ">
						Explore genres, dive into hidden gems, and find your next favorite read right here.
					</p>
				</div>
			</div>
			<!-- div4 -->
			<div class="div4 rounded-xl px-6 py-4 shadow-2xs">
				<div class="content">
					<h4 class="mb-4 text-2xl font-bold text-[#1A1A1A]">Every page a new journey</h4>
					<p class="text-lg font-semibold text-black ">
						Take a break from the noise—step into worlds where imagination leads the way.
					</p>
				</div>
			</div>
			<!-- div5 -->
			<div class="div5 eachdiv relative overflow-hidden rounded-xl px-6 py-4">
				<div
					id="image_illustration_container"
					class="absolute top-0 left-0 flex h-full w-full items-center justify-center rounded-xl"
				>
					<img src={bookLover} alt="illustration of a book and cup of coffe" class="object-cover" />
				</div>
				<div class="content absolute z-50">
					<h4 class="mb-4 text-2xl font-bold text-black">Read. Imagine. Repeat.</h4>
					<p class="text-lg font-semibold text-black ">
						Your next story is waiting—turn the first page and see where it takes you.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.innerdiv {
		display: grid;
		grid-gap: 1.5rem;
		grid-template-rows: repeat(2, 22rem);
		grid-template-columns: repeat(4, 17rem);
	}
	.div1 {
		grid-column: 1/3;
		grid-row: 1/2;
		background-repeat: no-repeat;
		background-position-x: 20rem;
		background: #390099;
	}
	.div2 {
		grid-column: 3/4;
		grid-row: 1/2;
		background: #9e0059;
	}
	.div3 {
		grid-column: 4/5;
		grid-row: 1/3;
		background: #ff0054;
	}
	.div4 {
		grid-column: 1/2;
		grid-row: 2/3;
		background: #ff5400;
	}
	.div5 {
		grid-column: 2/4;
		grid-row: 2/3;
		background: #ffbd00;
	}

	@media only screen and (max-width: 1000px) {
		.innerdiv {
			transform: scale(0.7);
		}
	}
	@media only screen and (max-width: 800px) {
		.innerdiv {
			transform: scale(0.6);
		}
	}
	@media only screen and (max-width: 600px) {
		.div1 {
			background-position-x: 10rem;
		}
		.innerdiv {
			display: flex;
			flex-direction: column;
			transform: scale(1);
			margin: 2rem;
			margin-bottom: 5rem;
		}
	}

	@media screen and (max-width: 425px) {
		#testimonials-container {
			height: 1800px;
		}
	}
</style>
