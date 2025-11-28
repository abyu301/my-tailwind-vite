// import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
  
// `

// setupCounter(document.querySelector('#counter'))


import './style.css' // loads Tailwind

document.querySelector('#app').innerHTML = `
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
    <h1 class="text-4xl font-bold underline bg-yellow-300 p-4 mb-4">
      Hello Tailwind!
    </h1>
    <p class="text-lg text-gray-700">
      This is your first Tailwind + Vite project.
    </p>
    <button class="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">
      Click me
    </button>
  </div>
`;
