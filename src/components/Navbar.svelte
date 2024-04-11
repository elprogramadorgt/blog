<script>
    let isDark = false;
    function toggleDarkMode() {
    isDark = !isDark;
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
  let isMenuOpen = false;

function toggleMenu() {
  isMenuOpen = !isMenuOpen;
}
  </script>

  <nav class="bg-gray-900 text-white shadow-lg">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex justify-between items-center py-4">
        <!-- Logo/Brand -->
        <a href="/" class="flex items-center text-gray-200 hover:text-gray-100">
          <!-- <svg class="h-6 w-6 mr-1" /* Your Logo SVG * /></svg> -->
          <span class="font-bold">ElProgramadorGt</span>
        </a>
  
        <!-- Primary Nav Links -->
        <div class="hidden md:flex items-center space-x-1">
          <a href="/" class="py-5 px-3  transition duration-300">Home</a>
          <a href="/about" class="py-5 px-3  transition duration-300">About</a>
          <a href="/blog" class="py-5 px-3  transition duration-300">Blog</a>
          <a href="/lessons" class="py-5 px-3 transition duration-300">Lessons</a> <!-- Highlighted -->
        </div>

         <!-- Toggle Button -->
      <button on:click={toggleDarkMode} class="hidden md:block px-3 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition duration-300">
        {isDark ? 'Light Mode' : 'Dark Mode'}
      </button>
  
        <!-- Mobile Menu Button -->
        <button class="mobile-menu-button md:hidden" on:click={toggleMenu}>
          <svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 17 14">
            <path d="M16 2H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 0 1 0 2Z"/>
        </svg>
        </button>
      </div>
    </div>
  
    <!-- Mobile Menu -->
    <div class={`mobile-menu  md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
      <a href="/" class="block py-2 px-4 text-sm ">Home</a>
      <a href="/about" class="block py-2 px-4 text-sm ">About</a>
      <a href="/blog" class="block py-2 px-4 text-sm ">Blog</a>
      <a href="/lessons" class="block py-2 px-4 text-sm">Lessons</a> <!-- Highlighted -->
    </div>
  </nav>
  