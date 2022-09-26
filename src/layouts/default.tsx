import { Component, Vue } from 'vue-property-decorator';

import '~/assets/css/main.css';

@Component
export default class DefaultLayout extends Vue {
  mini: boolean = true;

  render() {
    const theme = this.$vuetify.theme.themes.light;

    return (
      <v-app>
        <v-main>
          <nuxt />
        </v-main>
      </v-app>
    );
  }
}
