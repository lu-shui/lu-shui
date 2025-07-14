<template>
  <ContactItem id="list">
    <template #icon><svgo-university aria-hidden="true" alt="Study icon" /> </template>
    <template #heading>Glossar</template>
    <template #description>Hier geht es zur
      <NuxtLink to="/dict">Wörterliste für chinesische Archäologie</NuxtLink>
    </template>
    >
  </ContactItem>
  <p>
    Mein Name ist Luise Punge (sie/ihr).
  </p>
  
 
  <p>Hier möchte ich u.a. folgende Projekte von mir zum Thema chinesische Archäologie teilen:</p>

  <ul>
    <li>Glossar/Wörterbuch (eine Liste von Fachbegriffen mit Übersetzungen und ausführlichen Erklärungen)</li>
    <li>Grabungsberichte-Verwendungstipps</li>
    <li>Objekt-Typologien, z.B. Gefäße</li>
    <li>Bibliografie chinesische Archäologie</li>
  </ul>


  <ContactItem id="mail">
    <template #icon><svgo-mail aria-hidden="true" alt="Mail icon" /> </template>
    <template #heading>Kontakt</template>
    <template #mail>l.punge [at] proton.me</template>
    >
  </ContactItem>



</template>

<style scoped>
svg {
  width: 1.5rem;
}

.grid {
  justify-items: center;
}
</style>
