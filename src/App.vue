<template>
    <headerComponent />
    <homePage />
    <portfolioPage />
    <contactPage />
    <footerComponent />
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import HomePage from './components/HomePage.vue';
import PortfolioPage from './components/PortfolioPage.vue';
import ContactPage from './components/ContactPage.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default {
  name: "App",
  components: {
    'headerComponent': HeaderComponent,
    'homePage': HomePage,
    'portfolioPage': PortfolioPage,
    'contactPage': ContactPage,
    'footerComponent': FooterComponent,
  }
};
</script>