<template>
  <div>
    <input
      type="text"
      placeholder="Ingrese País"
      class="form-control my-3"
      v-model="search"
      @keyup="procesarInput"
    />
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from 'vuex';

export default {
  setup() {
    const search = ref("");
    const store = useStore();
    const procesarInput = () => {
        store.dispatch('filtrarNombre', search.value)
    } 

    return {
      search,
      procesarInput,
    };
  },
};
</script>
