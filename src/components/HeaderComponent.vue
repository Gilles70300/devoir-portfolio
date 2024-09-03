<template>
        <nav> 
            <router-link to="/">
                <img src="../assets/photos/Photo.jpg" alt="Image d'un homme aux cheveux bruns portant des lunettes et un pull noir">
            </router-link>
    
            <router-link to="/">Page d'accueil</router-link>
    
            <router-link to="/creation#creation">Mes créations</router-link>
        
            <router-link to="/contact#contact">Contact</router-link>
        </nav>
</template>

<script>
    export default {
    name: "HeaderComponent"
    }
</script>

<style scoped>



</style>