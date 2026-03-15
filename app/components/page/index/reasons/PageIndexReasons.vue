<template>
  <div class="catalog">
    <h2 class="text-main catalog-title">
      Почему нас выбирают и рекомендуют уже более 5000 покупателей?
    </h2>
    <div class="catalog-list">
      <PageIndexReasonsCard
        v-for="block in categoryBlocks"
        :key="block.id"
        :block="block"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
interface ReasonBlock {
  id: number;
  title: string;
  description: string[];
  imageUrl?: string;
}
const categoryBlocks: ReasonBlock[] = [
  {
    id: 1,
    title: "Гибкие условия покупки",
    description: [
      "<span>Для бизнеса —</span> выгодный лизинг, возврат НДС 20%, удобные закрывающие документы",
      "<span>Для частных клиентов —</span> рассрочка через Яндекс Сплит",
    ],
    imageUrl: "/images/reasons/shipment.png",
  },
  {
    id: 2,
    title: "Гибкие условия покупки",
    description: [
      "<span>Для бизнеса —</span> выгодный лизинг, возврат НДС 20%, удобные закрывающие документы",
      "<span>Для частных клиентов —</span> рассрочка через Яндекс Сплит",
    ],
    imageUrl: "/images/reasons/shipment.png",
  },
  {
    id: 3,
    title: "Гибкие условия покупки",
    description: [
      "<span>Для бизнеса —</span> выгодный лизинг, возврат НДС 20%, удобные закрывающие документы",
      "<span>Для частных клиентов —</span> рассрочка через Яндекс Сплит",
    ],
    imageUrl: "/images/reasons/shipment.png",
  },
  {
    id: 4,
    title: "Гибкие условия покупки",
    description: [
      "<span>Для бизнеса —</span> выгодный лизинг, возврат НДС 20%, удобные закрывающие документы",
      "<span>Для частных клиентов —</span> рассрочка через Яндекс Сплит",
    ],
    imageUrl: "/images/reasons/shipment.png",
  },
];
</script>

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

    span {
      font-weight: 400;
    }
  }
}
</style>
