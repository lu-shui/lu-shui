<template>
  <header :class="['container sticky', { scrolled: scrolled }]">

    <slot />
  </header>
</template>

<script setup lang="ts">
const scrolled = ref(false);

if (import.meta.client) {
  const handleScroll = () => {
    if (import.meta.client) {
      scrolled.value = window.scrollY > 0;
    }
  };
  onMounted(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Set initial state
  });

  onBeforeUnmount(() => {
    window.removeEventListener("scroll", handleScroll);
  });
}
</script>

<style scoped>
.sticky {
  position: sticky;
  top: 0;
  z-index: 100;
  transition: padding 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.sticky.scrolled {
  background: var(--pico-background-color);
  border-block-end: 1px solid var(--pico-muted-border-color);
  padding-inline: 1rem;
}

p {
  margin: 0;
  font-size: 0.9rem;
  color: var(--pico-text-color);
  background-color: var(--pico-background-color);
}
</style>
