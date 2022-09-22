<template>
  <div class="tile" :class="{ flipped: card.flipped, found: card.found }">
    <div
      class="back-face"
      :style="`background-image: url('${card.url}')`"
    ></div>
    <div class="front-face" @click="$emit('clickCallback')"></div>
  </div>
</template>

<script lang="ts" src="./CardTile.ts"></script>
<style src="./CardTile.css"></style>
