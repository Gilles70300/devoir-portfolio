<template>
    <div class="footer">
        <a href="https://www.facebook.com/gilles.winand/?locale=fr_FR" target="blank"><img src="../assets/photos/facebook.svg" alt="Logo de Facebook"></a>
        <a href="https://www.linkedin.com/in/gilles-winand-024807314/" target="blank"><img src="../assets/photos/linkedin.svg" alt="Logo de LinkedIn"></a>
        <a href="https://github.com/Gilles70300" target="blank"><img src="../assets/photos/github.svg" alt="Logo de GitHub"></a>

        <small>Dernière mise à jour du site le <time datetime="2024-09-10">{{ myDate }}</time></small>
    </div>

</template>

<script>
    export default {
        name: "FooterComponent",
        data() {
            return {
                myDate: new Date().toLocaleString()
            };
        }
    };
</script>