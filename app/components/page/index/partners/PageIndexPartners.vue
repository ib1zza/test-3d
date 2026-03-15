<template>
  <div class="catalog">
    <h2 class="text-main catalog-title">Нам доверяют</h2>
    <div class="catalog-list">
      <div v-for="block in categoryBlocks" :key="block" class="catalog-card">
        <img :src="block" alt="partner logo" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const categoryBlocks: string[] = [
  "/images/partners/1.png",
  "/images/partners/2.png",
  "/images/partners/3.png",
  "/images/partners/4.png",
  "/images/partners/5.png",
  "/images/partners/6.png",
];
</script>

<style scoped lang="scss">
.catalog {
  &-list {
    @include gridSixColumns();
    grid-auto-rows: 1fr;
    padding-inline: 12px;
    padding-block: 24px;
    min-height: 130px;
  }

  &-title {
    max-width: 850px;
    @include textUppercase();
    font-weight: 900;
    font-size: 40px;
    line-height: 40px;
    margin-bottom: 30px;

    span {
      font-weight: 400;
    }
  }

  &-card {
    background-color: var(--white);
    border-radius: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
