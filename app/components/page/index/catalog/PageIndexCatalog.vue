<template>
  <div class="catalog">
    <h2 class="text-main catalog-title">Каталог <span>товаров</span></h2>
    <div class="catalog-list">
      <PageIndexCatalogCard
        v-for="block in categoryBlocks"
        :key="block.id"
        :block="block"
      />
    </div>
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
const categoryBlocks: CategoryBlock[] = [
  {
    id: 1,
    title: "3D ПРИНТЕРЫ",
    description: "Мощные инструменты для изготовления 3D-моделей",
    link: "/category/printers",
    imageUrl: "/images/catalog/printer.png",
  },
  {
    id: 2,
    title: "ФИЛАМЕНТЫ",
    description: "Высококачественные материалы для 3D-печати",
    link: "/category/filaments",
    imageUrl: "/images/catalog/filament.png",
  },
  {
    id: 3,
    title: "АКСЕССУАРЫ",
    description: "Обновите свой принтер с помощью современных деталей",
    link: "/category/accessories",
    imageUrl: "/images/catalog/accessories.png",
  },
  {
    id: 4,
    title: "АКЦИИ",
    description: "Уникальные акции и скидки",
    link: "/promotions",
    imageUrl: "/images/catalog/promo.png",
  },
];
</script>

<style scoped lang="scss">
.catalog {
  &-list {
    @include gridFourColumns();
  }

  &-title {
    @include textUppercase();
    font-weight: 900;
    font-size: 40px;
    line-height: 40px;
    margin-bottom: 30px;

    span {
      font-weight: 400;
    }
  }
}
</style>
