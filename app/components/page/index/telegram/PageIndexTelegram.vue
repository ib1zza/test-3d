<template>
  <div class="telegram">
    <div class="telegram-text">
      <h3>Подпишитесь на наш канал в Telegram</h3>
      <p>Полезные советы и новости по 3D печати</p>
    </div>

    <NuxtLink class="telegram-link" external to="https://t.me/test"
      >Подписаться на канал</NuxtLink
    >
    <img src="/images/misc/telegram.png" alt="" class="telegram-img" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.telegram {
  background: #191b30;
  border-radius: 24px;
  position: relative;
  min-height: 102px;
  overflow: hidden;
  padding: 22px 32px;

  display: flex;
  align-items: center;
  gap: 35px;

  @include mediaTablet {
    flex-direction: column;
  }

  & > * {
    position: relative;
    z-index: 1;
  }

  &-text {
    display: flex;
    flex-direction: column;
    gap: 8px;
    color: var(--white);

    h3 {
      @include textUppercase();
      font-weight: 900;
      font-size: 26px;
      line-height: 26px;
    }

    p {
      @include textMain();
      font-size: 16px;
      line-height: 16px;
    }
  }

  &-link {
    background: #2aabee;
    border-radius: 12px;
    height: 46px;
    padding-inline: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    @include textUppercase();
    font-size: 16px;
    line-height: 16px;
    color: var(--white);
    text-decoration: none;
  }

  &-img {
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 0;

    @include mediaTablet {
      opacity: 0.5;
      filter: blur(3px);
    }
  }
}
</style>
