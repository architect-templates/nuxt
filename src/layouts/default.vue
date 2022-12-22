<template>
  <v-app>
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import '~/assets/css/main.css';

@Component
export default class DefaultLayout extends Vue {}
</script>
