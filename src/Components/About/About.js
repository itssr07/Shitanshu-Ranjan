import React from "react";

function About() {
  return (
    <div>
      <section className="bg-white text-gray-900">
	<div className="container max-w-5xl px-4 py-12 mx-auto">
		<div className="grid gap-4 mx-4 sm:grid-cols-12">
			<div className="col-span-12 sm:col-span-3">
				<div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-blue-900">
					<h3 className="text-3xl font-semibold">My Education</h3>
					
				</div>
			</div>
			<div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
				<div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
					<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue-900">
						<h3 className="text-xl font-semibold tracki">Haldia Institute of Technology </h3>
						<time className="text-xs tracki uppercase dark:text-gray-900">September 2020- July 2024</time>
						<p className="mt-3">Bachelor Of Technology || Information Technology || CGPA-8.74</p>
					</div>
					<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue-900">
						<h3 className="text-xl font-semibold tracki">D.A.V. Public School Sector-4, Bokaro</h3>
						<time className="text-xs tracki uppercase dark:text-gray-900">June 2018- May 2020</time>
						<p className="mt-3">Intermediate || percentage- 79.4%</p>
					</div>
					<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue-900">
						<h3 className="text-xl font-semibold tracki">D.A.V. Public School Samastipur</h3>
						<time className="text-xs tracki uppercase dark:text-gray-900">April 2006- May 2016</time>
						<p className="mt-3">Upto Matriculation || CGPA-.10</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section className="dark:bg-white dark:text-gray-900">
	<div className="container max-w-5xl px-4 py-12 mx-auto">
		<div className="grid gap-4 mx-4 sm:grid-cols-12">
			<div className="col-span-12 sm:col-span-3">
				<div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-blue-900">
					<h3 className="text-3xl font-semibold">Work Experience</h3>
				
				</div>
			</div>
			<div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
				<div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
					<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue-900">
						<h3 className="text-xl font-semibold tracki">One24 Pvt Ltd</h3>
						<time className="text-xs tracki uppercase dark:text-gray-900">March 2024-April 2024</time>
						<p className="mt-3">At One24, I developed an e-commerce application, integrating payment solutions to streamline transactions for users.
               My main achievement was conceptualizing and developing the One24 Trade platform, a cutting-edge solution aimed at enhancing the 
               company's trading capabilities. This role required a deep understanding of e-commerce systems and payment integration, along with the 
               ability to translate business requirements into technical solutions. My contributions significantly
               advanced the platform's development, aligning with the company's strategic goals.</p>
					</div>
					<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue-900">
						<h3 className="text-xl font-semibold tracki">Paisowala</h3>
						<time className="text-xs tracki uppercase dark:text-gray-900">August 2023- November 2023</time>
						<p className="mt-3">As a Full Stack Developer at Paisowala, I was responsible for scraping data such as Advertiser Id and 
              Creator Id from various websites for Google Ads. I played a crucial role in building the company's website from scratch, 
              ensuring a robust and user-friendly design. Additionally, I enhanced the landing page and fixed minor bugs to improve the 
              overall functionality and user experience. My work involved both frontend and backend development, 
              showcasing my ability to manage and execute full stack projects effectively.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>


    </div>
  );
}

export default About;
