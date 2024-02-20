<template>
  <section
    id="functionalities"
    class="items"
  >
    <div class="box">
      <h2>
        <slot name="name-1" />
      </h2>
      <p>
        <slot name="description-1" />
      </p>
    </div>
    <div class="box">
      <h2>
        <slot name="name-2" />
      </h2>
      <p>
        <slot name="description-2" />
      </p>
    </div>
    <div class="box">
      <h2>
        <slot name="name-3" />
      </h2>
      <p>
        <slot name="description-3" />
      </p>
    </div>
  </section>
</template>

<style scoped>
.items {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.items .box {
  transition: color 0.5s, background-color 0.5s;
  padding: 28px 36px;
  border-radius: 8px;
  flex: 0 32%;
  font-size: 14px;
  font-weight: 500;
}

@media (max-width: 768px) {
  .items .box {
    flex: 0 100%;
    margin-bottom: 20px;
  }
}

#functionalities {
  max-width: 1152px;
  margin: 0px auto;
}

#functionalities h2 {
  font-weight: 600;
  font-size: 20px;
  letter-spacing: -0.4px;
  color: var(--vp-c-text-1);
  transition: color 0.5s;
  margin-bottom: 0.75em;
}

#functionalities p {
  font-weight: 400;
  font-size: 15px;
}

#functionalities .box {
  background-color: transparent;
}

#functionalities h3 {
  margin-bottom: 0.6em;
}
#functionalities .box {
  padding: 20px 20px 20px 0;
}
</style>