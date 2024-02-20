<template>
  <section
    id="highlights"
    class="box-container"
  >
    <div class="box">
      <h2>Comprehensive</h2>
      <p>
        All the tools you need for building reliable Identity and Access Management systems.
      </p>
    </div>
    <div class="box">
      <h2>Versatile</h2>
      <p>
        Start small, adapt as needed, whether a basic tool or comprehensive IAM system.
      </p>
    </div>
    <div class="box">
      <h2>Open</h2>
      <p>
        Completely open-source. Without vendor lock-in. No licensing fees.
      </p>
    </div>
    <div class="box">
      <h2>Secure</h2>
      <p>
        Regular upgrades, security analysis, transparent vulnerability management - published as CVEs.
      </p>
    </div>
  </section>
</template>

<style scoped>
.box-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.box-container .box {
  transition: color 0.5s, background-color 0.5s;
  padding: 28px 28px 28px 0;
  border-radius: 8px;
  flex: 0 20%;
  font-size: 14px;
  font-weight: 500;
}

@media (max-width: 768px) {
  .box-container .box {
    flex: 0 100%;
    padding: 28px;
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

#highlights .box {
  background-color: transparent;
}

#highlights h3 {
  margin-bottom: 0.6em;
}
</style>