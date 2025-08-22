<template>
  <footer class="footer mt-auto py-3">
    <div class="container text-center">
      <span>Follow us on:</span>
      <a href="https://google.com" target="_blank" class="ms-2">Social Media</a>
      <a href="https://google.com" target="_blank" class="ms-2">Social Media</a>
      <a href="https://google.com" target="_blank" class="ms-2">Social Media</a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
.footer {
  background-color: var(--secondary-color);
  color: white;
}
.footer a {
  color: white;
  text-decoration: none;
}
.footer a:hover {
  text-decoration: underline;
}
</style>
