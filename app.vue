<template>
  <NuxtRouteAnnouncer />
  <HeaderComponent>
    <MenuComponent />
  </HeaderComponent>

  <NuxtPage />

  <footer class="container">
    <a href="#top">Gehe nach oben</a>
    <hr>

    <section>
      <small>
        Dieses Werk ist eine Abwandlung der Webseite <a
          href="https://jackyscript.github.io/jackyscript/">jackyscript</a>, lizenziert unter
        <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener">CC BY-SA 4.0</a>, und wurde
        erstellt mittels <a href="https://nuxt.com" target="_blank" rel="noopener">Nuxt</a> und
        <a href="https://picocss.com" target="_blank" rel="noopener">Pico CSS <svgo-spark aria-hidden="true"
            alt="Spark icon" /></a>.
      </small>
    </section>
    <section>
      <small>
        © {{ $dayjs().format("YYYY") }} Luise Punge.
        <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener">CC BY-SA 4.0</a>
      </small>
    </section>
  </footer>
</template>

<style scoped>
svg {
  width: 1rem;
}
</style>
