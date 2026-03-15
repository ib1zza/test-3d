<template>
  <span
    v-if="data"
    class="icon"
    :class="{ icon_fill: !filled, icon_stroke: data.hasStroke && !filled }"
    v-html="data.icon"
  />
</template>

<script setup lang="ts">
const props = defineProps<{
  name: string;
  filled?: boolean;
}>();

async function importIcon(name: string) {
  let icon = "";
  let hasStroke = false;

  try {
    const iconsImport = import.meta.glob<string>("assets/icons/**/**.svg", {
      query: "?raw",
      import: "default",
    });
    const rawIcon = await iconsImport[`/assets/icons/${name}.svg`]!();
    if (rawIcon.includes("stroke")) {
      hasStroke = true;
    }
    icon = rawIcon;
  } catch {
    console.error(`Icon '${props.name}' doesn't exist in 'assets/icons'`);
  }

  return {
    icon,
    hasStroke,
  };
}

const { data } = await useAsyncData(
  "icon" + props.name,
  () => importIcon(props.name),
  {
    watch: [() => props.name],
  },
);
</script>

<style lang="scss" scoped>
.icon {
  & > * {
    width: 1em;
    height: 1em;
    vertical-align: middle;
  }
  &_fill,
  &_fill * {
    fill: currentColor !important;
  }
  &_stroke,
  &_stroke * {
    stroke: currentColor !important;
  }
}
</style>
