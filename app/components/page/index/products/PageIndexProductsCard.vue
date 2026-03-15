<template>
  <div class="bg-white catalog-card">
    <div class="card-top">
      <div class="card-description">
        <p class="card-description__category">{{ block.category }}</p>
        <p class="card-description__title">{{ block.title }}</p>
        <p class="card-description__level">{{ block.level }}</p>
      </div>

      <div class="card-top-left">
        <div class="card-rating">
          <div class="card-rating-item">
            <CommonIcon name="star" class="card-rating-item-icon" filled />
            <span>{{ block.rating.value }}</span>
          </div>

          <div class="card-rating-item">
            <CommonIcon name="review" class="card-rating-item-icon" filled />
            <span>{{ block.rating.count }}</span>
          </div>
        </div>

        <div class="card-tag">
          {{ block.tag }}
        </div>
      </div>
    </div>

    <img
      v-if="block.imageUrl"
      :src="block.imageUrl"
      :alt="block.title"
      class="catalog-card-image"
    />

    <div class="card-info">
      <div class="card-info__item">
        <div class="card-info__item-title">тип печати:</div>
        <div class="card-info__item-value">
          {{ block.printType }}
        </div>
      </div>

      <div class="card-info__item">
        <div class="card-info__item-title">поле печати:</div>
        <div class="card-info__item-value">
          {{ block.printSize }}
        </div>
      </div>
    </div>

    <div class="catalog-card-button-wrapper">
      <!-- если нет в корзине -->
      <button
        v-if="quantity === 0"
        class="bg-accent text-white hover-opacity catalog-card-button"
        @click="addToCart"
      >
        <CommonIcon
          name="shopping-cart"
          class="text-white catalog-card-button-icon"
          filled
        />

        <span>в корзину</span>
        <span> • </span>
        <span>{{ block.price }} ₽</span>
      </button>

      <!-- если есть -->
      <div v-else class="catalog-card-counter">
        <span>в корзине</span>

        <span class="dot">•</span>

        <button class="counter-btn hover-opacity" @click="decrease">-</button>

        <span>{{ quantity }}шт</span>

        <button class="counter-btn hover-opacity" @click="increase">+</button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { useCartStore } from "~/stores/cart";

interface CategoryBlock {
  id: number;
  category: string;
  rating: {
    value: number;
    count: number;
  };
  title: string;
  level: string;
  tag: string;
  printType: string;
  printSize: string;
  price: number;
  imageUrl: string;
}

const props = defineProps<{ block: CategoryBlock }>();

const cart = useCartStore();

const quantity = computed(() => cart.getQuantity(props.block.id));

function addToCart() {
  cart.add(props.block);
}

function increase() {
  cart.add(props.block);
}

function decrease() {
  cart.decrease(props.block.id);
}
</script>

<style scoped lang="scss">
.catalog-card {
  border-radius: 24px;
  padding: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;

  .card-top {
    display: flex;
    justify-content: space-between;
  }

  .card-description {
    display: flex;
    flex-direction: column;
    gap: 2px;

    &__category,
    &__level {
      @include textMain();
      font-size: 14px;
      color: #808080;
      line-height: 14px;
    }

    &__title {
      @include textUppercase();
      font-weight: 900;
      font-size: 20px;
      line-height: 140%;
    }
  }

  .card-top-left {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 4px;

    .card-rating {
      display: flex;
      align-items: center;
      gap: 8px;

      @include textMain();
      font-size: 14px;
      line-height: 14px;

      &-item {
        display: flex;
        align-items: flex-start;
        gap: 4px;

        &-icon {
          font-size: 12px;
        }
      }
    }

    .card-tag {
      background: #afe4ff;
      border-radius: 5px;
      padding: 4px;

      @include textMain();
      font-size: 14px;
      line-height: 14px;
    }
  }

  .card-info {
    display: flex;
    justify-content: space-between;

    &__item {
      display: flex;
      flex-direction: column;
      gap: 2px;

      &-title {
        @include textMain();
        font-size: 14px;
        line-height: 14px;
        font-weight: 900;
      }

      &-value {
        @include textMain();
        font-size: 14px;
        line-height: 14px;
      }
    }
  }

  &-image {
    width: 100%;

    height: 202px;
    object-fit: contain;
    object-position: center;
    margin-bottom: 14px;
  }

  &-button,
  &-counter {
    width: 100%;
    height: 100%;
    height: 46px;

    border-radius: 12px;
    display: flex;
    align-items: center;

    justify-content: center;
    gap: 12px;

    @include textUppercase();
    font-size: 16px;
    line-height: 18px;
  }

  &-button {
    color: var(--white);

    :deep() {
      svg path {
        stroke: var(--white);
      }
    }

    &-wrapper {
      width: 100%;
    }
  }

  &-counter {
    color: var(--black);
    border: 1px solid var(--black);
  }
}
</style>
