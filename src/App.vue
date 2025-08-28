<template>
  <div>
    <Navbar :auth-state="authState" :show-settings="showSettings" :sign-out="signOut" />
    <div v-if="!settingsVisible">
      <div class="container mt-5">
        <Services />
        <About />
      </div>
    </div>
    <div v-else>
      <Settings :auth-state="authState" />
    </div>
    <div v-if="!authState.isAuthenticated">
      <Login />
    </div>
    <Footer />
  </div>
</template>

<script>
const { defineAsyncComponent, ref, onMounted } = Vue;
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
    Settings: defineAsyncComponent(() => loadModule('src/components/Settings.vue', options)),
    Login: defineAsyncComponent(() => loadModule('src/components/Login.vue', options)),
  },
  setup() {
    const authState = ref({
      isAuthenticated: false,
      user: null,
      error: null,
    });
    const settingsVisible = ref(false);

    // TODO: This is not a secure way to handle authentication.
    // The allowed email should be checked on a backend server.
    // For a static site, this is a limitation.
    const allowedEmail = 'Niozerp@2xi.zone';

    const handleCredentialResponse = (response) => {
      const id_token = response.credential;
      const userObject = JSON.parse(atob(id_token.split('.')[1]));

      if (userObject.email === allowedEmail) {
        authState.value.isAuthenticated = true;
        authState.value.user = userObject;
        authState.value.error = null;
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('user', JSON.stringify(userObject));
      } else {
        authState.value.isAuthenticated = false;
        authState.value.user = null;
        authState.value.error = 'Access denied. You are not an authorized user.';
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('user');
      }
    };

    const signOut = () => {
      authState.value.isAuthenticated = false;
      authState.value.user = null;
      authState.value.error = null;
      localStorage.removeItem('isAuthenticated');
      localStorage.removeItem('user');
      settingsVisible.value = false;
    };

    const checkLocalStorage = () => {
      const isAuthenticated = localStorage.getItem('isAuthenticated');
      if (isAuthenticated === 'true') {
        authState.value.isAuthenticated = true;
        authState.value.user = JSON.parse(localStorage.getItem('user'));
      }
    };

    const showSettings = () => {
      if (authState.value.isAuthenticated) {
        settingsVisible.value = true;
      }
    };

    onMounted(() => {
      checkLocalStorage();
      window.handleCredentialResponse = handleCredentialResponse;
    });

    return {
      authState,
      settingsVisible,
      showSettings,
      signOut,
    };
  },
};
</script>

