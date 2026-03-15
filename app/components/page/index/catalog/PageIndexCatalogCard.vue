<template>
  <div class="bg-white catalog-card">
    <img
      v-if="block.imageUrl"
      :src="block.imageUrl"
      :alt="block.title"
      class="catalog-card-image"
    />

    <h3 class="text-main catalog-card-title">
      {{ block.title }}
    </h3>

    <p class="text-main catalog-card-description">
      {{ block.description }}
    </p>

    <NuxtLink
      v-if="block.link"
      :to="block.link"
      class="hover-opacity catalog-card-button"
    >
      <CommonIcon
        name="link"
        class="text-accent catalog-card-button-icon"
        filled
      />
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
interface CategoryBlock {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
  link?: string;
}

defineProps<{ block: CategoryBlock }>();
</script>

<style scoped lang="scss">
.catalog-card {
  border-radius: 24px;
  padding: 20px;
  position: relative;

  &-image {
    width: calc(100% - 60px);

    height: 105px;
    max-width: 200px;
    object-fit: contain;
    object-position: left;
    margin-bottom: 14px;
  }

  &-title {
    @include textUppercase();
    font-weight: 900;
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 4px;
  }

  &-description {
    @include textMain();
    font-size: 15px;
    color: #4b4b4b;
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
