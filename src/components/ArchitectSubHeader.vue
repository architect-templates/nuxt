<template>
  <h1>{{ subtitle }}</h1>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';

@Component
export default class ArchitectSubHeader extends Vue {
  @Prop({ required: true })
  subtitle!: string;
}
</script>
