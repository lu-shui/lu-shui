<template>
  <section>
    <article>
      <slot name="icon" />
      <h5><slot name="heading" /></h5>
      <p><slot name="description" /></p>
      <p><slot name="mail" /></p>
      <slot name="link" />
    </article>
  </section>
</template>
