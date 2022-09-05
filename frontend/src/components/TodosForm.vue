<template>

    <div class="form">
        <form @submit.prevent="handleSubmit">
            <label for="title">Titre de la todo</label>
            <input type="text" name="title" v-model="title">

            <label for="content">Contenu de la todo</label>
            <textarea name="content" id="" cols="30" rows="10" v-model="content"></textarea>

            <button type="submit">Enregistrer</button>
        </form>

    </div>
    
</template>

<script setup>

import { useTodoStore } from "@/stores/useTodoStore";
import { ref } from 'vue'

const { postTodo, fetchTodos } = useTodoStore();
const title = ref('')
const content = ref('')

const handleSubmit = async () => {
    await postTodo(title, content)
    title.value= "",
    content.value= ""
    await fetchTodos()
}

</script>

<style scoped>
.form {
    width: 400px;
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
form button {
  border: 0;
  background-color: rgb(0, 189, 223);
  color: #fff;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.2em;
}
form button:hover {
    background-color: rgb(0, 217, 255);
    transition: 0.3s;
}
textarea {
    padding: 10px;
    margin-top: 10px;
    width: 392px;
    height: 200px;
    margin-bottom: 20px;
}
</style>