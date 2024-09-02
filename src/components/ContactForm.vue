<template>
    <div class="container">
        <form @submit.prevent="sendEmail">
          <label for="name">Nom / prénom</label>
          <input type="text" id="name" v-model="name" required>
    
          <label for="object">Objet</label>
          <input type="text" id="object" v-model="object" required>
    
          <label for="message">Message</label>
          <textarea id="message" v-model="message" required></textarea>
    
          <input type="submit" value="Send">
        </form>
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

<style scoped>
* {box-sizing: border-box;}

.container {
  display: block;
  margin:auto;
  text-align: center;
  border-radius: 5px;
  background-color: #FDDA24;
  padding: 20px;
  width: 50%;
}

label {
  float: left;
}

input[type=text], textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}
</style>
