<template>
  <div class="container">
    <AddTodo />
    <FilterTodos />
    <Todos />
  </div>
</template>

<script>
import Todos from '@/components/Todos.vue';
import AddTodo from '@/components/AddTodo.vue';
import FilterTodos from '@/components/FilterTodos.vue';

export default {
  name: 'App',
  components: {
    Todos,
    AddTodo,
    FilterTodos,
  },
};
</script>

<style>
body {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  line-height: 1.6;
  background-color: #e8f7f0;
  color: #777;
}

.container {
  max-width: 1190px;
  margin: auto;
  overflow: hidden;
  padding: 0 2rem;
}
</style>
