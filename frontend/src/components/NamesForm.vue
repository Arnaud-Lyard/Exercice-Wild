<template>

        <form @submit.prevent="handleSubmit">
            <label for="name">Nom de l'Argonaute</label>
            <input type="text" name="name" v-model="name">

            <button type="submit">Enregistrer</button>
        </form>
    
</template>

<script setup>

import { useNameStore } from "@/stores/useNameStore";
import { ref } from 'vue'

const { postName, fetchNames } = useNameStore();
const name = ref('')

const handleSubmit = async () => {
    await postName(name)
    name.value= "",
    await fetchNames()
}

</script>

<style>
form {
    text-align: center;
    width: 100%;
    padding: 20px;
}
label {
    display: block;
    font-size: 1.2em;
    text-align: center;
}
input {
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 20px;
  width: 50%;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
}
form button {
  border: 0;
  background-color: #f76c6c;
  color: #fff;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.2em;
  margin-left: 10px;
}
form button:hover {
    background-color: #f69393;
    transition: 0.3s;
}
</style>