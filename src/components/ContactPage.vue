<template>
  <div id="contact">
    
    <h2>Contact</h2>

    <div class="container">

        <form @submit.prevent="sendEmail">
          <label for="name">Nom / Prénom</label>
          <input type="text" id="name" v-model="name" required>
      
          <label for="object">Objet</label>
          <input type="text" id="object" v-model="object" required>
      
          <label for="message">Message</label>
          <textarea id="message" v-model="message" required></textarea>
      
          <input type="submit" value="Send">
        </form>

    </div>
  </div>

</template>

<script>
import emailjs from 'emailjs-com';

const SERVICE_ID = 'service_leifx3j';
const TEMPLATE_ID = 'template_t1gh4cy';
const USER_ID = 'fVkHkJBuHIuONsD1T';

export default {
  name: "ContactForm",
  data() {
    return {
      name: '',  
      object: '',
      message: ''
    }
  },
  methods: {
    sendEmail() {
      emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        name: this.name,
        object: this.object,  
        message: this.message
      }, USER_ID)
        .then((response) => {
          console.log('Email successfully sent!', response.status, response.text)
          // Clear form fields
          this.name = ''
          this.object = '' 
          this.message = ''
        }, (error) => {
          console.log('Failed to send email:', error)
        })
    }
  }
}
</script>
