<template>
  <section id="hp-contact" class="contact">
    <h2>Contact</h2>
    <div class="form-wrapper" :style="{ height: formH }">
      <transition name="fly-away">
        <form
          v-show="!isSend"
          name="contact"
          method="post"
          autocomplete="off"
          data-netlify="true"
          netlify-honeypot="bot-field"
          @submit.prevent="handleSubmit"
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
              <em>’Hello’</em> or hire me.
            </p>

            <div class="form-wrap">
              <div class="form__left">
                <div class="form-group">
                  <label for="name">Name</label>
                  <input id="contact-name" v-model="form.name" type="text" name="name" placeholder="Your name">
                </div>

                <div class="form-group" :class="{'form-group__error': $v.form.email.$error}">
                  <label for="email">Email*</label>
                  <input id="contact-email" v-model="form.email" type="email" name="email" placeholder="Your email">
                </div>

                <div class="form-group">
                  <label for="subject">Subject</label>
                  <input id="contact-subject" v-model="form.subject" type="text" name="subject" placeholder="The subject">
                </div>
              </div>

              <div class="form__right">
                <div class="form-group" :class="{'form-group__error': $v.form.message.$error}">
                  <label for="message">Message*</label>
                  <textarea
                    id="contact-message"
                    v-model="form.message"
                    class="common"
                    name="message"
                    placeholder="Write something..."
                  />
                </div>
              </div>
            </div>
            <div class="contact-notice">
              <span>*required</span>
              <span v-if="$v.form.$error" class="form-alert-error">
                Please fill the required fields
              </span>
            </div>
            <button type="submit" class="btn-submit">
              <div v-if="submitStatus !== 'PENDING'">
                <i class="fa fa-paper-plane" /> Submit
              </div>
              <div v-if="submitStatus === 'PENDING'">
                <i class="fa fa-paper-plane" /> Sending...
              </div>
            </button>
          </div>
        </form>
      </transition>
      <transition name="fade">
        <div v-show="showThank" class="thank-you">
          <h3>Thank you</h3>
          <p>Your message has been sent.</p>
          <button @click="closeThankYou">
            <i class="fa fa-times" /> Back
          </button>
        </div>
      </transition>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import { validationMixin } from 'vuelidate'
import { required, minLength, email } from 'vuelidate/lib/validators'

export default {
  name: 'ContactForm',
  mixins: [validationMixin],
  data() {
    return {
      isSend: false,
      showThank: false,
      formH: Number,
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      submitStatus: null
    }
  },
  validations: {
    form: {
      email: {
        required,
        email
      },
      message: {
        required,
        minLength: minLength(10)
      }
    }
  },
  methods: {
    encode(data) {
      console.log('encoding...')
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join('&')
    },
    handleSubmit() {
      const form = document.querySelector('.form-wrapper')
      this.formH = form.offsetHeight + 'px'
      console.log('Submit!')
      this.$v.form.$touch()
      if (this.$v.form.$error) {
        this.submitStatus = 'ERROR'
        console.log('error')
      } else {
        console.log('pending')
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
          console.log('OK')

          // AXIOS
          const axiosConfig = {
            header: { 'Content-Type': 'application/x-www-form-urlencoded' }
          }
          axios.post(
            '/',
            this.encode({
              'form-name': 'contact',
              ...this.form
            }),
            axiosConfig
          )
          // END AXIOS

          this.isSend = !this.isSend
          this.showThankYou()
        }, 500)
      }
    },
    showThankYou() {
      setTimeout(() => {
        this.showThank = true
      }, 800)
    },
    closeThankYou() {
      this.showThank = false
      this.form = {
        name: '',
        email: '',
        subject: '',
        message: '',
        submitStatus: null
      }
      this.$v.$reset()
      setTimeout(() => {
        this.isSend = false
        this.formH = 'auto'
      }, 800)
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
  transform: translateX(100px);
  opacity: 0;
}

.thank-you {
  border: 1px solid white;
  border-radius: 1px;
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
    background-color: transparent;
    border: 1px solid #fff3e3;
    border-radius: 2px;
    cursor: pointer;
    color: #fff3e3;
    transition: all 0.3s ease-in-out;
    &:hover {
      color: black;
      background-color: #fff3e3;
    }
  }
}
</style>
