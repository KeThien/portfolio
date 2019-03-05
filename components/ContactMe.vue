<template>
  <section id="hp-contact" class="contact">
    <h2>Contact</h2>
    <form action="">
      <div class="form-container">
        <p>
          If you want to say <br> <em>’Hello’</em> or hire me
        </p>
        <label for="name">Name*</label>
        <input id="contact-name" type="text" name="name" placeholder="Your name">
        <label for="email">Email*</label>
        <input id="contact-email" type="email" name="email" placeholder="Your email">
        <label for="subject">Subject</label>
        <input id="contact-subject" type="text" name="subject" placeholder="The subject">
        <label for="msg">Message</label>
        <textarea id="contact-msg" class="common" name="msg" placeholder="Write something..." />
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
