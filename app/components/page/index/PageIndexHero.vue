<template>
  <div class="hero">
    <div class="hero-bg">
      <img src="/images/hero.png" alt="hero-bg" class="hero-bg__img" />
    </div>

    <div class="hero-content">
      <h1 class="text-main hero-title">
        1 кг пластика<br />
        в подарок!

        <span class="text-accent hero-title-dot">*</span>
      </h1>

      <p class="text-main hero-subtitle">
        Бесплатная доставка при покупке <br />
        от 25 000 рублей
      </p>

      <button class="hero-button bg-accent text-white hover-opacity">
        Купить сейчас
      </button>

      <p class="hero-warning">
        <span class="text-accent hero-warning-dot">* </span>

        <span class="text-main">При покупке принтера Bambu Lab</span>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.hero {
  height: 550px;
  position: relative;
  overflow: hidden;
  border-radius: 24px;

  &-content {
    padding: 50px 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
  }

  &-title {
    @include textUppercase();
    font-size: 76px;
    line-height: 72px;
    font-weight: 900;
    margin-bottom: 20px;
  }

  &-subtitle {
    @include textUppercase();
    font-size: 40px;
    line-height: 40px;
    font-weight: 300;
    margin-bottom: 30px;
  }

  &-button {
    border-radius: 10px;
    padding-top: 16px;
    padding-right: 24px;
    padding-bottom: 16px;
    padding-left: 24px;

    @include textUppercase();
    font-size: 16px;
    line-height: 18px;

    margin-bottom: auto;
  }

  &-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    &__img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: right;
    }
  }

  &-warning {
    @include textMain();
    font-size: 18px;
    line-height: 20px;
    margin-top: auto;
  }

  @include mediaMobile {
    &-bg {
      opacity: 0.6;
    }
    &-content {
      padding: 24px;
    }
    &-title {
      font-size: 40px;
      line-height: 100%;
    }

    &-subtitle {
      font-size: 20px;
      line-height: 24px;
    }
  }
}
</style>
