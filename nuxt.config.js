const pkg = require('./package')
require('dotenv').config()
const client = require('./plugins/contentful')

module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: `Ke Thien.be`,
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.7.2/css/all.css',
        integrity: `sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr`,
        crossorigin: 'anonymous'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#3B8070'
  },

  /*
   ** Global CSS
   */
  css: ['@/assets/sass/style.scss', 'swiper/dist/css/swiper.css'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/contentful',
    {
      src: '~/plugins/nuxt-swiper-plugin.js',
      ssr: false
    },
    {
      src: '~/plugins/vuelidate.js',
      ssr: false
    }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/markdownit',
    'nuxt-imagemin',
    '@nuxtjs/dotenv',
    'vue-scrollto/nuxt',
    '@nuxtjs/sitemap'
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  // [optional] markdownit options
  // See https://github.com/markdown-it/markdown-it
  markdownit: {
    preset: 'default',
    html: true,
    linkify: true,
    breaks: true,
    injected: true
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  generate: {
    routes() {
      return client
        .getEntries({
          content_type: 'work'
        })
        .then(entries => {
          return entries.items.map(entry => {
            return '/work/' + entry.fields.slug
          })
        })
    }
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://kethien.be',
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    generate: true, // Enable me when using nuxt generate
    routes: [
      {
        url: '/works/',
        changefreq: 'monthly',
        priority: 0.5
      }
    ],
    // eslint-disable-next-line no-dupe-keys
    routes() {
      return client
        .getEntries({
          content_type: 'work'
        })
        .then(entries => {
          return entries.items.map(entry => {
            return {
              url: '/work/' + entry.fields.slug,
              changefreq: 'monthly',
              priority: 0.5
            }
          })
        })
    }
  }
}
