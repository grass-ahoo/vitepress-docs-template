<script setup>
import { VueFlow } from '@vue-flow/core'

const props = defineProps(['nodes', 'edges', 'height']);

</script>

<template>
  <div style="width: 100%; border: 1px solid #ccc;" :style="{height: props.height}">
    <VueFlow
      :nodes="props.nodes"
      :edges="props.edges"
      :nodes-draggable="false"
      :nodes-connectable="false"
      :connect-on-click="false"
      :zoom-on-scroll="false"
      :zoom-on-pinch="false"
      :zoom-on-double-click="false"
      :pan-on-drag="false"
      :prevent-scrolling="false" />
  </div>
</template>
