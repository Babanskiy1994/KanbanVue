<template>
	<div class="backlog-view">
		<new-item></new-item>
		<br>
		<div class="card" v-for="item in items" :key="item.id">
			<div class="card-block">
				<i class="card-title"><span class="text-muted">#{{item.id}}</span>
				{{item.text}} <span :class="badgeClass(item)">{{badgeText(item)}}</span></i>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapState } from 'vuex'; 
	import NewItemForm from './NewItemForm';

	const badgeDetail = {
		todo: {
			text: 'сделать',
			class: 'badge badge-warning',
		},
		inProgress: {
			text: 'в процессе',
			class: 'badge badge-info',
		},
		done: {
			text: 'сделано',
			class: 'badge badge-success',
		},
	};
	export default {
		name: 'Backlog',
		components: {
			'new-item': NewItemForm,
		},
		computed: mapState({
			items: s => [...s.items.todo, ...s.items.inProgress, ...s.items.done]
		}),
		methods: {
			itemLane(item) {
				if (this.$store.state.items.todo.includes(item)) {
					return 'todo';
				} else if (this.$store.state.items.inProgress.includes(item)) {
					return 'inProgress';
				}

				return 'done';
			},
			badgeText(item) {
				const lane = this.itemLane(item);
				return badgeDetail[lane].text;
			},
			badgeClass(item) {
				const lane = this.itemLane(item);
				return badgeDetail[lane].class;
			},
		},
	};
</script>

<style>
	.card{
		margin-bottom: 5px;
	}
</style>