import { defineStore } from "pinia";
import { ref, computed } from "vue";

export interface CategoryBlock {
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

interface CartItem {
  product: CategoryBlock;
  quantity: number;
}

const initProducts = [
  {
    product: {
      id: 2,
      category: "3D принтер",
      rating: { value: 4.6, count: 1890 },
      title: "Bambu Lab A1 mini (EU)",
      level: "начальный уровень",
      tag: "хит",
      printType: "FDM",
      printSize: "256x256x256",
      price: 134000,
      imageUrl: "/images/products/printer.png",
    },
    quantity: 2,
  },
];

export const useCartStore = defineStore("cart", () => {
  const items = ref<CartItem[]>(initProducts);

  // добавить товар
  function add(product: CategoryBlock, quantity = 1) {
    const existing = items.value.find((i) => i.product.id === product.id);

    if (existing) {
      existing.quantity += quantity;
    } else {
      items.value.push({
        product,
        quantity,
      });
    }
  }

  // уменьшить
  function decrease(id: number) {
    const item = items.value.find((i) => i.product.id === id);

    if (!item) return;

    item.quantity--;

    if (item.quantity <= 0) {
      remove(id);
    }
  }

  // удалить
  function remove(id: number) {
    items.value = items.value.filter((i) => i.product.id !== id);
  }

  // количество конкретного товара
  function getQuantity(id: number) {
    return items.value.find((i) => i.product.id === id)?.quantity ?? 0;
  }

  // общее количество
  const totalCount = computed(() =>
    items.value.reduce((sum, i) => sum + i.quantity, 0),
  );

  // общая стоимость
  const totalPrice = computed(() =>
    items.value.reduce((sum, i) => sum + i.product.price * i.quantity, 0),
  );

  // количество разных товаров
  const itemsCount = computed(() => items.value.length);

  return {
    items,

    add,
    decrease,
    remove,
    getQuantity,

    totalCount,
    totalPrice,
    itemsCount,
  };
});
