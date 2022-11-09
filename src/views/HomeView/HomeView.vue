<template>
  <div id="home">
    <section class="section-separated">
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

    <DialogModal
      @submitResults="(userName: string) => submitResults(userName)"
      :score="score"
      ref="modal"
    />
  </div>
</template>

<script lang="ts" src="./HomeView.ts"></script>
<style scoped src="./HomeView.css"></style>
