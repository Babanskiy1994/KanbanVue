<template>
  <div class="card">
    <h3 class="card-header">{{title}}</h3>
    <div class="card-body">
      <draggable v-model="draggables" :options="{ group: 'default' }">
        <div v-for="item in items" :key="item.id">
          <item :item="item"></item>
        </div>
      </draggable>
    </div>
    <div class="card-footer text-muted">
      {{itemCount}}
    </div>
  </div>
</template>

<script>
  import TaskLaneItem from './TaskLaneItem';
  import Draggable from 'vuedraggable';

  export default {
    name: 'TaskLane',
    props: ['items', 'title', 'id'],
    components: {
      item: TaskLaneItem,
      draggable: Draggable,
    },
    computed: {
      itemCount() {
        if (!this.items) return '';
        if (this.items.length === 1) return '1 задача';
        return `${this.items.length} задач(и)`;
      },
      draggables: {
        get() {
          return this.items;
        },
        set(items) {
          this.$store.commit('updateItems', {
            items,
            id: this.id,
         });
       },
      },
    },
  };
</script>

<style>
  .card-body > * {
    min-height: 50px;
  }
</style>