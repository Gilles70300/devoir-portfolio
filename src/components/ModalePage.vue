<template>
    <div class="bloc-modale" v-if="revele1">
        <div class="overlay" v-on:click="toggleModale1"></div>
        <div class="modale card">
            <div class="btn-modale btn btn-danger" v-on:click="toggleModale1">X</div>
            <h3>Curriculum Vitae</h3>
            <p>Date de création: 26 juin 2024</p>
            <p>Technologies utilisées: HTML5 et CSS3 (Flexbox)</p>
            <p>Ce CV a été réalisé dans le cadre d'un devoir lors de ma formation. Nous devions reproduire le CV à partir d'une maquette fournie.</p>
            <a href="https://github.com/Gilles70300/Projet-devoir-CV" target="blank">Lien vers le GitHub du projet</a>
        </div>
    </div>

    <div class="bloc-modale" v-if="revele2">
        <div class="overlay" v-on:click="toggleModale2"></div>
        <div class="modale card">
            <div class="btn-modale btn btn-danger" v-on:click="toggleModale2">X</div>
            <h3>Cahier des charges</h3>
            <p>Date de création: 08 juillet 2024</p>
            <p>
                Ce projet a été réalisé dans le cadre de formation. 
                Il a été réalisé en faisant beaucoup de recherches sur internet pour se renseigner sur la concurrence, sur les besoins du client, sur le marché actuel dans le secteur de la société, etc..
            </p>
            <a :href="`${publicPath}Cahier des charges La Socketterie.pdf`" download="download">Télécharger le cahier des charges</a>
        </div>
    </div>

    <div class="bloc-modale" v-if="revele3">
        <div class="overlay" v-on:click="toggleModale3"></div>
        <div class="modale card">
            <div class="btn-modale btn btn-danger" v-on:click="toggleModale3">X</div>
            <h3>Dynamisme d'un espace commentaire</h3>
            <p>Date de création: 31 juillet 2024</p>
            <p>Technologies utilisées: HTML5 et Javascript</p>
            <p>3ème devoir de ma formation, nous devions ajouter un nouveau commentaire à la liste avec les données des champs de commentaires.</p>
            <div class="example">
                <div>
                    <h4>Avant envoi du commentaire</h4>
                    <img src="../assets/creations/espace commentaire/avant envoi.jpg" alt="Image de mon espace commentaire avant l'envoi du commentaire">
                </div>

                <div>
                    <h4>Après envoi du commentaire</h4>
                    <img src="../assets/creations/espace commentaire/Dynamisme espace commentaire.jpg" alt="Image de mon espace commentaire après l'envoi du commentaire">
                </div>
            </div>
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
    ],
    data () {
        return {
            publicPath: process.env.BASE_URL
        }
    }
}
</script>