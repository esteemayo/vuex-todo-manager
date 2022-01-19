<template>
  <div>
    <h3>Add Todo</h3>
    <div class="add">
      <form @submit.prevent="handleSubmit">
        <input
          type="text"
          ref="titleInputRef"
          v-model.trim="title"
          placeholder="Add Todo..."
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AddTodo',
  data() {
    return {
      title: '',
    };
  },
  methods: {
    ...mapActions(['addTodo']),
    handleSubmit() {
      if (this.title) {
        const newTodo = {
          id: new Date().getTime().toString(),
          title: this.title,
          completed: false,
        };

        this.addTodo(newTodo);
        this.title = '';
      }
    },
  },
  mounted() {
    this.$refs.titleInputRef.focus();
  },
};
</script>

<style scoped>
form {
  display: flex;
}

input[type='text'] {
  flex: 10;
  padding: 10px;
  border: 1px solid #41b883;
  outline: 0;
  caret-color: #41b883;
}

input[type='submit'] {
  flex: 2;
  background-color: #41b883;
  color: #fff;
  border: 1px solid #41b883;
  cursor: pointer;
  transition: all 0.2s;
}

input[type='submit']:focus {
  outline: none;
}

input[type='submit']:hover {
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}
</style>
