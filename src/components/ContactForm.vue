
<script>
  import emailjs from '@emailjs/browser';

  export default {
    methods: {
      sendEmail() {
        emailjs
          .sendForm('service_6bvdexr', 'template_5dzefhr', this.$refs.form, {
            publicKey: 'og2KnjmSNliiDe5rM',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      },
    },
  };
</script>
<template>
    <form id="contact-form">
        <!-- To simplify the tutorial, the value is static. -->
        <input type="hidden" name="contact_number" value="697483">
        <label>Name</label>
        <input type="text" name="user_name">
        <label>Email</label>
        <input type="email" name="user_email">
        <label>Message</label>
        <textarea name="message"></textarea>
        <input type="submit" value="Send">
    </form>
</template>

<style scoped>
#contact-form {
  width: 90%;
  margin-left: 5%;
  margin-top: 8%;
  margin-bottom: 15%;
}

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

input[type=text], [type=email], textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #161616;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}


input[type=submit] {
  background-color: #ddd;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #4CAF50;
}
</style>
