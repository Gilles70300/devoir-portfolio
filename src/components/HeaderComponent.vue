<template>
    <RouterLink to="/">
        <img src="../assets/photos/Photo.jpg" alt="Image d'un homme aux cheveux bruns portant des lunettes et un pull noir">
    </RouterLink>

    <RouterLink to="/">
        <p>Page d'accueil</p>
    </RouterLink>

    <RouterLink to="/creations">
        <p>Mes créations</p>
    </RouterLink>

    <RouterLink to="/contact">
        <p>Contact</p>
    </RouterLink>
</template>

<script>
    export default {
    name: "HeaderComponent"
    }
</script>