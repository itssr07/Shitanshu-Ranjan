import React from 'react'

function About() {
  return (
    <div>
      
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  
  <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
    <h2 class="text-2xl font-bold md:text-4xl md:leading-tight ">Insights</h2>
    <p class="mt-1 text-gray-600 dark:text-neutral-400">Stay in the know with insights from Indian Heritage.</p>
  </div>
 

  
  <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
    
    <a class="group" href="#">
      <div class="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
        <img class="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" 
        src="https://images.theconversation.com/files/228846/original/file-20180723-189310-1ymcybu.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=754&fit=clip" alt="Image Description"/>
       
      </div>

      <div class="mt-7">
        <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600">
          The Taj Mahal
        </h3>
        <p class="mt-3 text-gray-800 ">
        The Taj Mahal is a magnificent white marble mausoleum in Agra, India, built by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal, symbolizing eternal love and beauty.
        </p>
        <p class="mt-5 inline-flex items-center gap-x-1 text-blue-600 decoration-2 group-hover:underline font-medium">
          Read more
          <svg class="flex-shrink-0 size-4" xmlns="https://agra.nic.in/tourist-place/the-taj-mahal/" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </p>
      </div>
    </a>
  

    
    <a class="group" href="#">
      <div class="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
        <img class="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src="https://m.media-amazon.com/images/I/81Ff9l1X1yL.jpg" alt="Image Description"/>
      </div>

      <div class="mt-7">
        <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600">
          Howrah Bridge
        </h3>
        <p class="mt-3 text-gray-800 ">
        Howrah Bridge, an iconic cantilever bridge over the Hooghly River in Kolkata, India, connects Howrah and Kolkata. Completed in 1943, it's renowned for its engineering marvel and bustling traffic.
        </p>
        <p class="mt-5 inline-flex items-center gap-x-1 text-blue-600 decoration-2 group-hover:underline font-medium">
          Read more
          <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </p>
      </div>
    </a>
  

    
    <a class="group relative flex flex-col w-full min-h-60 bg-[url('https://images.tv9hindi.com/wp-content/uploads/2024/01/ram-mandiray.webp')] bg-center bg-cover rounded-xl hover:shadow-lg transition" href="#">
      <div class="flex-auto p-4 md:p-6">
        <h3 class="text-xl text-black/90 group-hover:text-black-900"><span class="font-bold">Ram Madir Ayodhya</span>:Lord Ram Janam Bhoomi.</h3>
      </div>
      <div class="pt-0 p-4 md:p-6">
        <div class="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-white/70">
          Visit the site
          <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </div>
      </div>
    </a>
  
  </div>

</div>

    </div>
  )
}

export default About
