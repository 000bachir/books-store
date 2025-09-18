<script lang="ts">
</script>

<section
	id="testimonials-container"
	class="relative flex h-[800px] w-full items-center justify-center"
>
	<div class="outerdiv relative flex h-full w-full items-center justify-center">
		<div class="innerdiv">
			<!-- div1 -->
			<div class="div1 shadow-2xs rounded-xl px-6 py-4 text-white ">
				<div class="review">
					<h4>Best gaming store experience I've had!</h4>
					<p>
						“I've been buying clothes online for years, but this store stands out. The website is
						user-friendly, and I found some very good items I've been hunting for ages. Shipping was
						faster than expected, and the packaging was secure. I'll definitely be a repeat
						customer.”
					</p>
				</div>
			</div>
			<!-- div2 -->
			<div class="div2 shadow-2xs rounded-xl px-6 py-4 text-white">
				<div class="review">
					<h4>Great prices and excellent customer service!</h4>
					<p>
						“The deals are unbeatable, and the customer service is top-notch. I had a few questions
						and they were answered promptly. Will shop again!”
					</p>
				</div>
			</div>
			<!-- div3 -->
			<div class="div3 shadow-2xs rounded-xl px-6 py-4 text-white">
				<div class="review dark">
					<h4>Excellent customer service and selections!</h4>
					<p>
						“This e-store exceeded my expectations. Not only did they have a vast selection of
						choices, but their customer service was also exceptional. I had an issue with my order,
						and they resolved it within hours!”
					</p>
				</div>
			</div>
			<!-- div4 -->
			<div class="div4 shadow-2xs rounded-xl px-6 py-4 text-white">
				<div class="review dark">
					<h4>Great prices and excellent customer service!</h4>
					<p>
						“The deals are unbeatable, and the customer service is top-notch. I had a few questions
						and they were answered promptly. Will shop again!”
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
	}
	.div2 {
		grid-column: 3/4;
		grid-row: 1/2;
	}
	.div3 {
		grid-column: 4/5;
		grid-row: 1/3;
	}
	.div4 {
		grid-column: 1/2;
		grid-row: 2/3;
	}
	
	.review h4 {
		font-size: 1.5rem;
		color: #f3deff;
		font-weight: 600;
		line-height: 1.5;
		margin-bottom: 1rem;
	}
	.review.dark h4 {
		color: #4b5258;
	}
	.review p {
		font-size: 1rem;
		color: #f3deff;
		font-weight: 500;
		opacity: 70%;
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