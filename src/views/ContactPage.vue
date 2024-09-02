<template>
    <div class="contact">
        <h1>Contact</h1>
        <contactForm />
    </div>
</template>

<script>
import ContactForm from '@/components/ContactForm.vue';

export default {
    name: "ContactPage",
    components: {
        'contactForm': ContactForm,
    }
};
</script>

<style scoped>

</style>