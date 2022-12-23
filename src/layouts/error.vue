<template>
  <v-app :style="{ background: $vuetify.theme.currentTheme.background }">
    <v-main>
      <v-container>
        <v-card outlined>
          <v-card-title>{{ rendered_error }}</v-card-title>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
export interface ErrorObject {
  statusCode: number;
  message?: string;
}

@Component
export default class ErrorLayout extends Vue {
  @Prop({
    type: Object,
    required: false
  })
  error?: ErrorObject;

  rendered_error: string = '';

  mounted() {
    this.rendered_error = this.error?.statusCode === 404
      ? '404 Not Found'
      : this.error?.message
        ? this.error.message
        : 'An error occurred';
  }
}
</script>
