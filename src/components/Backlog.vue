<template>
	<div class="backlog-view">
		<new-item></new-item>
		<br>
		<div class="card" v-for="item in items" :key="item.id">
			<div class="card-block">
				<i class="card-title"><span class="text-muted">#{{item.id}}</span>
				{{item.text}}</i>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapState } from 'vuex'; 
	import NewItemForm from './NewItemForm';

	export default {
		name: 'Backlog',
		components: {
			'new-item': NewItemForm,
		},
		computed: mapState({
			items: s => s.items.todo,
		}),
	};
</script>

<style>
	.card{
		margin-bottom: 5px;
	}
</style>