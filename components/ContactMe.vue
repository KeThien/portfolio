<template>
  <section id="hp-contact" class="contact">
    <h2>Contact</h2>
    <form name="contact" action="/thank-you" netlify-honeypot="bot-field" method="post" netlify>
      <input type="hidden" name="form-name" value="contact">
      <p class="hidden">     
        <label>Don’t fill this out: <input name="bot-field"></label>   
      </p>
      <div class="form-container">
        <p>
          If you want to say <em>’Hello’</em> or hire me
        </p>
        
        <div class="form-wrap">
          <div class="form__left">
            <label for="name">Name*</label>
            <input id="contact-name" type="text" name="name" placeholder="Your name">
            <label for="email">Email*</label>
            <input id="contact-email" type="email" name="email" placeholder="Your email">
            <label for="subject">Subject</label>
            <input id="contact-subject" type="text" name="subject" placeholder="The subject">
          </div>
          
          <div class="form__right">
            <label for="msg">Message</label>
            <textarea id="contact-msg" class="common" name="msg" placeholder="Write something..." />
          </div>
        </div>

        <div class="contact-notice">
          *required
        </div>
        <input type="submit" value="Submit">
      </div>
    </form>
  </section>
</template>

<script>
export default {}
</script>

<style>
</style>
