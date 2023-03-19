<template>
    <div>
        <div class="card mb-2 ">
            <div class="card-body bg-light">
                <h5 class="text-center">{{ pais.name.common }}</h5>
                <p class="text-center">
                    <img style="border: solid 1px #adb5bd" :src="pais.flags.png" :alt="`Bandera-${pais.name.common}`" class="img-fluid w-50">
                </p>
                <p class="card-text">
                    <span class="badge text-bg-dark w-100 mb-1">Nombre Oficial: {{ pais.name.official }}</span>
                    <span class="badge text-bg-info p-3 w-100 mb-1">Población: {{ numeroFormato(pais.population) }}</span>
                    <span class="badge text-bg-dark w-100 mb-1">Capital: {{ capitalFormato(pais.capital)  }}</span>
                    <span class="badge text-bg-dark w-100 mb-1">Región: {{ pais.region }}</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['pais'],

    setup(){
        const numeroFormato = (num) => {
            return new Intl.NumberFormat('de-DE').format(num)
        }
        const capitalFormato = (capital) => {
            if(JSON.stringify(capital)) {
                let separador = JSON.stringify(capital).split(`["`)[1]
                let nombreCapital = separador.split(`"]`)[0]
                return nombreCapital
            }
        }

        return {
            numeroFormato,
            capitalFormato
        }
    }
};
</script>
