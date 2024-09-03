<template>
    <div id="creation">
        <h1>Mes créations</h1>

        <div>
            <h2>Mon curriculum vitae</h2>
            <img src="../assets/creations/cv/projet-cv.jpg" alt="Photo de mon projet de CV">
            
            <modalePage v-bind:revele="revele" v-bind:toggleModale="toggleModale" />
            <div v-on:click="toggleModale" class="btn btn-success">Plus d'infos sur ce projet</div>
        </div>
    
        <div>
            <h2>Cahier des charges</h2>
            <img src="../assets/creations/cahier des charges/cahier des charges.jpg" alt="Exemple d'un projet de cahier des charges pour un site web">
        </div>
    
        <div>
            <h2>Dynamisme d'un espace commentaire</h2>
            <img src="../assets/creations/espace commentaire/Dynamisme espace commentaire.jpg" alt="Photo de mon projet de dynamisme d'un espace commentaire">
        </div>
    </div>
</template>

<script>
    import ModalePage from '@/components/ModalePage.vue';

    export default {
        name: "PortfolioPage",
        data() {
            return {
                revele: false
            }
        },
        components: {
            'modalePage': ModalePage,
        },
        methods: {
            toggleModale: function (){
                this.revele = !this.revele
            }
        }
    }
</script>

<style scoped>
    img {
        height: 700px;
    }
</style>