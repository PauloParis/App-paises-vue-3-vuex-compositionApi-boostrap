import { createStore } from 'vuex'

export default createStore ({
    state: {
        paises: [],
        paisesFiltrados: []
    },
    mutations: {
        setPaises(state, payload) {
            state.paises = payload
        },
        setPaisesFiltrados(state, payload) {
            state.paisesFiltrados = payload
        }
    },
    actions: {
        async getPaises({commit}) {
            try {
                const res = await fetch('/api.json')
                const data = await res.json();
                commit('setPaises', data)
            } catch (error) {
                console.log(error)
            }
        },
        filtrarRegion({commit, state}, region) {
            const filtro = state.paises.filter((item) => 
                //item.region === region // no muestra todos los paises al filtrar
                //alternativa -> 
                item.region.includes(region)
            )
            commit('setPaisesFiltrados', filtro)
        },
        filtrarNombre({commit, state}, search) {
            const filtro = state.paises.filter((item) => {
                if(item.name.common.toLowerCase().includes(search.toLowerCase())) return item
        })
            commit('setPaisesFiltrados', filtro)
        }
    },
    getters: {
        topPaisesPoblacion(state) {
            return state.paisesFiltrados.sort((a, b) => {
                return a.population < b.population ? 1 : -1 //return por ser funcion de flecha
            })
        }
    },

    modules: {

    }
})