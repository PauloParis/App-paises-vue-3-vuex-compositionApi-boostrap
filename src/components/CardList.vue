<template>
    <div>
        <div class="row">
            <div 
                class="col-12 col-md-4"
                v-for="(pais) in paises" :key="pais.name"    
            >
                <Card :pais="pais"></Card>
            </div>
        </div>
    </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import Card from './Card.vue'

export default {

    components: {
        Card
    },

    setup(){
        
        const store= useStore();
        const paises = computed(() => {
            //return store.state.paises
            return store.getters.topPaisesPoblacion
        })
        
        onMounted(async() => {
            //store.state.paises
            await store.dispatch('getPaises') //dispatch es como el accion, ejecuta una acción
            await store.dispatch('filtrarRegion', 'Americas')
        })

        return {
            paises
        }
   }
};
</script>