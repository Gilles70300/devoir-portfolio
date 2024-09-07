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