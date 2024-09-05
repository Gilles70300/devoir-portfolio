<template>
    <div class="bloc-modale" v-if="revele1">

        <div class="overlay" v-on:click="toggleModale1"></div>

        <div class="modale card">
            <div class="btn-modale btn btn-danger" v-on:click="toggleModale1">X</div>
            <h2>Curriculum Vitae</h2>
            <p>Date de création: 26 juin 2024</p>
            <p>Technologies utilisées: HTML5 et CSS3 (Flexbox)</p>
            <a href="https://github.com/Gilles70300/Projet-devoir-CV" target="blank">Lien vers le GitHub du projet</a>
        </div>

    </div>

    <div class="bloc-modale" v-if="revele2">

        <div class="overlay" v-on:click="toggleModale2"></div>

        <div class="modale card">
            <div class="btn-modale btn btn-danger" v-on:click="toggleModale2">X</div>
            <h2>Cahier des charges</h2>
            <p>Date de création: 08 juillet 2024</p>
            <a href="../assets/creations/cahier des charges/Cahier des charges La Socketterie.pdf" download target="blank">Pour voir le cahier des charges, cliquez ici!</a>
        </div>

    </div>

    <div class="bloc-modale" v-if="revele3">

        <div class="overlay" v-on:click="toggleModale3"></div>

        <div class="modale card">
            <div class="btn-modale btn btn-danger" v-on:click="toggleModale3">X</div>
            <h2>Dynamisme d'un espace commentaire</h2>
            <p>Date de création: 31 juillet 2024</p>
            <p>Technologies utilisées: HTML5 et Javascript</p>
            <a href="https://github.com/Gilles70300/DynamiserUnEspaceDeCommentaires_DocumentsDevoir" target="_blank">Lien vers le GitHub du projet</a>
        </div>

    </div>
</template>

<script>
export default {
    name: "ModalePage",
    props: [
        'revele1', 
        'revele2',
        'revele3',
        'toggleModale1', 
        'toggleModale2',
        'toggleModale3'
    ]
}
</script>