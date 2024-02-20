<template>
  <li class="box">
    <h2>
      <slot name="name" />
    </h2>
    <p class="details">
      <slot name="description" />
    </p>
  </li>
</template>

<style scoped>
.box {
  transition: color 0.5s, background-color 0.5s;
  padding: 28px 36px;
  font-size: 14px;
  font-weight: 500;
  background-color: transparent;
  padding: 20px 20px 0 0;
}

@media (max-width: 768px) {
  .box {
    flex: 0 100%;
    margin-bottom: 20px;
  }
  .p {
    width: 100%;
  }
}

h2 {
  font-weight: 600;
  font-size: 20px;
  letter-spacing: -0.4px;
  color: var(--vp-c-text-1);
  transition: color 0.5s;
}

p {
  font-weight: 400;
  font-size: 15px;
  margin-top: 5px;
  width: 90%;
}
</style>