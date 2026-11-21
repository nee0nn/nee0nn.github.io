const { createApp, ref } = Vue;

createApp({
  setup() {
    const currentYear = new Date().getFullYear()
    const menuOpen = ref(false)
    
    // Dark / Light Mode (reads from what the <head> script just set)
    const isDark = ref(document.documentElement.getAttribute('data-theme') === 'dark')

    function toggleTheme() {
      isDark.value = !isDark.value
      document.documentElement.setAttribute('data-theme', isDark.value ? 'dark' : 'light')
      localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
    }

    function toggleTheme() {
      isDark.value = !isDark.value
      document.documentElement.setAttribute('data-theme', isDark.value ? 'dark' : 'light')
      localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
    }

    // Nav Data
    const profile = ref({
      name: 'John Russell'
    })

    const navLinks = ref([
      { label: 'Home', href: 'index.html#home' },
      { label: 'About', href: 'index.html#about' },
      { label: 'Projects', href: 'index.html#projects' },
      { label: 'Skills', href: 'index.html#skills' },
      { label: 'Hobbies', href: 'hobbies.html' },
      { label: 'Contact', href: 'index.html#contact' }
    ])

    return {
      currentYear,
      menuOpen,
      isDark,
      toggleTheme,
      profile,
      navLinks
    }
  }
}).mount('#app')