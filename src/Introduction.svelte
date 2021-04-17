<script>
	import ChordPlayer from "./ChordPlayer.svelte";
	import scale from "./scale.svg";
	import check from "./check.svg";
	import logo from "./logo.svg";
</script>

<main>
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
			First, let’s introduce our virtual writing interface. Below you’ll see four rectangles called
			<i>chord blocks</i>. You can select the chord each chord block is playing by dragging it up or
			down. The play button on the left will play the chords in succession, and there is a loop
			button you can toggle on or off. Spend a few minutes experimenting with this tool and see what
			you can come up with!
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
		grid-template-columns: 1fr minmax(auto, 900px) 1fr 300px;
		grid-template-areas:
			". header . ."
			". article . .";
		grid-template-rows: auto 1fr;
		gap: 20px;
		height: 100%;
	}
	@media screen and (max-width: 1600px) {
		main {
			grid-template-columns: auto minmax(auto, 900px) auto auto;
		}
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
