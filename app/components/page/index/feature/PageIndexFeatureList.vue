<template>
  <div class="features-grid">
    <PageIndexFeatureItem
      v-for="item in featureItems"
      :key="item.title"
      :block="item"
      class="features-grid__item"
    />
  </div>
</template>

<script setup lang="ts">
interface FeatureItem {
  title: string;
  description?: string;
  checks?: string[];
  link: string;
  linkText: string;
  imageUrl: string;
}

const featureItems: FeatureItem[] = [
  {
    title: "Работаем с юр. лицами",
    checks: [
      "Отгрузка товара в день оплаты",
      "Возврат НДС 20%",
      "Набор закрывающих документов",
      "Лизинг",
      "Онлайн формирование счета",
    ],
    link: "/legal-info",
    linkText: "Узнать больше",
    imageUrl: "/images/features/legal.png",
  },
  {
    title: "Не знаете, какое оборудование вам подойдет?",
    description:
      "Ответьте на несколько вопросов и получите подборку подходящих моделей с советами эксперта",
    link: "/quiz/3d-printer",
    linkText: "Подобрать 3D принтер",
    imageUrl: "/images/features/quiz.png",
  },
];
</script>

<style scoped lang="scss">
.features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;

  @include mediaTablet {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
