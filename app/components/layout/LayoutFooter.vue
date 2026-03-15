<template>
  <footer class="footer">
    <div class="wrapper footer__container">
      <div class="footer__col footer__company">
        <div class="footer__title">{{ company.name }}</div>

        <ul class="footer__links">
          <li v-for="link in company.links" :key="link.title">
            <a :href="link.url">{{ link.title }}</a>
          </li>
        </ul>

        <div class="footer__socials">
          <a
            v-for="social in socials"
            :key="social.name"
            :href="social.url"
            class="footer__social"
          >
            <CommonIcon
              :name="`contacts/${social.icon}`"
              class="footer__social-icon"
            />
          </a>
        </div>
      </div>

      <!-- Каталог -->
      <div class="footer__col footer__catalog">
        <div class="footer__title">Каталог</div>

        <ul class="footer__links footer__links_catalog">
          <li v-for="item in catalog" :key="item.title">
            <a :href="item.url">{{ item.title }}</a>
          </li>
        </ul>
      </div>

      <div class="footer__col footer__contacts">
        <div class="footer__title">Контакты</div>

        <div class="footer__contact">
          <span>{{ contacts.phone }}</span>

          <CommonIcon name="contacts/tg" class="footer__social-icon" />
          <CommonIcon name="contacts/whatsapp" class="footer__social-icon" />
        </div>

        <div class="footer__contact footer__contact_email">
          <CommonIcon name="contacts/mail" class="footer__social-icon" />

          <span>{{ contacts.email }}</span>
        </div>

        <div class="footer__note">
          {{ contacts.note }}
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const company = {
  name: 'ООО "ЦЕНТР ХХ" 3D OUTLET',
  links: [
    { title: "Политика обработки персональных данных", url: "#" },
    { title: "Пользовательское соглашение", url: "#" },
    { title: "Публичная оферта", url: "#" },
    { title: "Карта сайта", url: "#" },
  ],
};

const catalog = [
  { title: "3D Принтеры", url: "#" },
  { title: "Филаменты", url: "#" },
  { title: "Аксессуары", url: "#" },
  { title: "Акции", url: "#" },
  { title: "Избранное", url: "#" },
];

const contacts = {
  phone: "+7 (495) 147-65-99",
  email: "info@3d-outlet.ru",
  note: "Бесплатный звонок по России",
};

const socials = [
  { name: "telegram", icon: "tg", url: "#" },
  { name: "vk", icon: "vk", url: "#" },
  { name: "youtube", icon: "yt", url: "#" },
];
</script>

<style scoped lang="scss">
.footer {
  background: #000;
  color: #fff;
  padding: 62px 0;

  &__container {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 24px;
    max-width: 1140px;

    @include mediaTablet {
      grid-template-columns: auto auto auto;
      justify-content: space-between;
    }

    @media screen and (max-width: 900px) {
      grid-template-columns: auto;
      justify-content: flex-start;
    }
  }

  &__title {
    @include textUppercase();
    font-weight: 900;
    font-size: 20px;
    line-height: 20px;
    margin-bottom: 16px;
  }

  &__links {
    list-style: none;

    @include textMain();
    font-size: 14px;
    line-height: 14px;

    padding-top: 12px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    color: #999999;

    a {
      color: #aaa;
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        color: #fff;
      }
    }

    &_catalog {
      a {
        color: var(--white);
        display: inline-block;
        position: relative;
        font-size: 16px;
        line-height: 16px;

        &::before {
          content: "";
          width: 100%;
          height: 1px;
          position: absolute;
          background: var(--white);
          bottom: -2px;
        }

        transition: opacity 0.3s ease;

        &:hover {
          opacity: 0.8;
        }
      }
    }
  }

  &__socials {
    display: flex;
    gap: 12px;
    margin-top: 24px;
  }

  &__social {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    background: var(--white);
    color: var(--black);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;

    transition: opacity 0.3s ease;
    &:hover {
      opacity: 0.8;
    }

    &-icon {
      display: flex;
    }
  }

  &__contacts {
  }

  &__contact {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 6px;
    @include textUppercase();
    line-height: 32px;
    font-size: 24px;

    &_email {
      text-transform: none;
    }
  }

  &__note {
    color: #999999;
    font-size: 14px;
    line-height: 14px;
    @include textMain();
  }
}
</style>
