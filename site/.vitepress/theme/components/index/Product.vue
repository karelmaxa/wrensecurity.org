<script setup lang="ts">
defineProps({
  logo: { type: String, required: true },
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
    </div>
    <section
      id="features"
      class="items"
    >
      <ul class="item">
        <slot name="feature-list" />
      </ul>
      <div
        id="product-img"
        class="item"
      >
        <svg
          v-if="logo"
          width="100%"
          height="100%"
        >
          <image
            :xlink:href="logo"
            width="100%"
            height="100%"
          />
        </svg>
      </div>
      <slot name="feature-tiles" />
    </section>
  </div>
</template>

<style scoped>
.feature {
  padding: 16px 0;
  max-width: 1152px;
  margin: 0px auto;
}

.feature .custom {
  border-top: 1px solid var(--vp-c-divider);
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
  font-size: 15px;
  padding: 8px;
}

.feature-logo {
  float: right;
  flex: 0 33%;
  padding: 10px;
}

@media (max-width: 768px) {
  .feature {
    padding: 0;
  }
  .custom,
  .items {
    padding: 0 24px;
  }
  .content .intro
  .content .feature-logo {
    flex: 0 100%;
  }
  #features .item {
    flex: 0 100%;
    margin-bottom: 20px;
  }
  #product-img {
    display: none;
  }
}

.items {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.item {
  flex: 0 50%;
}

#features {
  max-width: 1152px;
  margin: 0px auto;
}
</style>