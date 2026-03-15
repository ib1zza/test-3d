<template>
  <div class="wrapper">
    <PageIndexHero />
    <PageIndexCatalog />
    <PageIndexFeatureList />
    <PageIndexProducts />
    <PageIndexReasons />
    <PageIndexReviews />
    <PageIndexPartners />
    <PageIndexTelegram />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  gap: var(--section-gap);
  padding-bottom: var(--section-gap);
}
</style>
