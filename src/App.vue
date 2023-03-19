<template>
  <main class="container">
    <h1 class="text-center mt-4">Paises API</h1>
    <continentes></continentes>
    <Buscador></Buscador>
    <CardList></CardList>
  </main>
</template>


<script>
import Buscador from './components/Buscador.vue';
import CardList from './components/CardList.vue';
import Continentes from './components/Continentes.vue';

export default {
  components: {CardList, Continentes, Buscador}
}

</script>

,
    Buscardor