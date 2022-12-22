<template>
  <v-container>
    <ArchitectHeader />
    <ArchitectSubHeader subtitle="Favorite Movies" />
    <ArchitectNextSteps />
    <ArchitectItems />
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import ArchitectHeader from '~/components/ArchitectHeader.vue';
import ArchitectSubHeader from '~/components/ArchitectSubHeader.vue';
import ArchitectNextSteps from '~/components/ArchitectNextSteps.vue';
import ArchitectItems from '~/components/ArchitectItems.vue';

@Component({ layout: 'default', components: {
  ArchitectHeader,
  ArchitectSubHeader,
  ArchitectNextSteps,
  ArchitectItems,
}})
export default class ArchitectIndex extends Vue {}
</script>
