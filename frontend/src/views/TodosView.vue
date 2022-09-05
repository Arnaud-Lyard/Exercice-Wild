<template>
  <h1>TO DO LIST</h1>
  <div class="container">
    <div class="left-content">
      <div v-if="loading">En cours de chargement</div>
      <div v-if="error">Il y a eu une erreur {{ error.message }}</div>
      <div v-if="todos">
        <div v-for="todo in todos" :key="todo.id">
          <div class="todo-content">
            <router-link :to="{ name: 'TodosDetail', params: { id: todo.id } }">
              <h4>{{ todo.title }}</h4>
              <p>{{ todo.content }}</p>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <TodosForm />
  </div>
</template>

<script setup>
import TodosForm from "@/components/TodosForm.vue";
import { storeToRefs } from "pinia";
import { useTodoStore } from "@/stores/useTodoStore";

const { todos, loading, error } = storeToRefs(useTodoStore());
const { fetchTodos } = useTodoStore();

fetchTodos();
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap-reverse;
}
.left-content {
  display: flex;
  justify-content: center;
  width: 1000px;
}
h1 {
  text-align: center;
  color: rgb(0, 189, 223);
}
.todo-content {
  position: relative;
  background: #fff;
  border-radius: 4px;
  margin: 20px auto;
  padding: 20px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
}
.todo-content a {
  text-decoration: none;
  color: #000;
}
.todo-content:hover {
  background: rgb(250, 250, 250);
}
.todo-content h4 {
  color: rgb(0, 189, 223);
  font-size: 1.2em;
}
.icon {
  position: absolute;
  font-size: 18px;
  top: 20px;
  right: 20px;
  color: #000;
}
.icon:hover {
  color: rgb(0, 189, 223);
  transition: 0.3s;
}
</style>