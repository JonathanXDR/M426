<template>
  <div id="home">
    <section class="ac-ln-content">
      <!-- Banner -->
      <div class="stats-banner">
        <div class="scores">
          <p>Time: {{ timeString }}</p>
          <p>Turns: {{ turns }}</p>
        </div>
        <div class="controls">
          <button
            :disabled="onCoolDown"
            @click="resetGame()"
            class="button button-block"
          >
            Reset
          </button>
        </div>
      </div>

      <div class="cards">
        <div class="card-container" v-for="(card, index) in cards" :key="index">
          <CardTile
            :card="card"
            @clickCallback="() => flipCard(index)"
          ></CardTile>
        </div>
      </div>
    </section>

    <!-- <DialogModal /> -->
  </div>
</template>

<script lang="ts" src="./HomeView.ts"></script>
<style src="./HomeView.css"></style>
