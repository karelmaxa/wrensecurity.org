<template>
  <section
    id="highlights"
    class="box-container"
  >
    <div class="box">
      <h2>
        Protection
      </h2>
      <p>
        An additional layer of protection that provides authentication (and authorization) according to your security standards for any application.
      </p>
    </div>
    <div class="box">
      <h2>
        Simplicity
      </h2>
      <p>
        Works as a proxy, providing trustworthy security information to your systems. Simplifying implementation in the applications itself.
      </p>
    </div>
    <div class="box">
      <h2>
        Control
      </h2>
      <p>
        Changes in the security configurations can be made without altering the applications and central audit provides insight into potentially malicious activities.
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
  padding: 20px 20px 0 0;
  border-radius: 8px;
  flex: 0 32%;
  font-size: 14px;
  font-weight: 500;
}

@media (max-width: 768px) {
  .box-container .box {
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

#highlights .box {
  background-color: transparent;
}

#highlights h3 {
  margin-bottom: 0.6em;
}
</style>