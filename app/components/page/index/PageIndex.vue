<template>
  <div class="wrapper">
    <AnimationFadeIn>
      <PageIndexHero />
    </AnimationFadeIn>

    <AnimationFadeIn>
      <PageIndexCatalog />
    </AnimationFadeIn>

    <AnimationFadeIn>
      <PageIndexFeatureList />
    </AnimationFadeIn>

    <AnimationFadeIn>
      <PageIndexProducts />
    </AnimationFadeIn>

    <AnimationFadeIn>
      <PageIndexReasons />
    </AnimationFadeIn>

    <AnimationFadeIn>
      <PageIndexReviews />
    </AnimationFadeIn>

    <AnimationFadeIn>
      <PageIndexPartners />
    </AnimationFadeIn>

    <AnimationFadeIn>
      <PageIndexTelegram />
    </AnimationFadeIn>
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
