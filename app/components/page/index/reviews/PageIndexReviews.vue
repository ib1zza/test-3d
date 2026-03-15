<template>
  <div class="catalog">
    <h2 class="text-main catalog-title">
      отзывы

      <CommonIcon name="link" filled class="catalog-title-icon" />
    </h2>

    <div class="reviews"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.catalog {
  &-list {
    @include gridFourColumns();
  }

  &-title {
    max-width: 850px;
    @include textUppercase();
    font-weight: 900;
    font-size: 40px;
    line-height: 40px;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    gap: 8px;

    span {
      font-weight: 400;
    }

    &-icon {
      font-size: 18px;
    }
  }
}

.reviews {
  width: 100%;
  background: var(--white);
  height: 380px;
  border-radius: 14px;
}
</style>
