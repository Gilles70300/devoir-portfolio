<template>
    <div class="creation">
        <h1>Mes créations</h1>

        <div>
            <h2>Mon curriculum vitae</h2>
            <img src="../assets/creations/cv/projet-cv.jpg" alt="Photo de mon projet de CV">
            
            <modaleCv v-bind:revele="revele" v-bind:toggleModale="toggleModale" />
            <div v-on:click="toggleModale" class="btn btn-success">Plus d'infos sur ce projet</div>
        </div>
    
        <div>
            <h2>Cahier des charges</h2>
            <img src="../assets/creations/cahier des charges/cahier des charges.jpg" alt="Exemple d'un projet de cahier des charges pour un site web">
    
            <modaleCahier v-bind:revele="revele" v-bind:toggleModale="toggleModale" />
            <div v-on:click="toggleModale" class="btn btn-success">Plus d'infos sur ce projet</div>
        </div>
    
        <div>
            <h2>Dynamisme d'un espace commentaire</h2>
            <img src="../assets/creations/espace commentaire/Dynamisme espace commentaire.jpg" alt="Photo de mon projet de dynamisme d'un espace commentaire">
    
            <modaleCommentaire v-bind:revele="revele" v-bind:toggleModale="toggleModale" />
            <div v-on:click="toggleModale" class="btn btn-success">Plus d'infos sur ce projet</div>
        </div>
    </div>
</template>

<script>
    import ModaleCV from '@/components/ModaleCV.vue';
    import ModaleCahier from '@/components/ModaleCahier.vue';
    import ModaleCommentaire from '@/components/ModaleCommentaire.vue';

    export default {
        name: "PortfolioPage",
        data() {
            return {
                revele: false
            }
        },
        components: {
            'modaleCv': ModaleCV,
            'modaleCahier': ModaleCahier,
            'modaleCommentaire': ModaleCommentaire
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