<template>
    <h1>Contact</h1>
    <contactform />
</template>

<script>
import ContactForm from '@/components/ContactForm.vue';

export default {
    name: "ContactPage",
    components: {
        'contactform': ContactForm,
    }
};
</script>