<template>
  <section class="section-separated">
    <h1>Scoreboard</h1>
    <table>
      <thead>
        <tr>
          <th>Rank</th>
          <th>Username</th>
          <th>Total score</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(score, index) in scores" :key="index">
          <td>#{{ score.rank }}</td>
          <td>{{ score.userName }}</td>
          <td>{{ score.score }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script src="./ScoreboardView.ts" lang="ts"></script>
<style src="./ScoreboardView.css" />
