<script setup lang="ts">
import { withBase } from 'vitepress';

defineProps({
  logo: { type: String, required: true },
  url: { type: String, required: false, default: null },
});
</script>

<template>
  <div class="feature">
    <div class="custom-block">
      <h2 class="feature-title">
        <slot name="title" />
      </h2>
      <div class="content">
        <div class="intro">
          <p class="textarea">
            <slot name="description" />
          </p>
        </div>
        <div class="feature-logo">
          <a
            v-if="url"
            :href="withBase(url)"
          ><img :src="logo"></a>
          <span v-else><img :src="logo"></span>
        </div>
      </div>
      <div class="items">
        <slot name="functionalities" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.feature {
  padding: 16px 24px;
  display: flex;
  justify-content: center;
}

.feature .custom-block {
  max-width: 1152px;
}

@media (min-width: 640px) {
  .feature {
    padding: 16px 48px;
  }
}

@media (min-width: 960px) {
  .feature {
    padding: 16px 64px;
  }
}

.feature-title {
  margin: 30px 0;
  font-size: 32px;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.content {
  width: 100%;
  overflow: hidden;
  margin: -8px;
}

.intro {
  display: flex;
  float: left;
  width: 66.666%;
  flex-wrap: wrap;
}

.textarea {
  font-size: 24px;
  margin-bottom: 20px;
  padding: 8px;
}

.feature-logo {
  float: left;
  width: 33.333%;
  padding-left: 40px;
}

.items {
  display: flex;
  flex-wrap: wrap;
  margin: -8px;
}

</style>