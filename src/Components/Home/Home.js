import React from "react";
import Resume from "../../assets/resume.pdf"
import Shitanhsu from "../../assets/mypic.jpeg"

function Home() {
  return (
    <div className="bg-white">
      <div class="max-w-screen-xl  container mx-auto px-4 sm:px-6 py-20 lg:px-16">
        <div class="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
          <div>
            <h1 class="block text-3xl font-bold text-gray-900 sm:text-4xl lg:text-6xl lg:leading-tight text-black-900">
              Hi, I am <span class="text-blue-600">Shitanshu Ranjan,</span>
            </h1>
            <h6 class="mt-6 text-2xl font-bold text-gray-900 sm:text-2xl lg:text-3xl lg:leading-tight text-black-900">
               A Full Stack Developer
             
            </h6>

            <div class="mt-7 grid gap-3 w-full sm:inline-flex">
            
              <a
                class="py-3 px-4  inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                href={Resume}
                download
              >
                Download Resume
                <svg
                  class="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </a>
            </div>

     
          </div>

          <div class="relative ms-4">
            <img
              class="w-full rounded-lg "
              src={Shitanhsu}
              alt="Image Description"
            />
           
          </div>
          
        </div>
        
      </div>
      <section className="dark:bg-white dark:text-gray-900">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src="https://media.gettyimages.com/id/1421955876/video/3d-animation-happy-young-man-cartoon-working-on-computer-freelance-job-creativity-innovation.jpg?s=640x640&k=20&c=0pdv0gXhi4GNE2eQ3YBod1Phx2bmDsjVHLNDmG8gqCc=" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-5xl font-bold leadi sm:text-6xl">A Brief Intro 
			
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">I am a Full Stack Developer with a solid track record 
        of building and enhancing dynamic websites and applications from the ground up. 
        My expertise extends to data scraping for Google Ads, e-commerce development, and 
        crafting responsive designs that ensure seamless user experiences across devices.
         I am proficient in a range of technologies, including HTML, CSS,
          JavaScript, Python, React.js, Node.js, and MongoDB. 
          My portfolio includes diverse projects such as Edurex, an e-learning platform, a 
          comprehensive song list API, and a feature-rich weather app. Currently, 
          I am pursuing a B.Tech in Information Technology with a commendable GPA of 8.74. 
          I hold certifications in Java Full Stack Development from WIPRO and Web Development 
          from Internshala, reflecting my commitment to continuous learning and professional growth. 
          My blend of technical skills and hands-on project experience positions me as a versatile and 
        innovative developer ready to tackle complex challenges.
				
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				
			</div>
		</div>
	</div>
</section>
    </div>
    
  );
}

export default Home;
