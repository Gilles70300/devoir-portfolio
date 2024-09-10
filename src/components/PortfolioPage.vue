<template>
    <div id="creation">
        
        <h2>Mes créations</h2>

        <div class="project">
            <div>
                <h3>Mon curriculum vitae</h3>
                <img id="homework" src="../assets/creations/cv/projet-cv.jpg" alt="Photo de mon projet de CV" v-on:click="toggleModale1">
                <modalePage v-bind:revele1="revele1" v-bind:toggleModale1="toggleModale1"/>
            </div>

            <div>
                <h3>Cahier des charges</h3>
                <img id="homework" src="../assets/creations/cahier des charges/cahier des charges.jpg" alt="Exemple d'un projet de cahier des charges pour un site web" v-on:click="toggleModale2">
                <modalePage v-bind:revele2="revele2" v-bind:toggleModale2="toggleModale2" />
            </div>
        
            <div>
                <h3>Dynamisme d'un espace commentaire</h3>
                <img id="homework" src="../assets/creations/espace commentaire/Dynamisme espace commentaire.jpg" alt="Photo de mon projet de dynamisme d'un espace commentaire" v-on:click="toggleModale3">
                <modalePage v-bind:revele3="revele3" v-bind:toggleModale3="toggleModale3" />
            </div>
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