import './style.css';

const app = document.querySelector('#app');

if (app) {
  app.innerHTML = `
    <div class="min-h-screen bg-gray-50">
      <!-- Navigation -->
      <nav class="flex items-center justify-between p-6 bg-white shadow">
        <h1 class="text-2xl font-bold">
          <a href="/" class="hover:text-blue-500">Food Ninja</a>
        </h1>
        <ul class="flex space-x-6">
          <li><a href="#" class="hover:text-blue-500"><span>Home</span></a></li>
          <li><a href="#" class="hover:text-blue-500"><span>About</span></a></li>
          <li><a href="#" class="hover:text-blue-500"><span>Contact</span></a></li>
        </ul>
      </nav>

      <!-- Auth Links -->
      <div class="flex justify-end space-x-4 mt-4 px-6">
        <a href="#" class="text-yellow-500 hover:text-green-500">Log in</a>
        <a href="#" class="text-yellow-500 hover:text-green-500">Sign up</a>
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

          <!-- card -->
          <div class="bg-white rounded shadow overflow-hidden relative">
            <img src="img/stew.jpg" alt="stew" class="w-full h-48 object-cover">
            <div class="p-4">
              <span class="block font-semibold">5 Bean Chili Stew</span>
              <span class="block text-gray-500 text-sm">Recipe by Abyu</span>
            </div>
            <div class="bg-orange-200 text-gray-700 text-xs uppercase font-bold rounded-full p-2 absolute top-0 ml-2 mt-2">
              <span>25 mins</span>
            </div>
          </div>

          <div class="bg-white rounded shadow overflow-hidden relative">
            <img src="img/noodles.jpg" alt="stew" class="w-full h-48 object-cover">
            <div class="p-4">
              <span class="block font-semibold">Classic Noodles</span>
              <span class="block text-gray-500 text-sm">Recipe by Mario</span>
            </div>
            <div class="bg-orange-200 text-gray-700 text-xs uppercase font-bold rounded-full p-2 absolute top-0 ml-2 mt-2">
              <span>25 mins</span>
            </div>
          </div>
          
          <div class="bg-white rounded shadow overflow-hidden relative">
            <img src="img/curry.jpg" alt="stew" class="w-full h-48 object-cover">
            <div class="p-4">
              <span class="block font-semibold">Special Curry</span>
              <span class="block text-gray-500 text-sm">Recipe by Ninjas</span>
            </div>
            <div class="bg-orange-200 text-gray-700 text-xs uppercase font-bold rounded-full p-2 absolute top-0 ml-2 mt-2">
              <span>25 mins</span>
            </div>
          </div>
        </div>

        <h4 class="text-2xl font-semibold mt-12 mb-4">Most Popular</h4>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Most popular cards -->
        </div>
      </section>

      <!-- Load More -->
      <div class="flex justify-center my-12">
        <button class="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Load more
        </button>
      </div>
    </div>
  `;
}
