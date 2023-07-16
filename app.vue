<script setup lang="ts">
    const { todos, addTodo, updateTodo, deleteTodo }= useTodos();
    const input= ref("")
    function addTodoHandler () {
      addTodo(input.value)
      input.value="";
    }
</script>
<template>
  <div>
    <h1>{{ todos }}</h1>
    <div class="container">
      <NCard>
        <h1>My Todos</h1>
        <div class="add-todo">
          <input type="text" v-model="input" placeholder="Add a new todo">
          <NButton @click="addTodoHandler">Add TODO</NButton>
        </div>
        <NCard @click="updateTodo(todo.id)" class="card" v-for="todo in todos" :key="todo.id">
          <h4 :class="todo.completed ? 'completed' : null">{{ todo.item }}</h4>
          <p class="delete-icon" @click="deleteTodo(todo.id)">x</p>
        </NCard>
      </NCard>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 2rem;
  margin:0 auto;
  max-width: 80%;

}
.n-card {
  padding: 2rem;
}

input {
  outline: hidden;
}
.add-todo {
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
}
.card {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  margin-top: 1rem;
  cursor: pointer;
}
.completed {
  text-decoration: line-through;
}
.delete-icon {
  padding: 0 1rem;
}
</style>
