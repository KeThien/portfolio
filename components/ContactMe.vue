<template>
  <section id="hp-contact" class="contact">
    <h2>Contact</h2>
    <div class="form-wrapper" :style="{ height: formH }">
      <transition name="fly-away">
        <form
          v-show="!isSend"
          name="contact"
          action
          netlify-honeypot="bot-field"
          method="post"
          netlify
          @submit.prevent="sendForm"
        >
          <input type="hidden" name="form-name" value="contact">
          <p class="hidden">
            <label>
              Don’t fill this out:
              <input name="bot-field">
            </label>
          </p>
          <div class="form-container">
            <p>
              If you want to say
              <em>’Hello’</em> or hire me
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
                <textarea
                  id="contact-msg"
                  class="common"
                  name="msg"
                  placeholder="Write something..."
                />
              </div>
            </div>

            <div class="contact-notice">
              *required
            </div>
            <button type="submit" class="btn-submit">
              <i class="fa fa-paper-plane" /> Send
            </button>
          </div>
        </form>
      </transition>
      <transition name="fade">
        <div v-if="showThank" class="thank-you">
          <h3>Thank you</h3>
          <p>Your message has been sent.</p>
          <button @click="closeThankYou">
            <i class="fa fa-times" /> Close
          </button>
        </div>
      </transition>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isSend: false,
      showThank: false,
      formH: Number
    }
  },
  methods: {
    sendForm() {
      const form = document.querySelector('.form-wrapper')
      this.formH = form.offsetHeight + 'px'
      this.isSend = !this.isSend
      this.showThankYou()
    },
    showThankYou() {
      window.setTimeout(() => {
        this.showThank = true
      }, 501)
    },
    closeThankYou() {
      this.showThank = false
      window.setTimeout(() => {
        this.isSend = false
      }, 501)
    }
  }
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.fly-away-enter-active,
.fly-away-leave-active {
  transition: all 0.7s;
}
.fly-away-enter {
  opacity: 0;
}
.fly-away-leave-to {
  transform: translateX(200%);
  opacity: 0;
}
.form-wrapper {
}

.thank-you {
  border: 0px solid white;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h3 {
    font-family: 'Aleo', serif;
    font-size: 2em;
    font-weight: 300;
    text-transform: uppercase;
  }
  button {
    margin: 30px;
    padding: 9px;
    background-color: #fff3e3;
    border: none;
    border-radius: 2px;
    cursor: pointer;
  }
}
</style>
