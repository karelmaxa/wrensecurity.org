<template>
  <div class="item grid-2">
    <div class="functionality">
      <article class="box">
        <h2 class="title">
          <slot name="name" />
        </h2>
        <p class="details">
          <slot name="description" />
        </p>
      </article>
    </div>
  </div>
</template>

<style scoped>
.item.grid-2 {
  width: calc(100%/3);
  padding: 8px;
}

.functionality {
  display: block;
  border: 1px solid var(--vp-c-bg-soft);
  border-radius: 12px;
  height: 100%;
  background-color: var(--vp-c-bg-soft);
  transition: border-color 0.25s, background-color 0.25s;
}

.box {
  display: flex;
  flex-direction: column;
  padding: 24px;
  height: 100%;
}

.title {
  line-height: 24px;
  font-size: 16px;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.details {
  flex-grow: 1;
  padding-top: 8px;
  line-height: 24px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}
</style>