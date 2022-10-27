<template>
  <header>
    <NavBar />
  </header>
  <Suspense>
    <template #default>
      <main>
        <RouterView />
      </main>
    </template>
    <template #fallback>
      <LoadingSpinner />
    </template>
  </Suspense>
</template>

<script lang="ts" src="./App.ts"></script>
<style scoped></style>
