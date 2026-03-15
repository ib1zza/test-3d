<template>
  <div class="bg-white catalog-card">
    <div class="catalog-card__main">
      <img
        v-if="block.imageUrl"
        :src="block.imageUrl"
        :alt="block.title"
        class="catalog-card-image"
      />

      <h3 class="text-main catalog-card-title">
        {{ block.title }}
      </h3>
    </div>
    <div class="catalog-card-description-container">
      <div
        v-for="description in block.description"
        class="text-main catalog-card-description"
        v-html="description"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface ReasonBlock {
  id: number;
  title: string;
  description: string[];
  imageUrl?: string;
}

defineProps<{ block: ReasonBlock }>();
</script>

<style scoped lang="scss">
.catalog-card {
  border-radius: 24px;
  padding: 20px;
  position: relative;

  &__main {
    padding-inline: 8px;
    display: flex;
    gap: 12px;
    margin-bottom: 12px;
  }

  &-image {
    width: 55px;
  }

  &-title {
    @include textUppercase();
    font-weight: 900;
    font-size: 26px;

    line-height: 26px;
  }

  &-description-container {
    @include textMain();
    font-size: 15px;
    color: #4b4b4b;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  &-description {
    &:deep(span) {
      font-weight: 900;
    }
  }

  &-button {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f8f8f8;
    font-size: 12px;
  }
}
</style>
