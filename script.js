const { createApp, ref } = Vue;

createApp({
  setup() {
    const currentYear = new Date().getFullYear()

    // mobile menu
    const menuOpen = ref(false)

    // dark / light mode
    const isDark = ref(false)
    const savedTheme = localStorage.getItem('theme')
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    isDark.value = savedTheme ? savedTheme === 'dark' : systemPrefersDark
    document.documentElement.setAttribute('data-theme', isDark.value ? 'dark' : 'light')

    function toggleTheme() {
      isDark.value = !isDark.value
      document.documentElement.setAttribute('data-theme', isDark.value ? 'dark' : 'light')
      localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
    }

    const profile = ref({
      name: 'John Russell',
      role: 'Developer · Designer · Problem Solver',
      pitch: 'A short one- or two-sentence pitch about who you are and what you build.',
      resumeUrl: 'resume.pdf'
    })

    const navLinks = ref([
      { label: 'Home', href: '#home' },
      { label: 'About', href: '#about' },
      { label: 'Projects', href: '#projects' },
      { label: 'Skills', href: '#skills' },
      { label: 'Contact', href: '#contact' }
    ])

    const aboutParagraphs = ref([
      "A paragraph about your background, what you're studying or working on, and what kind of work you're looking for.",
      'Another short paragraph — interests, values, or what drives you.'
    ])

    const projects = ref([
      {
        id: 1,
        title: 'SLOTMACHINE-IN-JAVA-SWING',
        description: 'An interactive desktop slot machine simulation featuring a graphical user interface developed using Java Swing.',
        tags: ['Java', 'Swing'],
        codeUrl: 'https://github.com/nee0nn/SLOTMACHINE-IN-JAVA-SWING',
        demoUrl: 'https://project-one-demo.com'
      },
      {
        id: 2,
        title: 'Project Two',
        description: 'Short description of the project and your role.',
        tags: ['Python', 'Flask'],
        codeUrl: 'https://github.com/yourusername/project-two',
        demoUrl: ''
      },
      {
        id: 3,
        title: 'Project Three',
        description: 'Short description of the project and your role.',
        tags: ['HTML', 'CSS', 'JavaScript'],
        codeUrl: 'https://github.com/yourusername/project-three',
        demoUrl: 'https://project-three-demo.com'
      }
    ])

    const skillGroups = ref([
      {
        category: 'Languages',
        items: ['Java', 'C++, C#', 'VB.NET / .NET']
      },
      {
        category: 'Frameworks & Tools',
        items: ['React', 'Node.js', 'Git & GitHub']
      }
    ])

    const contactLinks = ref([
      { label: 'Email', url: 'mailto:you@example.com', external: false },
      { label: 'GitHub', url: 'https://github.com/nee0nn', external: true },
      { label: 'LinkedIn', url: 'https://linkedin.com/in/yourusername', external: true }
    ])

    return {
      currentYear,
      menuOpen,
      isDark,
      toggleTheme,
      profile,
      navLinks,
      aboutParagraphs,
      projects,
      skillGroups,
      contactLinks
    }
  }
}).mount('#app')