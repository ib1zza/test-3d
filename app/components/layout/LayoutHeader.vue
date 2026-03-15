<template>
  <div class="wrapper header">
    <div class="header__top">
      <div class="header__top-links">
        <div class="header__top-link header__address">
          <CommonIcon name="location" filled class="header__top-link-icon" />
          <span>{{ address }}</span>
        </div>

        <div class="hover-opacity header__top-link header__phone">
          <CommonIcon name="link" filled class="header__top-link-icon" />
          <span>Юр. лицам</span>
        </div>
      </div>

      <div class="header__top-buttons">
        <button class="hover-opacity header__button header__button_call">
          <CommonIcon name="phone" class="header__button-icon" />
          <span>Связь с нами</span>
          <CommonIcon name="arrow-down" />
        </button>

        <button class="hover-opacity header__button header__button_login">
          <CommonIcon name="person" class="header__button-icon" />
          <span>Войти</span>
          <span> • </span>
          <span>Регистрация</span>
        </button>
      </div>
    </div>
    <div class="header__main">
      <nav class="header__nav">
        <img src="/images/logo-small.png" alt="logo" class="header__logo" />

        <button class="hover-opacity header__nav-item">
          <span>Каталог</span>
          <CommonIcon name="arrow-down" class="header__nav-item-icon" />
        </button>

        <button class="hover-opacity header__nav-item">
          <span>программное обеспеченние</span>
          <CommonIcon name="arrow-down" class="header__nav-item-icon" />
        </button>

        <button class="hover-opacity header__nav-item">
          <span>отзывы</span>
          <CommonIcon name="link" filled class="header__nav-item-icon" />
        </button>
      </nav>

      <div class="header__controls">
        <CommonIcon name="search" class="header__controls-icon" filled />
        <CommonIcon name="heart" class="header__controls-icon" filled />
        <CommonIcon name="bar-chart" class="header__controls-icon" filled />

        <button class="hover-opacity header__controls-basket">
          <CommonIcon
            name="shopping-cart"
            class="header__controls-icon"
            filled
          />
          <div class="header__controls-basket-count">
            <span>{{ cart.totalPrice.toLocaleString() }} ₽</span>
            <span>{{ cart.totalCount }} шт.</span>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const address = "ул. Большая красноперская";

const cart = useCartStore();
</script>

<style scoped lang="scss">
.header {
  position: sticky;
  top: 0;
  z-index: 10;
  height: var(--header-height);
  backdrop-filter: blur(0px);
  background: linear-gradient(
    180deg,
    rgba(245, 245, 247, 0.95) 80%,
    rgba(245, 245, 247, 0) 100%
  );

  &__top {
    padding-top: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &-links {
      display: flex;
      gap: 20px;
      align-items: center;
    }

    &-link {
      display: flex;
      align-items: center;
      gap: 6px;

      @include textMain();

      &-icon {
        font-size: 10px;
      }
    }

    &-buttons {
      display: flex;
      gap: 12px;
    }
  }

  &__button {
    border-radius: 10px;
    padding: 10px;
    display: flex;
    align-items: center;
    height: 48px;
    padding-inline: 12px;
    @include textMain();

    background: #e7ebf3b8;
    gap: 8px;

    &-icon {
      font-size: 16px;
    }
  }

  &__logo {
    width: 50px;
  }

  &__main {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__nav {
    display: flex;
    gap: 30px;
    align-items: center;

    &-item {
      display: flex;
      align-items: center;
      gap: 6px;

      @include textUppercase();

      &-icon {
        font-size: 10px;
      }
    }
  }

  &__controls {
    display: flex;
    gap: 8px;
    align-items: center;

    &-icon {
      font-size: 32px;
    }

    &-basket {
      display: flex;
      align-items: center;
      gap: 8px;

      &-count {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        @include textMain();
        font-size: 12px;
        line-height: 14px;

        & > :last-child {
          color: #808080;
        }
      }
    }
  }

  @media screen and (max-width: 900px) {
    height: auto;
    padding-block: 12px;
    &__top,
    &__nav-item {
      display: none;
    }
  }
}
</style>
