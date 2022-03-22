import { Component, Vue } from 'vue-property-decorator';

@Component
export default class DefaultLayout extends Vue {
  mini: boolean = true;

  render() {
    const theme = this.$vuetify.theme.currentTheme;
    const avatars = [...Array(6).keys()];

    const button = (
      <v-btn block text onClick={() => { this.mini = !this.mini }}>
        <v-icon left={!this.mini}>
          {this.mini ? 'mdi-chevron-right' : 'mdi-chevron-left'}
        </v-icon>

        {!this.mini && 'Collapse'}
      </v-btn>
    );

    return (
      <v-app
        style={theme.background ? { background: theme.background } : {}}
      >
        <v-navigation-drawer
          app
          color="primary"
          dark
          mini-variant={this.mini}
          scopedSlots={{
            append: () => button
          }}
        >
          <v-list>
            {avatars.map((n) => (
              <v-list-item class={this.mini && 'justify-center'}>
                <v-list-item-avatar>
                  <v-avatar
                    color={`primary ${n === 0 ? 'darken' : 'lighten'}-2`}
                    size={n === 0 ? 36 : 20}
                  />
                </v-list-item-avatar>
                <v-list-item-content>
                  Item {n}
                </v-list-item-content>
              </v-list-item>
            ))}
          </v-list>
        </v-navigation-drawer>

        <v-main>
          <nuxt />

          <div style={{ position: 'absolute', right: '16px', bottom: '16px' }}>
            <v-btn
              href="https://github.com/architect-templates/nuxt"
              target="_blank"
              elevation="2"
              color="primary"
              fab
              large
            >
              <v-icon>mdi-github</v-icon>
            </v-btn>
          </div>
        </v-main>
      </v-app>
    );
  }
}
