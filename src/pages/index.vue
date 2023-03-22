<template>
  <v-container>
    <ArchitectHeader />
    <ArchitectItems />
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import ArchitectHeader from '~/components/ArchitectHeader.vue';
import ArchitectItems from '~/components/ArchitectItems.vue';

@Component({
  layout: 'default', components: {
    ArchitectHeader,
    ArchitectItems,
  }
})
export default class ArchitectIndex extends Vue { }
</script>
