<template>
  <section id="services" class="py-5">
    <h2 class="text-center">Our Services</h2>
    <div class="row">
      <div class="col-md-3">

        <a href="art.html" class="card-link">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Art Commissions</h5>
              <p class="card-text">Custom art pieces created by our talented artists.</p>
            </div>
          </div>
        </a>
      </div>
      <div class="col-md-3">
        <a href="web-design.html" class="card-link">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Web Design</h5>
              <p class="card-text">Modern and responsive websites for your business.</p>
            </div>
          </div>
        </a>
      </div>
      <div class="col-md-3">
        <a href="graphic-design.html" class="card-link">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Graphic Design</h5>
              <p class="card-text">Logos, branding, and other graphic design services.</p>
            </div>
          </div>
        </a>
      </div>
      <div class="col-md-3">
        <a href="video-production.html" class="card-link">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Video Production</h5>
              <p class="card-text">High-quality video content for your brand.</p>
            </div>
          </div>
        </a>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Services',
};
</script>

<style scoped>
.card {
  margin-bottom: 20px;

  transition: transform 0.2s;
}
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}
.card-link {
  text-decoration: none;
  color: inherit;

}
</style>
