<template>
	<div id="app">
		<div class="header">
			<h1>Kanban Board</h1>
		</div>
		<router-view/>
	</div>
</template>

<script>
	export default {
		name: 'app',
	};
</script>

<style>
	.header {
		text-align: center;
	}
</style>