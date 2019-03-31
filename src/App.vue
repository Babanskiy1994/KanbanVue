<template>
	<div id="app">
		<div class="header">
			<h1>Доска Канбан</h1>
		</div>
		<menu-bar></menu-bar>
		<router-view/>
	</div>
</template>

<script>
	import MenuBar from '@/components/MenuBar';
	export default {
		name: 'app',
		components: {
			'menu-bar': MenuBar
		}
	};
</script>

<style>
	.header {
		text-align: center;
		color:brown;
	}
</style>