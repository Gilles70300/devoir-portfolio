<template>
    <div class="bloc-modale" v-if="revele">

        <div class="overlay" v-on:click="toggleModale"></div>

        <div class="modale card">
            <div class="btn-modale btn btn-danger" v-on:click="toggleModale">X</div>
            <h2>Le contenu de la modale CV</h2>
        </div>

    </div>
</template>

<script>
export default {
    name: "ModalePage",
    props: ['revele', 'toggleModale']
}
</script>