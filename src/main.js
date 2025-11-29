import "./style.css";

const app = document.querySelector("#app");

if (app) {
  app.innerHTML = `
    <div class="min-h-screen bg-gray-50">

      <!-- Navigation -->
      <nav class="bg-white shadow px-6 py-4">
        <div class="flex items-center justify-between">
          <!-- Logo -->
          <div class="text-2xl font-bold">
            <a href="/">Food Ninja</a>
          </div>

          <!-- Desktop Size Links -->
          <ul class="hidden sm:flex space-x-6">
            <li><a href="#" class="hover:text-blue-500">Home</a></li>
            <li><a href="#" class="hover:text-blue-500">About</a></li>
            <li><a href="#" class="hover:text-blue-500">Contact</a></li>
          </ul>

          <!-- Mobile Menu Button -->
          <div class="sm:hidden">
            <button id="mobile-menu-button" class="text-gray-700 focus:outline-none">
              <!-- Hamburger Icon -->
              <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Dropdown Menu -->
        <ul id="mobile-menu" class="hidden flex-col mt-4 space-y-2 sm:hidden">
          <li><a href="#" class="block px-4 py-2 hover:bg-gray-100 rounded">Home</a></li>
          <li><a href="#" class="block px-4 py-2 hover:bg-gray-100 rounded">About</a></li>
          <li><a href="#" class="block px-4 py-2 hover:bg-gray-100 rounded">Contact</a></li>
        </ul>
      </nav>

      <!-- Auth Links -->
      <div class="flex justify-center sm:justify-end space-x-4 mt-4 px-6">
        <a href="#" class="text-yellow-500 hover:text-green-500 border-green-500 border-2 rounded-full px-5 py-1">Log in</a>
        <a href="#" class="text-yellow-500 hover:text-green-500 border-green-500 border-2 rounded-full px-4 py-1">Sign up</a>
      </div>

      <!-- Header -->
      <header class="text-center mt-12">
        <h2 class="text-3xl font-bold">Recipes</h2>
        <h3 class="text-xl text-gray-600">For Ninjas</h3>
      </header>

      <!-- Latest Recipes -->
      <section class="mt-12 px-6">
        <h4 class="text-2xl font-semibold mb-4">Latest Recipes</h4>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Card 1 -->
          <div class="bg-white rounded shadow overflow-hidden relative">
            <img src="img/stew.jpg" alt="stew" class="w-full h-48 object-cover">
            <div class="p-4">
              <span class="block font-semibold">5 Bean Chili Stew</span>
              <span class="block text-gray-500 text-sm">Recipe by Abyu</span>
            </div>
            <div class="bg-orange-200 text-gray-700 text-xs uppercase font-bold rounded-full p-2 absolute top-0 ml-2 mt-2 flex items-center space-x-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>17 mins</span>
            </div>
          </div>

          <!-- Card 2 -->
          <div class="bg-white rounded shadow overflow-hidden relative">
            <img src="img/noodles.jpg" alt="noodles" class="w-full h-48 object-cover">
            <div class="p-4">
              <p class="font-semibold">Classic Noodles</p>
              <p class="text-sm text-gray-500">Recipe by Mario</p>
            </div>
            <div class="absolute top-2 left-2 bg-orange-200 text-gray-700 text-xs font-bold uppercase px-2 py-1 rounded-full flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 6v6l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>25 mins</span>
            </div>
          </div>

          <!-- Card 3 -->
          <div class="bg-white rounded shadow overflow-hidden relative">
            <img src="img/curry.jpg" alt="curry" class="w-full h-48 object-cover">
            <div class="p-4">
              <span class="block font-semibold">Special Curry</span>
              <span class="block text-gray-500 text-sm">Recipe by Ninjas</span>
            </div>
            <div class="bg-orange-200 text-gray-700 text-xs uppercase font-bold rounded-full p-2 absolute top-0 ml-2 mt-2 flex items-center space-x-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>20 mins</span>
            </div>
          </div>
        </div>

        <!-- Most Popular Section -->
        <h4 class="text-2xl font-semibold mt-12 mb-4">Most Popular</h4>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Popular Card 1 -->
          <div class="bg-yellow-50 rounded shadow overflow-hidden relative hover:scale-105 transition-transform duration-200">
            <img src="img/Creamy Pasta.webp" alt="pasta" class="w-full h-48 object-cover">
            <div class="p-4">
              <span class="block font-semibold">Creamy Pasta</span>
              <span class="block text-gray-500 text-sm">Recipe by Anna</span>
            </div>
            <div class="bg-red-200 text-red-700 text-xs uppercase font-bold rounded-full p-2 absolute top-0 ml-2 mt-2 flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>30 mins</span>
            </div>
          </div>

          <!-- Popular Card 2 -->
          <div class="bg-yellow-50 rounded shadow overflow-hidden relative hover:scale-105 transition-transform duration-200">
            <img src="img/avocado salad.jpg" alt="salad" class="w-full h-48 object-cover">
            <div class="p-4">
              <span class="block font-semibold">Avocado Salad</span>
              <span class="block text-gray-500 text-sm">Recipe by John</span>
            </div>
            <div class="bg-red-200 text-red-700 text-xs uppercase font-bold rounded-full p-2 absolute top-0 ml-2 mt-2 flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>15 mins</span>
            </div>
          </div>

          <!-- Popular Card 3 -->
          <div class="bg-yellow-50 rounded shadow overflow-hidden relative hover:scale-105 transition-transform duration-200">
            <img src="img/Tomato Soup.webp" alt="soup" class="w-full h-48 object-cover">
            <div class="p-4">
              <span class="block font-semibold">Tomato Soup</span>
              <span class="block text-gray-500 text-sm">Recipe by Clara</span>
            </div>
            <div class="bg-red-200 text-red-700 text-xs uppercase font-bold rounded-full p-2 absolute top-0 ml-2 mt-2 flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>20 mins</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Load More -->
      <div class="flex justify-center my-12">
        <button class="px-6 py-2 bg-blue-500 text-white rounded hover:bg-green-600 transition-colors duration-200">
          Load more
        </button>
      </div>
    </div>
  `;

  // Mobile dropdown functionality
  const menuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  if (menuButton && mobileMenu) {
    menuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }
}
