<template>
  <div class="padding-4">
    <div id="my-table" class="table table--responsive table--highlight">
      <h2 class="table__title">Scoreboard</h2>
      <div class="table__wrapper">
        <table>
          <thead>
            <tr>
              <th data-type="number">Rank</th>
              <th data-type="number">Username</th>
              <th data-type="number">Total score</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(score, index) in scores" :key="index">
              <td>{{ score.rank }}#</td>
              <td>{{ score.userName }}</td>
              <td>{{ score.score }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script src="./ScoreboardView.ts" lang="ts"></script>
<style src="./ScoreboardView.css" />
