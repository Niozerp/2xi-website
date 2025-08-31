<template>
  <div class="container mt-5">
    <h1>Settings</h1>
    <p>This is the settings page. Only authenticated users can see this.</p>
    <div id="settings-content"></div>
  </div>
</template>

<script>
export default {
  name: 'Settings',
  props: ['authState'],
  mounted() {
    if (this.authState.isAuthenticated) {
      const script = document.createElement('script');
      script.src = '/src/settings.js';
      document.getElementById('settings-content').appendChild(script);
    }
  }
};
</script>
