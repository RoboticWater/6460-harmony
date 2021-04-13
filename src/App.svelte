<script>
	import ChordPlayer from "./ChordPlayer.svelte";
	import scale from "./scale.svg";
	import check from "./check.svg";
	import logo from "./logo.svg";
</script>

<main>
	<div class="sidebar">
		<div class="logo">
			<img src={logo} alt="" />
		</div>
		<div class="section">
			<h1>Writing Chord Progressions</h1>
			<div class="subsection">
				<h2>Lesson 1</h2>
				<h3>Introduction</h3>
				<div class="completed" class:visible={true}>
					<img class="check" src={check} alt="" />
				</div>
			</div>
			<div class="subsection">
				<h2>Lesson 2</h2>
				<h3>Expanding the repertoire</h3>
				<div class="completed" class:visible={false}>
					<img class="check" src={check} alt="" />
				</div>
			</div>
		</div>
		<div class="section">
			<h1>Progressions to Movements</h1>
			<div class="subsection">
				<h2>Lesson 1</h2>
				<h3>Example</h3>
				<div class="completed" class:visible={false}>
					<img class="check" src={check} alt="" />
				</div>
			</div>
			<div class="subsection">
				<h2>Lesson 2</h2>
				<h3>Example</h3>
				<div class="completed" class:visible={false}>
					<img class="check" src={check} alt="" />
				</div>
			</div>
		</div>
	</div>
	<header>
		<div class="content">
			<h1>Writing Chord Progressions</h1>
			<h2>Introduction</h2>
		</div>
	</header>
	<article>
		<p>
			At their most basic level, chord progressions are a series of two or more chords played
			together in succession. Understanding how to construct chord progressions is essential because
			they are the foundation of the tone and narrative of a song. Chord progression can be used to
			convey moods that are happy, sad, emotional, optimistic, adventurous, and more. Let’s discuss
			a foundational framework for building chord progressions, then have you build some on your
			own.
		</p>
		<p>
			First, let’s introduce our virtual writing interface. Below you’ll see seven circles with
			roman numerals (we’ll explain these letters are in a bit), each representing a different
			chord. Underneath them are four squares, which are slots where you can add the chords from
			above. Each slot holds one chord, allowing you to put four chords in succession. Try dragging
			a chord to each block, then hit the play button to hear the chord progression you’ve made.
		</p>
		<ChordPlayer />
		<p>
			Each roman numeral above represents a diatonic triad in a major key. To refresh your memory on
			these concepts:
		</p>

		<ul>
			<li>
				<a href="https://en.wikipedia.org/wiki/Major_scale" target="_blank">Major Key</a>: A
				specific grouping of seven notes.
			</li>
			<li>
				<a href="https://www.musictheory.net/lessons/43" target="_blank">Diatonic Triads</a>: Seven
				chords built on each of the notes in the chosen major or minor key.
			</li>
		</ul>
		<p>
			Each roman numeral represents a different diatonic triad, with the number corresponding to the
			<a href="https://en.wikipedia.org/wiki/Degree_(music)" target="_blank">scale degree</a> that chord
			is built on. Major chords are capitalized, minor chords are lowercase, and diminished chords are
			lowercase with a superscript ‘o’. Below are the seven diatonic triads in a major key.
		</p>
		<img src={scale} style="width: 100%" alt="" />
		<p>
			However, as you may have experienced earlier when building chord progressions above, not all
			chord progressions are alike. Some chord progressions sound happy, others sound sad, some
			sounds smooth, while others sound more dissonant.
		</p>

		<p>
			To help understand why certain chord progressions ‘work’, let’s discuss an important concept
			called <a href="https://www.artofcomposing.com/08-diatonic-harmony" target="_blank"
				><i>functional harmony</i></a
			>. The central idea behind functional harmony is each diatonic chord serves a specific
			function. Some chords sound ‘stable’ and ‘at home’, some sound ‘unstable’ and ‘tense’, and
			others sound like a ‘departure’.
		</p>
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
	.sidebar {
		grid-area: sidebar;
		background: #fafafa;
		border-right: 1px solid #e4e4e4;
	}
	.sidebar .section {
		padding-left: 15px;
		margin-top: 20px;
		color: #999999;
	}
	.logo {
		display: grid;
		justify-items: center;
		padding: 20px 0;
	}
	.logo img {
		height: 60px;
		opacity: 0.5;
	}
	.section h1 {
		font-size: 20px;
		border-bottom: 1px solid #e4e4e4;
		font-weight: 300;
		margin: 0 0 15px 10px;
		padding-bottom: 5px;
	}
	.subsection {
		display: grid;
		grid-template-areas: "lesson completed" "title completed";
		grid-template-columns: 1fr auto;
		grid-template-rows: auto auto;
		padding: 5px 7px;
		margin-left: 3px;
		margin-bottom: 5px;
		cursor: pointer;
	}
	.subsection:hover {
		background: #0001;
	}
	.section h2 {
		font-size: 16px;
		font-weight: 500;
		margin: 0;
		grid-area: lesson;
		align-self: end;
	}
	.section h3 {
		font-size: 16px;
		font-weight: 300;
		margin: 0;
		grid-area: title;
	}
	.completed {
		grid-area: completed;
		display: none;
		align-self: center;
	}
	.completed.visible {
		display: inline;
	}
	.completed img {
		width: 15px;
		margin: 6px;
		padding: 0;
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
