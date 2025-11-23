<template>
	<div v-html="readme" class="prose prose-sm max-w-none"></div>
</template>

<script>
import { marked } from 'marked';

export default {
	name: 'markdownViewer',
	props: {
		content: {
			type: String,
			required: true,
			default: '',
		},
	},
	computed: {
		readme() {
			return marked(this.content);
		},
	},
};
</script>
