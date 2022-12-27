<template>
  <v-container>
    <ArchitectHeader />
    <ArchitectNextSteps />
    <!-- <ArchitectItems /> -->
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import ArchitectHeader from '~/components/ArchitectHeader.vue';
import ArchitectNextSteps from '~/components/ArchitectNextSteps.vue';
import ArchitectItems from '~/components/ArchitectItems.vue';

@Component({ layout: 'default', components: {
  ArchitectHeader,
  ArchitectNextSteps,
  ArchitectItems,
}})
export default class ArchitectIndex extends Vue {}
</script>
