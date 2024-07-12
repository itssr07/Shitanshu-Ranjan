import React from 'react'

function Moreservice() {
  return (
    <div>
     
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div class="max-w-xl mx-auto">
    <div class="text-center">
      <h1 class="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-black-900">
        GET YOUR SERVICE DONE
      </h1>
      <p class="mt-1 text-gray-900 dark:text-neutral-900">
        Tell us about your need.
      </p>
    </div>

    <div class="mt-12">
     
      <form>
        <div class="grid gap-4 lg:gap-6">
          
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            <div>
              <label for="hs-firstname-hire-us-2" class="block mb-2 text-sm text-gray-700 font-medium dark:text-black-900">Name</label>
              <input type="text" name="hs-firstname-hire-us-2" id="hs-firstname-hire-us-2" class="py-3 px-4 block w-full border-gray-500 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-200 dark:border-neutral-700 dark:text-neutral-900 dark:placeholder-neutral-900 dark:focus:ring-neutral-600"/>
            </div>

            <div>
              <label for="hs-lastname-hire-us-2" class="block mb-2 text-sm text-gray-700 font-medium dark:text-black">Contact Number</label>
              <input type="text" name="hs-firstname-hire-us-2" id="hs-firstname-hire-us-2" class="py-3 px-4 block w-full border-gray-500 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-200 dark:border-neutral-700 dark:text-neutral-900 dark:placeholder-neutral-900 dark:focus:ring-neutral-600"/>
            </div>
          </div>
         

          <div>
            <label for="hs-work-email-hire-us-2" class="block mb-2 text-sm text-gray-700 font-medium dark:text-black-900">Email</label>
            <input type="text" name="hs-firstname-hire-us-2" id="hs-firstname-hire-us-2" class="py-3 px-4 block w-full border-gray-500 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-200 dark:border-neutral-700 dark:text-neutral-900 dark:placeholder-neutral-900 dark:focus:ring-neutral-600"/>
          </div>

          <div>
            <label for="hs-work-email-hire-us-2" class="block mb-2 text-sm text-gray-700 font-medium dark:text-black-900">Your Destination</label>
            <input type="text" name="hs-firstname-hire-us-2" id="hs-firstname-hire-us-2" class="py-3 px-4 block w-full border-gray-500 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-200 dark:border-neutral-700 dark:text-neutral-900 dark:placeholder-neutral-900 dark:focus:ring-neutral-600"/>
          </div>

       
          <div class="space-y-2">
            <label for="af-submit-app-category" class="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-900">
              Category
            </label>

            <select id="af-submit-app-category" class="py-2 px-3 pe-9 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-200 border-neutral text-neutral-900 dark:placeholder-neutral-500 focus:ring-neutral-900">
              <option selected>Select</option>
              <option>Get Package</option>
              <option>Get Hotel Details</option>
              <option>Book tour Guide</option>
              <option>Vehicle Rental</option>
              <option>Need CustomerSupport</option>
            </select>
          </div>
          <div class="space-y-2">
            <label for="af-submit-app-category" class="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-900">
              Number Of Persons
            </label>

            <select id="af-submit-app-category" class="py-2 px-3 pe-9 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-200 border-neutral text-neutral-900 dark:placeholder-neutral-500 focus:ring-neutral-900">
              <option selected>Select</option>
              <option>Upto 2</option>
              <option>3-7</option>
              <option>More than 7</option>
            </select>
          </div>
          <div class="space-y-2">
            <label for="af-submit-app-category" class="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-900">
              Gender
            </label>

            <select id="af-submit-app-category" class="py-2 px-3 pe-9 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-200 border-neutral text-neutral-900 dark:placeholder-neutral-500 focus:ring-neutral-900">
              <option selected>Select</option>
              <option>Male</option>
              <option>Female</option>
              <option>Others</option>
            </select>
          </div>
          
          

          <div>
            <label for="hs-about-hire-us-2" class="block mb-2 text-sm text-gray-900 font-medium text-black">Message</label>
            <textarea id="hs-about-hire-us-2" name="hs-about-hire-us-2" rows="4" class="py-3 px-4 block w-full border-gray-500 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-200 dark:border-neutral-900 dark:text-neutral-900 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"></textarea>
          </div>
        </div>
       
        <div class="mt-3 flex">
          <div class="flex">
            <input id="remember-me" name="remember-me" type="checkbox" class="shrink-0 mt-1.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"/>
          </div>
          <div class="ms-3">
            <label for="remember-me" class="text-sm text-gray-600 dark:text-neutral-400">By submitting this form I have read and acknowledged the <a class="text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500" href="#">Privact policy</a></label>
          </div>
        </div>
        

        <div class="mt-6 grid">
          <button type="submit" class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">Send Enquiry</button>
        </div>

        <div class="mt-3 text-center">
          <p class="text-sm text-gray-500 dark:text-neutral-500">
            We'll get back to you in 1-2 business days.
          </p>
        </div>
      </form>
      
    </div>
  </div>
</div>

    </div>
  )
}

export default Moreservice
