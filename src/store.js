import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		items: {
			todo: [],
			inProgress: [],
			done: [],
		},
		nextId: 1,
	},
	mutations: {
		addItem(state, item) {
			state.items.todo.push(Object.assign(item, { id: state.nextId }));
		state.nextId += 1;
		},
		updateItems(state, payload) {
			state.items[payload.id] = payload.items;
		},
		removeItem(state, item) {
			[state.items.todo, state.items.inProgress, state.items.done].forEach(
				array => {
					const indexInArray = array.findIndex(i => i.id === item.id);
					if (indexInArray > -1) {
						array.splice(indexInArray, 1);
					}
				}
			);
		}
	},
});