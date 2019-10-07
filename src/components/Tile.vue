
<template>
  <span
    class="tile"
    :style="{width: size, height: size, fontSize: size, left, top,}"
     @click="handleClick"
  >
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
    }
  },
  computed: {
    top() {
      return `${this.y * TILE_SIZE}px`;
    },
    left() {
      return `${this.x * TILE_SIZE}px`;
    },
  },
  methods: {
    handleClick() {
      this.$emit("tileClick", {x: this.x, y: this.y, value: this.value});
    }
  }
}

</script>

<style scoped>
.tile {
  line-height: 1.1;
  position: absolute;
  border: 1px solid black;
}
</style>