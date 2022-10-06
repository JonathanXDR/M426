<template>
  <div id="home">
    <section class="ac-ln-content">
      <div class="menu">
        <div class="score">
          <p>Time: {{ timeString }}</p>
          <p>Turns: {{ turns }}</p>
        </div>
        <button
          :disabled="onCoolDown"
          @click="resetGame()"
          class="icon-wrapper button button-elevated hero-button"
        >
          Reset
        </button>
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
