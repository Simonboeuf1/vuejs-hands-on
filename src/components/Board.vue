
<template>
  <div class="game">
    <div class="board" :style="{width: size, height: size}">
      <Tile
        v-for="tile in tiles"
        :key="tileKey(tile)"
        :x="tile.x"
        :y="tile.y"
        :value="tile.value"
      />
    </div>
  </div>
</template>

<script>
import { initTiles } from '../utils/init';
import Tile from './Tile.vue';
import { TILE_SIZE, BOARD_SIZE } from '../constants';

export default {
  name: 'Board',
  components: {
    Tile,
  },
  data() {
    return {
      tiles: initTiles(),
      size: `${TILE_SIZE * BOARD_SIZE}px`,
    }
  },
  methods: {
    tileKey({x, y}) {
      return `x${x}y${y}`;
    }
  }
}

</script>

<style scoped>
  .board {
    position: relative;
    margin: auto auto;
    user-select: none;
  }
  h2 {
    margin-bottom: 0;
  }
  button {
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid black;
    border-radius: 3px;
  }
</style>
