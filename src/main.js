import "./style.css";

const app = document.querySelector("#app");

if (app) {
  app.innerHTML = `
    <div class="min-h-screen bg-gray-50">
     <!-- Navigation -->
<nav class="flex items-center justify-between p-6 bg-white shadow">
  <!-- Logo -->
  <h1 class="text-2xl font-bold">
    <a href="/" class="hover:text-blue-500">Food Ninja</a>
  </h1>

        <!-- Navigation Links -->
        <ul class="flex space-x-6 items-center">
          <!-- Home -->
          <li class="flex items-center space-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 12l9-9 9 9M4 10v10h16V10" />
            </svg>
            <a href="#" class="hover:text-blue-500">Home</a>
          </li>

          <!-- About -->
          <li class="flex items-center space-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" />
            </svg>
            <a href="#" class="hover:text-blue-500">About</a>
          </li>

          <!-- Contact -->
          <li class="flex items-center space-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M16 12h2a2 2 0 012 2v6H4v-6a2 2 0 012-2h2m4-4v8m0-8l-4 4m4-4l4 4" />
            </svg>
            <a href="#" class="hover:text-blue-500">Contact</a>
          </li>
        </ul>
      </nav>


      <!-- Auth Links -->
      <div class="flex justify-center sm:justify-end space-x-4 mt-4 px-6">
        <a href="#" class="text-yellow-500 hover:text-green-500 border-green-500 border-2 rounded-full px-5 py-1">
        Log in </a>
        <a href="#" class="text-yellow-500 hover:text-green-500 border-green-500 border-2 rounded-full px-4 py-1">
        Sign up </a>
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
          <!-- Recipe image -->
              <img src="img/stew.jpg" alt="stew" class="w-full h-48 object-cover">

          <!-- Recipe details -->
          <div class="p-4">
            <span class="block font-semibold">5 Bean Chili Stew</span>
            <span class="block text-gray-500 text-sm">Recipe by Abyu</span>
          </div>

          <!-- Time badge with clock icon -->
          <div class="bg-orange-200 text-gray-700 text-xs uppercase font-bold rounded-full p-2 absolute top-0 ml-2 mt-2 flex items-center space-x-1">
            <!-- Clock Icon -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>

            <!-- Minutes text -->
            <span>17 mins</span>
          </div>
        </div>


          <div class="relative bg-white rounded shadow overflow-hidden">
            <img src="img/noodles.jpg" alt="stew" class="w-full h-48 object-cover">

            <div class="p-4">
              <p class="font-semibold">Classic Noodles</p>
              <p class="text-sm text-gray-500">Recipe by Mario</p>
            </div>

            <div class="absolute top-2 left-2 bg-orange-200 text-gray-700 text-xs font-bold uppercase px-2 py-1 rounded-full flex items-center gap-1">
              <!-- Time Icon -->
              <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 6v6l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>25 mins</span>
            </div>
          </div>

          
          <div class="bg-white rounded shadow overflow-hidden relative">
            <!-- Recipe image -->
            <img src="img/curry.jpg" alt="curry" class="w-full h-48 object-cover">

            <!-- Recipe details -->
            <div class="p-4">
              <span class="block font-semibold">Special Curry</span>
              <span class="block text-gray-500 text-sm">Recipe by Ninjas</span>
            </div>

            <!-- Time badge with clock icon -->
            <div class="bg-orange-200 text-gray-700 text-xs uppercase font-bold rounded-full p-2 absolute top-0 ml-2 mt-2 flex items-center space-x-1">
              <!-- Clock Icon -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>

              <!-- Minutes text -->
              <span>20 mins</span>
            </div>
          </div>


        <h4 class="text-2xl font-semibold mt-12 mb-4">Most Popular</h4>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Most popular cards -->
        </div>
      </section>

      <!-- Load More -->
      <div class="flex justify-center my-12">
        <button class="px-6 py-2 bg-blue-500 text-white rounded hover:bg-green-600">
          Load more
        </button>
      </div>
    </div>
  `;
}
