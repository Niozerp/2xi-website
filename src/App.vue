<template>
  <div>
    <Navbar />
    <div class="container mt-5">
      <Services />
      <About />
    </div>
    <Footer />
  </div>
</template>

<script>

const { defineAsyncComponent } = Vue;
const { loadModule } = window['vue3-sfc-loader'];

const options = {
  moduleCache: {
    vue: Vue,
  },
  async getFile(url) {
    const res = await fetch(url);
    if (!res.ok) {
      throw Object.assign(new Error(res.statusText + ' ' + url), { res });
    }
    return {
      getContentData: (asBinary) => asBinary ? res.arrayBuffer() : res.text(),
    }
  },
  addStyle(textContent) {
    const style = Object.assign(document.createElement('style'), { textContent });
    const ref = document.head.getElementsByTagName('style')[0] || null;
    document.head.insertBefore(style, ref);
  },
};

export default {
  name: 'App',
  components: {
    Navbar: defineAsyncComponent(() => loadModule('src/components/Navbar.vue', options)),
    Services: defineAsyncComponent(() => loadModule('src/components/Services.vue', options)),
    About: defineAsyncComponent(() => loadModule('src/components/About.vue', options)),
    Footer: defineAsyncComponent(() => loadModule('src/components/Footer.vue', options)),
  },
};
</script>

