
<template>
  <div class="game">
    <h1>Current Player: {{playerMarker}}</h1>
    <div class="board" :style="{width: size, height: size}">
      <Tile
        v-for="tile in tiles"
        :key="tileKey(tile)"
        :x="tile.x"
        :y="tile.y"
        :value="tile.value"
        @tileClick="play"
      />
    </div>
    <template v-if="isFinished">
      <h2>{{ finishedText }}</h2>
      <button @click="newGame">New game</button>
    </template>
  </div>
</template>

<script>
import { initTiles, initPlayer } from '../utils/init';
import Tile from './Tile.vue';
import { TILE_SIZE, BOARD_SIZE } from '../constants';
import { getMarker, isTileEmpty, isGameFinished, hasWinner } from '../utils/board.js';
import { markTile, getNextPlayer } from '../utils/game.js';

export default {
  name: 'Board',
  components: {
    Tile,
  },
  data() {
    return {
      tiles: initTiles(),
      size: `${TILE_SIZE * BOARD_SIZE}px`,
      currentPlayer: initPlayer(),
    }
  },
  computed: {
    playerMarker() {
      return getMarker(this.currentPlayer);
    },
    isFinished() {
      return isGameFinished(this.tiles);
    },
    finishedText() {
      return hasWinner(this.tiles) ? `Player ${this.currentPlayer} won!` : 'Game drawn.'
    },
  },
  methods: {
    tileKey({x, y}) {
      return `x${x}y${y}`;
    },
    play(tile) {
      if(isTileEmpty(tile)) {
        this.tiles = markTile(this.tiles, tile, this.currentPlayer);
        if(!this.isFinished) {
          this.currentPlayer = getNextPlayer(this.currentPlayer);
        }
      }
    },
    newGame() {
      this.tiles = initTiles(),
      this.currentPlayer = initPlayer();
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
