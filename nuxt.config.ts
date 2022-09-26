const config = {
  srcDir: './src/',

  server: {
    host: '0.0.0.0',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: `%s - ${process.env.APP_NAME}`,
    title: process.env.APP_NAME,
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/png', href: '/architect-bot.png' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    debug: false,
    proxy: false,
    baseURL: process.env.APP_API_ADDR
  },


  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  // // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    defaultAssets: true,
    treeShake: true,
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '#225560', // Slate blue
          secondary: '#225560', // Slate blue
          info: '#D7E9F2', // Polo blue
          warning: '#FDF07F', // Sunflower
          error: '#FF5252',
          success: '#55CB64', // Reliable green
          background: '#F4F4F3',
          neutral: '#F2D7E7', // Frosted pink
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // // extend(config) {
    // //   config.optimization.minimize = false;
    // // },
    // extractCSS: false,
    // splitChunks: {
    //   layouts: true
    // }
  },
};

export default config;
