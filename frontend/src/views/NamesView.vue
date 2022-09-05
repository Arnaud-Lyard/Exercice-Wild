<template>
<header>
  <h1>
    <img src="https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png" alt="Wild Code School logo" />
    Les Argonautes
  </h1>
</header>

<!-- Main section -->
<main>
  
    <NamesForm />
  
  <!-- Member list -->
  <h2>Membres de l'équipage</h2>
  <section>
      <div v-if="loading">En cours de chargement</div>
      <div v-if="error">Il y a eu une erreur {{ error.message }}</div>
      <div v-if="names">
        <div class="member-list">
          <div v-for="name in names" :key="name.id">
            <div class="member-item">
                <h4>{{ name.name }}</h4>
            </div>
          </div>
        </div>
      </div>
  </section>
</main>

<footer>
  <p>Réalisé par Jason en Anthestérion de l'an 515 avant JC</p>
</footer>

</template>

<script setup>
import NamesForm from "@/components/NamesForm.vue";
import { storeToRefs } from "pinia";
import { useNameStore } from "@/stores/useNameStore";

const { names, loading, error } = storeToRefs(useNameStore());
const { fetchNames } = useNameStore();

fetchNames();
</script>

<style>
main {
  max-width: 960px;
  margin: 0 auto;
}

header {
  background: #f4f4f4;
  text-align: center;
  padding: 2em;
}

header img {
  max-width: 96px;
}

header h1 {
  font-size: 2.5em;
}

h1, h2 {
  text-align: center;
}

.member-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;
}

.member-item {
  padding: 0.25em 0;
}

footer {
  margin-top: 2em;
  text-align: center;
  color: #fff;
  background: #f76c6c;
  padding: 0.25em 0;
}
</style>