<template>
  <div class="feature-card">
    <div class="feature-card__img-wrapper">
      <img :src="block.imageUrl" :alt="block.title" class="feature-card__img" />
    </div>
    <h3 v-if="block.title" class="text-white feature-card__title">
      {{ block.title }}
    </h3>
    <p class="text-white feature-card__description" v-if="block.description">
      {{ block.description }}
    </p>
    <ul class="feature-card__checks" v-if="block.checks">
      <li
        class="text-white feature-card__check"
        v-for="check in block.checks"
        :key="check"
      >
        <CommonIcon name="check" class="feature-card__check-icon" filled />
        {{ check }}
      </li>
    </ul>
    <NuxtLink :to="block.link" class="text-white bg-accent feature-card__link"
      >{{ block.linkText }}
      <CommonIcon name="link" filled class="feature-card__link-icon" />
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
interface Featureblock {
  title: string;
  description?: string;
  checks?: string[];
  link: string;
  linkText: string;
  imageUrl: string;
}

defineProps<{ block: Featureblock }>();
</script>

<style scoped lang="scss">
.feature-card {
  background: #191b30;
  border-radius: 24px;
  padding: 30px 32px;
  min-height: 270px;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  position: relative;

  &__img-wrapper {
    width: auto;
    height: auto;
    position: absolute;
    bottom: -4px;
    right: 0;
    z-index: 0;

    @include mediaTablet {
      opacity: 0.5;
    }
  }

  &__title {
    max-width: 420px;
    position: relative;
    z-index: 1;
    @include textUppercase();
    font-weight: 900;
    font-size: 30px;
    line-height: 36px;
    margin-bottom: 4px;
    margin-bottom: 12px;
  }

  &__description,
  &__check {
    position: relative;
    z-index: 1;
    @include textMain();
    font-size: 16px;
    line-height: 140%;
  }

  &__checks {
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }

  &__description,
  &__checks {
    margin-bottom: 20px;
  }

  &__link {
    position: relative;
    z-index: 1;
    align-self: flex-start;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border-radius: 12px;

    margin-top: auto;
    min-width: 266px;
    min-height: 46px;
    text-decoration: none;

    @include textUppercase();
    font-size: 16px;

    &-icon {
      font-size: 12px;
    }
  }
}
</style>
