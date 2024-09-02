<template>
    <headerComponent />
    <RouterView />
    <footerComponent />
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default {
  name: "App",
  components: {
    'headerComponent': HeaderComponent,
    'footerComponent': FooterComponent,
  }
};
</script>

<style>
  #app {
    background-image: url(../src/assets/photos/Flag_of_Belgium_\(civil\).jpg);
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position:left top;
    background-size: cover;
  }
</style>