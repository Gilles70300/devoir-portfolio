<template>
    <HeaderComponent />

    <h1>Contact</h1>

    <div class="container">
        <form>
            <label>Nom / Prénom </label>
            <input type="text" v-model="name" name="name">
    
            <label>Objet</label>
            <input type="text" v-model="object" name="object">
    
            <label>Message</label>
            <textarea name="message" v-model="message"></textarea>
              
            <input type="submit" value="Envoyer">
        </form>
    </div>
    
    <FooterComponent />
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  name: 'ContactUs',
  data() {
    return {
      name: '',
      object: '',
      message: ''
    }
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm('service_gf5n4mu', 'template_t1gh4cy', e.target,
        'y8kq9c_LjUYQuDRfo', {
          name: this.name,
          object: this.object,
          message: this.message
        })

      } catch(error) {
          console.log({error})
      }
      // Reset form field
      this.name = ''
      this.object = ''
      this.message = ''
    },
  }
}
</script>

<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
</script>

<style scoped>
* {box-sizing: border-box;}

.container {
  display: block;
  margin:auto;
  text-align: center;
  border-radius: 5px;
  background-color: #f2f2f2;
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