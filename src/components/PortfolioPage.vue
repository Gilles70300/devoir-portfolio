<template>
    <div id="creation">
        <h1>Mes créations</h1>

        <div>
            <h2>Mon curriculum vitae</h2>
            <img src="../assets/creations/cv/projet-cv.jpg" alt="Photo de mon projet de CV">
            <modalePage v-bind:revele1="revele1" v-bind:toggleModale1="toggleModale1"/>

            <div class="btn btn-success" v-on:click="toggleModale1">Plus d'infos sur le projet</div>
        </div>
    
        <div>
            <h2>Cahier des charges</h2>
            <img src="../assets/creations/cahier des charges/cahier des charges.jpg" alt="Exemple d'un projet de cahier des charges pour un site web">
            <modalePage v-bind:revele2="revele2" v-bind:toggleModale2="toggleModale2" />

            <div class="btn btn-success" v-on:click="toggleModale2">Plus d'infos sur le projet</div>
        </div>
    
        <div>
            <h2>Dynamisme d'un espace commentaire</h2>
            <img src="../assets/creations/espace commentaire/Dynamisme espace commentaire.jpg" alt="Photo de mon projet de dynamisme d'un espace commentaire">
            <modalePage v-bind:revele3="revele3" v-bind:toggleModale3="toggleModale3" />

            <div class="btn btn-success" v-on:click="toggleModale3">Plus d'infos sur le projet</div>
        </div>
    </div>
</template>

<script>
    import ModalePage from './ModalePage.vue';
    export default {
        name: "PortfolioPage",
        data() {
            return {
                revele1: false,
                revele2: false,
                revele3: false
            }
        },
        components: {
            'modalePage': ModalePage
        },
        methods: {
            toggleModale1: function (){
                this.revele1 = !this.revele1
            },
            toggleModale2: function (){
                this.revele2 = !this.revele2
            },
            toggleModale3: function (){
                this.revele3 = !this.revele3
            }
        }
    }
</script>