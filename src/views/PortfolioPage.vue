<template>
    <HeaderComponent />

    <h1>Mes créations</h1>

    <div>
        <h2>Mon curriculum vitae</h2>
        <img src="../assets/creations/projet-cv.jpg" alt="Photo de mon projet de CV">
    </div>

    <div>
        <h2>Cahier des charges</h2>
        <img src="../assets/creations/cahier des charges/cahier des charges.jpg" alt="Exemple d'un projet de cahier des charges pour un site web">
    </div>

    <div>
        <h2>Dynamisme d'un espace commentaire</h2>
        <img src="../assets/creations/Dynamisme espace commentaire.jpg" alt="Photo de mon projet de dynamisme d'un espace commentaire">
    </div>

    <FooterComponent />
</template>

<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
</script>