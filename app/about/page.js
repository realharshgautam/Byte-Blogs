import Image from 'next/image';

export default function About() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-32 bg-gray-100 dark:bg-gray-700">
        <div className="w-full max-w-4xl p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 flex justify-center items-center mb-8 md:mb-0">
              <div className="rounded-full overflow-hidden">
                <Image
                  src="/logo.jpg"
                  alt="Harsh&rsquo;s profile picture"
                  width={192}
                  height={192}
                  className="object-cover rounded-full"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 flex flex-col justify-center">
              <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">About Me</h1>
              <p className="text-gray-600 dark:text-gray-50 text-lg mb-4">
                {"Hello! I&rsquo;m Harsh, a passionate software developer and tech enthusiast. I created this blog to share my experiences, tips, and tutorials on various programming languages and technologies. I believe that learning should be a continuous journey, and I&rsquo;m here to help others on their path to mastering the art of coding."}
              </p>
              <p className="text-gray-600 dark:text-gray-50 text-lg">
                {"Whether you&rsquo;re just starting out or looking to sharpen your skills, you&rsquo;ll find a variety of resources and insights here. Let&rsquo;s explore the world of programming together!"}
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-gray-50 dark:bg-gray-800 dark:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Harsh&rsquo;s Journey as a Coder</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-50">
              {"From curious beginner to seasoned developer, here&rsquo;s how Harsh navigated the world of programming."}
            </p>
          </div>

          <div className="space-y-12">
            {/* Block 1 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3">
                <Image
                  src="/3.jpg"
                  alt="Harsh starting out as a beginner coder"
                  width={500}
                  height={256}
                  className="object-cover rounded-lg shadow-lg w-full h-64"
                />
              </div>
              <div className="md:w-2/3 md:pl-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">The Spark of Curiosity</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  {"Harsh&rsquo;s coding journey began in high school when he stumbled upon his first programming language—Python. What started as a simple curiosity quickly turned into a passion, as Harsh spent countless hours experimenting with code, building small projects, and learning the fundamentals of software development."}
                </p>
              </div>
            </div>

            {/* Block 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/3">
                <Image
                  src="/2.jpg"
                  alt="Harsh learning new skills and technologies"
                  width={500}
                  height={256}
                  className="object-cover rounded-lg shadow-lg w-full h-64"
                />
              </div>
              <div className="md:w-2/3 md:pr-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Diving Deeper</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  {"After mastering the basics, Harsh&rsquo;s thirst for knowledge grew. He began exploring more complex topics such as data structures, algorithms, and web development. Enrolling in online courses and attending coding bootcamps, Harsh quickly expanded his skill set, taking on freelance projects to apply his knowledge in real-world scenarios."}
                </p>
              </div>
            </div>

            {/* Block 3 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3">
                <Image
                  src="/1.jpg"
                  alt="Harsh working on a big project"
                  width={500}
                  height={256}
                  className="object-cover rounded-lg shadow-lg w-full h-64"
                />
              </div>
              <div className="md:w-2/3 md:pl-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Taking on Challenges</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  {"With several years of experience under his belt, Harsh began tackling more significant challenges. From contributing to open-source projects to developing his own applications, Harsh continued to push his limits, always looking for opportunities to learn and grow. His journey wasn&rsquo;t without its setbacks, but each obstacle was a stepping stone to becoming the skilled developer he is today."}
                </p>
              </div>
            </div>

            {/* Block 4 */}
            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/3">
                <Image
                  src="/4.jpg"
                  alt="Harsh mentoring fellow developers"
                  width={500}
                  height={256}
                  className="object-cover rounded-lg shadow-lg w-full h-64"
                />
              </div>
              <div className="md:w-2/3 md:pr-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Giving Back</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  {"Today, Harsh is not only a proficient coder but also a mentor to others. He regularly contributes to the programming community by writing tutorials, giving talks, and helping new coders find their footing in the world of software development. For Harsh, coding is more than just a profession—it&rsquo;s a lifelong journey of learning and sharing knowledge."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
