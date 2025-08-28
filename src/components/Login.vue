<template>
  <div id="g_id_onload"
      data-client_id="YOUR_GOOGLE_CLIENT_ID" <!-- TODO: Replace with your Google Client ID -->
      data-callback="handleCredentialResponse">
  </div>
  <div class="g_id_signin"
      data-type="standard"
      data-shape="rectangular"
      data-theme="outline"
      data-text="signin_with"
      data-size="large"
      data-logo_alignment="left">
  </div>
</template>

<script>
export default {
  name: 'Login',
};
</script>
