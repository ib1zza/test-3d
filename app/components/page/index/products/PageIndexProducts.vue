<template>
  <div class="catalog">
    <div class="catalog-header">
      <h2 class="text-main catalog-title">
        популярные модели
        <CommonIcon name="link" filled class="catalog-title-icon" />
      </h2>

      <div class="catalog-controls">
        <button
          class="hover-opacity catalog-controls-button catalog-controls-button_prev"
        >
          <CommonIcon
            name="arrow-right"
            class="catalog-controls-button-icon"
            filled
          />
        </button>
        <button
          class="hover-opacity catalog-controls-button catalog-controls-button_next"
        >
          <CommonIcon
            name="arrow-right"
            class="catalog-controls-button-icon"
            filled
          />
        </button>
      </div>
    </div>

    <Swiper
      class="catalog-list"
      :modules="[Navigation]"
      :navigation="{
        prevEl: '.catalog-controls-button_prev',
        nextEl: '.catalog-controls-button_next',
      }"
      :breakpoints="{
        0: {
          slidesPerView: 1,
          spaceBetween: 12,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      }"
    >
      <!-- <div > -->
      <SwiperSlide
        v-for="block in categoryBlocks"
        :key="block.id"
        class="catalog-card"
      >
        <PageIndexProductsCard :block="block" />
      </SwiperSlide>

      <!-- </div> -->
    </Swiper>
  </div>
</template>

<script setup lang="ts">
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
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

const categoryBlocks: CategoryBlock[] = [
  {
    id: 1,
    category: "3D принтер",
    rating: {
      value: 4.6,
      count: 1890,
    },
    title: "Bambu Lab A1 mini (EU)",
    level: "начальный уровень",
    tag: "хит",
    printType: "FDM",
    printSize: "256x256x256",
    price: 134000,
    imageUrl: "/images/products/printer.png",
  },
  {
    id: 2,
    category: "3D принтер",
    rating: {
      value: 4.6,
      count: 1890,
    },
    title: "Bambu Lab A1 mini (EU)",
    level: "начальный уровень",
    tag: "хит",
    printType: "FDM",
    printSize: "256x256x256",
    price: 134000,
    imageUrl: "/images/products/printer.png",
  },
  {
    id: 3,
    category: "3D принтер",
    rating: {
      value: 4.6,
      count: 1890,
    },
    title: "Bambu Lab A1 mini (EU)",
    level: "начальный уровень",
    tag: "хит",
    printType: "FDM",
    printSize: "256x256x256",
    price: 134000,
    imageUrl: "/images/products/printer.png",
  },
  {
    id: 4,
    category: "3D принтер",
    rating: {
      value: 4.6,
      count: 1890,
    },
    title: "Bambu Lab A1 mini (EU)",
    level: "начальный уровень",
    tag: "хит",
    printType: "FDM",
    printSize: "256x256x256",
    price: 134000,
    imageUrl: "/images/products/printer.png",
  },
  {
    id: 5,
    category: "3D принтер",
    rating: {
      value: 4.6,
      count: 1890,
    },
    title: "Bambu Lab A1 mini (EU)",
    level: "начальный уровень",
    tag: "хит",
    printType: "FDM",
    printSize: "256x256x256",
    price: 134000,
    imageUrl: "/images/products/printer.png",
  },
  {
    id: 6,
    category: "3D принтер",
    rating: {
      value: 4.6,
      count: 1890,
    },
    title: "Bambu Lab A1 mini (EU)",
    level: "начальный уровень",
    tag: "хит",
    printType: "FDM",
    printSize: "256x256x256",
    price: 134000,
    imageUrl: "/images/products/printer.png",
  },
];
</script>

<style scoped lang="scss">
.catalog {
  &-list {
    // @include gridFourColumns();
  }

  &-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
  }

  &-title {
    @include textUppercase();
    font-weight: 900;
    font-size: 40px;
    line-height: 40px;
    display: flex;
    align-items: center;
    gap: 8px;

    &-icon {
      font-size: 18px;
    }

    span {
      font-weight: 400;
    }
  }

  &-controls {
    display: flex;
    align-items: center;
    gap: 5px;

    &-button {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 1px solid black;
      display: flex;
      justify-content: center;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;

      &-icon {
        margin-right: -3px;
        color: var(--black);
      }

      &_prev {
        transform: rotate(180deg);
      }
    }
  }
}
</style>
