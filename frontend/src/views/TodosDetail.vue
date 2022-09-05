<template>
<div>
    <h1>TO DO DETAILS</h1>
    <div class="form">
        <div v-if="loading">En cours de chargement</div>
        <div v-if="error">Il y a eu une erreur {{ error.message }}</div>
        <div v-if="todo">
            <form>
                <label for="title">Titre de la todo</label>
                <input type="text" name="title" v-model="todo.title">
                <label for="content">Contenu de la todo</label>
                <textarea name="content" id="" cols="30" rows="10" v-model="todo.content"></textarea>
            </form>
        </div>
    </div>
</div>

</template>

<script setup>
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia'
import { useTodoStore } from "@/stores/useTodoStore";

const route = useRoute();
const id = route.params.id;
const { fetchTodo } = useTodoStore();
const { todo, loading, error } = storeToRefs(useTodoStore());

fetchTodo(id)

</script>

<style scoped>
h1 {
    color: rgb(0, 189, 223);
    text-align: center;
}
/* Form */
.form {
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px;
}
label, input {
    display: block;
    font-size: 1.2em;
}
input {
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 20px;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
}
.button-submit {
  border: 0;
  background-color: rgb(0, 189, 223);
  color: #fff;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.2em;
}
.button-submit:hover {
    background-color: rgb(0, 217, 255);
    transition: 0.3s;
}
.button-delete {
  border: 0;
  background-color: rgb(172, 0, 0);
  color: #fff;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.2em;
  margin-left: 10px;
}
.button-delete:hover {
    background-color: rgb(238, 2, 2);
    transition: 0.3s;
}
textarea {
    padding: 10px;
    margin-top: 10px;
    width: 992px;
    height: 200px;
    margin-bottom: 20px;
}
@media(max-width: 1040px) {
textarea {
    width: 100%;
}
}
</style>