
<template>
  <span class="tile" :style="{width: size, height: size, left, top}">
    {{value}}
  </span>
</template>

<script>
import { TILE_SIZE } from '../constants';

export default {
  name: 'Tile',
  props: {
    x: Number,
    y: Number,
    value: String,
  },
  data() {
    return {
      size: `${TILE_SIZE}px`,
      top: `${this.y * TILE_SIZE}px`,
      left: `${this.x * TILE_SIZE}px`,
    }
  },
}

</script>

<style scoped>
.tile {
  line-height: 1.1;
  position: absolute;
  border: 1px solid black;
}
</style>