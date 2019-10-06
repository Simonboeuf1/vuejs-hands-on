
<template>
  <div class="game">
    <div class="board" :style="{width, height}">
    </div>
  </div>
</template>

<script>

export default {
  name: 'Board',
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
