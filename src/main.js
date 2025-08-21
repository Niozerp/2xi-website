const { createApp, defineAsyncComponent } = Vue;
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
}

const app = createApp({
  template: '<App />'
});


app.component('App', defineAsyncComponent(() => loadModule('src/App.vue', options)));
app.component('Navbar', defineAsyncComponent(() => loadModule('src/components/Navbar.vue', options)));
app.component('Services', defineAsyncComponent(() => loadModule('src/components/Services.vue', options)));
app.component('About', defineAsyncComponent(() => loadModule('src/components/About.vue', options)));
app.component('Footer', defineAsyncComponent(() => loadModule('src/components/Footer.vue', options)));


app.mount('#app');
