<template>
    <presentationPage />
    <portfolioPage />
    <contactPage />
</template>

<script>
    import PresentationPage from './PresentationPage.vue';
    import PortfolioPage from './PortfolioPage.vue';
    import ContactPage from './ContactPage.vue';

    export default {
        name: "HomePage",
        components: {
            'presentationPage': PresentationPage,
            'portfolioPage': PortfolioPage,
            'contactPage': ContactPage
        }
    }
</script>