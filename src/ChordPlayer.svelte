<script>
	import { onMount } from "svelte";
	import { spring } from "svelte/motion";
	import { foo } from "./test.js";
	import * as Tone from "tone";
	import ChordI from "./Chords/I - C.wav";
	import Chordii from "./Chords/ii - Dm.wav";
	import Chordiii from "./Chords/iii - Em.wav";
	import ChordIV from "./Chords/IV - F.wav";
	import ChordV from "./Chords/V - G.wav";
	import Chordvi from "./Chords/vi - Am.wav";
	import Chordviio from "./Chords/viio - Bdim.wav";
	export let initial = ["IV", "IV", "IV", "IV"];

	const synth = new Tone.PolySynth().toDestination();
	synth.volume.value = -6;
	const offsets = spring([0, 0, 0, 0, 0], { stiffness: 0.2, damping: 0.4 });
	let chords = ["I", "ii", "iii", "IV", "V", "vi", "vii°"];
	let audio = {
		I: new Tone.Player(ChordI).toDestination(),
		ii: new Tone.Player(Chordii).toDestination(),
		iii: new Tone.Player(Chordiii).toDestination(),
		IV: new Tone.Player(ChordIV).toDestination(),
		V: new Tone.Player(ChordV).toDestination(),
		vi: new Tone.Player(Chordvi).toDestination(),
		"vii°": new Tone.Player(Chordviio).toDestination(),
	};
	let colors = {
		I: "#F6BC46",
		ii: "#68C9CF",
		iii: "#68C9CF",
		IV: "#F6BC46",
		V: "#F6BC46",
		vi: "#68C9CF",
		"vii°": "#EF8F9B",
	};
	let loop = true;
	var seq;
	let active = null;

	$: phrase = [
		{ chord: "IV", length: 4, offset: 0 },
		{ chord: "IV", length: 4, offset: 0 },
		{ chord: "IV", length: 4, offset: 0 },
		{ chord: "IV", length: 4, offset: 0 },
	];

	function mod(n, m) {
		return ((n % m) + m) % m;
	}
	function handlePanStart(event, i) {
		// 		phrase[i].offset.stiffness = 1;
		// 		phrase[i].offset.damping = 1;
	}

	onMount(() => {
		phrase = initial.map((chord) => ({
			chord,
			length: 4,
			offset: (-chords.indexOf(chord) + 3) * 30,
		}));
		seq = new Tone.Sequence(
			function (time, note) {
				audio[note.note].start();
				// synth.triggerAttackRelease(["C4", "E4", "G4"], "16n", time);
				active = note.index;
			},
			phrase.map((chord, i) => ({ note: chord.chord, index: i })),
			"1m"
		);
		seq.start(0);
		Tone.start();
		Tone.Transport.bpm.value = 120;
	});

	function handlePanMove(event, i) {
		phrase[i].offset = Math.min(Math.max(phrase[i].offset + event.detail.dy, -30 * 3), 30 * 3);
		phrase[i].chord = chords[-Math.round(phrase[i].offset / 30) + 3];
	}

	function handlePanEnd(event, i) {
		let newChord = chords[-Math.round(phrase[i].offset / 30) + 3];
		if (!playing) audio[newChord].start();
		seq.events[i] = {
			note: newChord,
			index: i,
		};
		// seq.set(chords[mod(-Math.round(phrase[i].offset / 30), chords.length)] + degree);
		// seq.dispose();
		// seq = new Tone.Sequence(
		// 	function (time, note) {
		// 		synth.triggerAttackRelease(note, 0.1, time);
		// 		//straight quater notes
		// 	},
		// 	phrase.map((chord) => chord.chord + chord.degree),
		// 	"4n"
		// ).start(0);
	}

	let playing = false;

	function play() {
		// const loop = new Tone.Loop((time) => {
		// 	synthA.triggerAttackRelease("C4", "8n", time);
		// 	synthA.triggerAttackRelease("D4", "8n", time + 0.2);
		// 	synthA.triggerAttackRelease("E4", "8n", time + 0.4);
		// 	synthA.triggerAttackRelease("F4", "8n", time + 0.6);
		// }, "4n").start(0);
		Tone.Transport.toggle();
		playing = !playing;
	}
</script>

<svelte:window
	on:keydown={(e) => {
		if (e.keyCode === 32) play();
	}}
/>

<main>
	<div class="editor">
		<div class="buttons">
			<button class="play" on:click={play}>{playing ? "■" : "▶"}</button>
			<button class="loop" class:active={loop} on:click={() => (loop = !loop)}>
				<svg viewBox="0 0 26.6 26.4" width="20px"
					><path class="st0" d="M25.5,21.3h-17c-4.2,0-7.5-3.4-7.5-7.5v-2.5" />
					<path class="st0" d="M1.1,5.1h17c4.2,0,7.5,3.4,7.5,7.5v2.5" />
					<polyline class="st0" points="21.4,17.1 25.5,21.3 21.4,25.4 " />
					<polyline class="st0" points="5.2,9.2 1.1,5.1 5.2,1 " /></svg
				>
				<!-- <img src="./loop.svg" alt="" width="20px" /> -->
			</button>
		</div>
		<div class="phrase">
			{#each phrase as chord, i}
				<div
					class="chord"
					class:active={playing && i === active}
					use:foo
					on:panstart={(e) => handlePanStart(e, i)}
					on:panmove={(e) => handlePanMove(e, i)}
					on:panend={(e) => handlePanEnd(e, i)}
					style="background: {colors[chord.chord]}; top: {Math.round(phrase[i].offset / 30) *
						30}px;"
				>
					<h2>{chord.chord}</h2>
				</div>
			{/each}
		</div>
	</div>
</main>

<style>
	main {
		padding: 120px 20px;
		margin: 0 auto;
		max-width: 1000px;
		background: #f3f3f3;
		user-select: none;
	}
	.editor {
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 15px;
		/* height: 75px; */
	}
	.buttons {
		display: grid;
		align-items: center;
		justify-items: center;
		padding: 10px 0 10px 0;
	}
	.buttons button {
		margin: 0;
		background: none;
		border: none;
		padding: 0;
		cursor: pointer;
		transition: transform 0.15s ease;
	}
	.buttons button:hover {
		transform: scale(1.2);
	}
	.phrase {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(20px, 1fr));
		gap: 10px;
	}
	.chord {
		text-align: center;
		background: rgb(224, 67, 94);
		border-radius: 4px;
		color: #333d;
		user-select: none;
		cursor: grab;
		transition: background 0.15s ease, border 0.1s ease;
		display: grid;
		align-content: center;
		box-sizing: border-box;
		position: relative;
		border: 5px solid #3330;
	}
	.active {
		/* height: 100px; */
		/* transform: scale(1.05); */
		border: 5px solid #333d;
	}
	.chord:active {
		cursor: grabbing;
	}
	.loop.active * {
		stroke: #6e6ecc;
	}
	svg * {
		fill: none;
		stroke-width: 2.5px;
		stroke: #333;
		transition: stroke 0.15s ease;
	}
</style>
