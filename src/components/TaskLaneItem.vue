<template>
  <div class="card task-lane-item">
    <div class="card-block">
      <i class="card-title">
        <span class="text-muted">#{{item.id}}</span>
        {{item.text}}
      </i>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TaskLaneItem',
    props: ['item'],
  };
</script>

<style>
  .task-lane-item {
    background-color: honeydew;
  }
</style>