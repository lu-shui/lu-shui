<template>
  <header class="container">
    <section>
      <NuxtLink to="/">Zurück zur Startseite</NuxtLink>
    </section>
    <h1>Glossar</h1>
  </header>
  <main class="container">
    <section>
      <small v-if="numberOfTerms > 0">In der Datenbank gibt es derzeit {{ numberOfTerms }}
        {{ numberOfTerms === 1 ? "Begriff" : "Begriffe" }}.</small>
      <small v-else>Derzeit gibt es keine Begriffe.</small>
    </section>
    <input v-model="query" type="search" name="search" placeholder="Suche nach Begriff" aria-label="Suche" />
    <section v-if="query.length > 0">
      <small v-if="result.length > 0">{{ `Es ${result.length === 1 ? 'wurde' : 'wurden'} ${result.length}
        ${result.length === 1 ? 'Begriff' : 'Begriffe'}
        gefunden.` }}</small>
      <small v-else>{{ `Es wurden keine Begriffe gefunden.` }}</small>
    </section>
    <template v-if="query.length > 0">
      <section v-for="term in result" :key="term.item.id">
        <article>
          <div class="grid">
            <div>
              <h4>{{ term.item.name }}</h4>
              <small><em>{{ term.item.transcription }}</em></small>
              <blockquote>
                <p>{{ term.item.translation }}</p>
              </blockquote>
            </div>
            <div>
              <p>{{ term.item.definition }}</p>
            </div>
          </div>
          <p>{{ term.item.description }}</p>
        </article>
      </section>
    </template>
    <template v-else>
      <section v-for="term in sortedTerms" :key="term.id">
        <article>
          <div class="grid">
            <div>
              <h4>{{ term.name }}</h4>
              <small><em>{{ term.transcription }}</em></small>
              <blockquote>
                <p>{{ term.translation }}</p>
              </blockquote>
            </div>
            <div>
              <p>{{ term.definition }}</p>
            </div>
          </div>
          <p>{{ term.description }}</p>
        </article>
      </section>
    </template>
  </main>
  <footer class="container">
    © 2025 Luise Punge
  </footer>
</template>

<script setup lang="ts">
import Fuse from 'fuse.js'

const query = ref('')

const { data: terms } = await useAsyncData("terms", () => {
  return queryCollection("terms").order("transcription", "ASC").all();
}, { default: () => [], watch: [query] });

const sortedTerms = computed(() => {
  return terms.value.filter((term) => term.released).sort((a, b) => { return a.transcription.localeCompare(b.transcription) })
})

const fuse = new Fuse(sortedTerms.value, {
  keys: ['name', 'transcription', 'translation', 'description']
})

const result = computed(() => fuse.search(toValue(query)).slice(0, 10))

const numberOfTerms = computed(() => {
  return terms.value ? terms.value.length : 0;
});
</script>
