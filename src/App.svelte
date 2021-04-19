<script>
	import { Router, Link, Route } from "svelte-routing";

	import Introduction from "./Introduction.svelte";
	import Prompt from "./Prompt.svelte";

	import check from "./check.svg";
	import logo from "./logo.svg";
	export let url = "";
</script>

<Router {url}>
	<main>
		<div class="sidebar">
			<div class="logo">
				<img src={logo} alt="" />
			</div>
			<div class="section">
				<h1>Writing Chord Progressions</h1>
				<Link to="/">
					<div class="subsection">
						<h2>Lesson 1</h2>
						<h3>Introduction</h3>
						<div class="completed" class:visible={true}>
							<img class="check" src={check} alt="" />
						</div>
					</div>
				</Link>
				<Link to="prompt">
					<div class="subsection">
						<h2>Lesson 2</h2>
						<h3>Composing with a prompt</h3>
						<div class="completed" class:visible={false}>
							<img class="check" src={check} alt="" />
						</div>
					</div>
				</Link>
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
		<div class="content">
			<Route path="/" component={Introduction} />
			<Route path="prompt" component={Prompt} />
		</div>
	</main>
</Router>

<style>
	main {
		display: grid;
		grid-template-columns: 300px 1fr;
		grid-template-areas: "sidebar content";
		gap: 20px;
		height: 100%;
	}
	@media screen and (max-width: 1600px) {
		main {
			grid-template-columns: 300px 1fr;
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
	.content {
		grid-area: content;
		overflow: auto;
	}
</style>
