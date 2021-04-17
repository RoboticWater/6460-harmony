<script>
	import ChordPlayer from "./ChordPlayer.svelte";
	import prompt from "./prompt.jpg";
	import check from "./check.svg";
	import logo from "./logo.svg";
</script>

<main>
	<header>
		<div class="content">
			<h1>Writing Chord Progressions</h1>
			<h2>Composing With a Prompt</h2>
		</div>
	</header>
	<article>
		<div class="prompt">
			<img src={prompt} alt="" />
		</div>
		<ChordPlayer />
	</article>
</main>

<style>
	main {
		display: grid;
		grid-template-columns: 300px 1fr minmax(auto, 900px) 1fr 300px;
		grid-template-areas:
			"sidebar . header . ."
			"sidebar . article . .";
		grid-template-rows: auto 1fr;
		gap: 20px;
		height: 100%;
	}
	@media screen and (max-width: 1600px) {
		main {
			grid-template-columns: 300px auto minmax(auto, 900px) auto auto;
		}
	}

	.prompt img {
		width: 100%;
	}

	header {
		grid-area: header;
		padding: 80px 0 20px;
		/* display: grid; */
		/* grid-template-columns: 1fr minmax(auto, 900px) 1fr 2fr; */
		/* background: #704fac;
		color: #fff; */
	}
	header .content {
		grid-column-start: 2;
	}
	header h1 {
		font-size: 1.5em;
		font-weight: 300;
		margin: 0;
	}
	header h2 {
		font-size: 4.5em;
		margin: 0;
	}
	article {
		grid-area: article;
		text-align: justify;
	}
</style>
