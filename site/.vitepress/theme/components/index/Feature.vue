<script setup lang="ts">
import { withBase } from 'vitepress';

defineProps({
  logo: { type: String, required: true },
  url: { type: String, required: false, default: null },
});
</script>

<template>
  <div class="feature">
    <div class="custom">
      <h2 class="feature-title">
        <slot name="title" />
      </h2>
      <div class="content">
        <div class="intro">
          <p class="textarea">
            <slot name="description" />
          </p>
        </div>
      </div>
      <slot name="functionalities" />
    </div>
  </div>
</template>

<style scoped>
.feature {
  padding: 16px 24px;
  display: flex;
  justify-content: center;
}

.feature .custom {
  max-width: 1152px;
  padding: 0px;
  border-top: 1px solid var(--vp-c-divider);
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
  line-height: 32px;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.content {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: -8px;
  padding-bottom: 20px;
}

.intro {
  float: left;
  flex: 0 100%;
}

.textarea {
  font-size: 20px;
  padding: 8px;
}

.feature-logo {
  float: right;
  flex: 0 33%;
  padding: 10px;
}

@media (max-width: 768px) {
  .content {
    padding-bottom: none;
  }
  .content .intro {
    flex: 0 100%;
    margin-bottom: 20px;
  }
  .content .feature-logo {
    flex: 0 100%;
    margin-bottom: 20px;
  }
}
</style>