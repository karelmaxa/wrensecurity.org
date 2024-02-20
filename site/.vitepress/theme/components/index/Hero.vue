<template>
  <section
    id="highlights"
    class="vt-box-container"
  >
    <div class="vt-box">
      <h2>Comprehensive</h2>
      <p>
        All the tools you need for building reliable Identity and Access Management systems, completely open-source, without vendor lock-in. No licensing fees.
      </p>
    </div>
    <div class="vt-box">
      <h2>Versatile</h2>
      <p>
        Use the right amount of functionality you need, whether you're after a single-purpose tool or a complex IAM system. Start simple and scale up.
      </p>
    </div>
    <div class="vt-box">
      <h2>Reliable</h2>
      <p>
        Standing on the shoulders of giants, carefully maintained for maximum stability, while continuing with open-source principles.
      </p>
    </div>
    <div class="vt-box">
      <h2>Secure</h2>
      <p>
        Regular upgrades, security analysis as a part of CI pipelines, transparent vulnerability management - published as CVEs.
      </p>
    </div>
  </section>
</template>

<style scoped>
.vt-box-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.vt-box-container .vt-box {
  transition: color 0.5s, background-color 0.5s;
  padding: 28px 36px;
  border-radius: 8px;
  flex: 0 25%;
  font-size: 14px;
  font-weight: 500;
}

@media (max-width: 768px) {
  .vt-box-container .vt-box {
    flex: 0 100%;
    margin-bottom: 20px;
  }
}

#highlights {
  max-width: 1152px;
  margin: 0px auto;
  color: var(--vp-c-text-2);
}

#highlights h2 {
  font-weight: 600;
  font-size: 20px;
  letter-spacing: -0.4px;
  color: var(--vp-c-text-1);
  transition: color 0.5s;
  margin-bottom: 0.75em;
}

#highlights p {
  font-weight: 400;
  font-size: 15px;
}

#highlights .vt-box {
  background-color: transparent;
}

#highlights h3 {
  margin-bottom: 0.6em;
}
#highlights .vt-box {
  padding: 20px 20px 20px 0;
}
</style>