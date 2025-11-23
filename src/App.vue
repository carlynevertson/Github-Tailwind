<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<div id="app">
		<githubpage />
		<MarkdownViewer :content="readmeText" />
	</div>
</template>

<script>
import Githubpage from './components/githubpage.vue';

export default {
	name: 'App',
	components: {
		Githubpage,
	},
};
</script>

<style></style>
