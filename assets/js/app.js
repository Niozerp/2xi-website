new Vue({
  el: '#app',
  data: {
    navLinks: [
      { label: 'Art Commissions',   href: 'https://www.google.com' }, // <-- update
      { label: 'Ausherman Clothing',href: 'https://www.google.com' }, // <-- update
      { label: 'About',             href: 'https://www.google.com' }, // <-- update
      { label: 'Cart',              href: 'https://www.google.com' }  // <-- update
    ],
    social: [
      { label: 'Our Company YouTube Channel', href: 'https://www.google.com' }, // <-- supply YouTube channel URL
      { label: 'Follow Us On X',              href: 'https://www.google.com' }, // <-- supply X/Twitter profile
      { label: 'Jony Aush YouTube',           href: 'https://www.google.com' }, // <-- supply Jony channel
      { label: 'Dree Artmaker On YouTube',    href: 'https://www.google.com' }, // <-- supply Dree channel
      { label: 'JonyAush On Instagram',       href: 'https://www.google.com' }  // <-- supply Instagram profile
    ]
  },
  mounted(){
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if(!reduce && typeof initWave === 'function'){ initWave(); }
  }
});
