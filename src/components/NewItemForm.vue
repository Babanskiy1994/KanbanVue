<template>
	<div class="add-item">
		<form action="#" method="post" v-on:submit.prevent="submitForm">
			<input type="text" v-model="itemText" placeholder="Добавить задачу...">
		</form>
	</div>
</template>

<script>
	export default {
		name: 'NewItemForm',
		data() {
			return {
				itemText: '',
			};
		},
		methods: {
			submitForm() {
				if (this.itemText) {
					this.$store.commit('addItem', {
						text: this.itemText,
					});
					this.itemText = '';
				}
			},
		},
	};
</script>

<style>
	.add-item input {
		outline: none;
		border: 0;
		border-bottom: 1px solid rgba(0, 0, 0, 0.4);
		width: 100%;
		transition: all 0.25s;
		background: inherit;
		color: #2F4F4F;
		box-shadow: none;
		border-radius: 0;
	}
	.add-item input:focus {
		border-bottom-color: rgba(0, 0, 0, 1);
	}
</style>