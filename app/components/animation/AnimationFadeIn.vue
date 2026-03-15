<template>
  <motion.div
    :initial="{ opacity: 0, y: 20 }"
    :whileInView="{ opacity: 1, y: 0 }"
    :inViewOptions="{ margin: '0% 0px -20% 0px' }"
    :transition="{
      duration: 0.4,
      delay: delay,
      ease: 'backInOut',
    }"
    class="animation-container"
  >
    <slot />
  </motion.div>
</template>

<script setup lang="ts">
import { motion } from "motion-v";
const { delay = 0 } = defineProps<{ delay?: number }>();
</script>

<style lang="scss" scoped>
.animation-container {
  width: 100%;
  opacity: 0;
}
</style>
