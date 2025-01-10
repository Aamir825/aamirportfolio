import React from 'react';
import { BsCalendar } from 'react-icons/bs'; // Import React Icon for calendar

const Journey = () => {
  return (
    <section className="py-32 bg-gradient-to-r from-[#4a0050] to-[#040025] text-white">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-semibold text-center mb-8">
          My <span className="text-purple-400">Journey</span>
        </h2>

        <div className="flex flex-wrap gap-8 justify-center">
          {/* Education Column */}
          <div className="flex-1 min-w-[300px] md:min-w-[400px]">
            <h3 className="text-3xl font-semibold mb-8">Education</h3>

            <div className="border-l-4 border-purple-400 pl-8">
              {/* Education Content */}
              <div className="mb-8">
                <div className="relative border border-pink-400 p-6 rounded-lg hover:bg-[#4a0050]">
                  <div className="absolute -top-1 left-[-3.1rem] w-8 h-8 bg-purple-400 rounded-full"></div>
                  <div className="flex items-center text-lg text-purple-400 mb-2">
                    <BsCalendar className="text-white text-xl mr-2" />
                    2016 - 2017
                  </div>
                  <h3 className="text-xl font-semibold">Science</h3>
                  <p className="text-lg">Working Folks Grammar School Kohat 1</p>
                </div>
              </div>

              <div className="mb-8">
                <div className="relative border border-pink-400 p-6 rounded-lg hover:bg-[#4a0050]">
                  <div className="absolute -top-1 left-[-3.1rem] w-8 h-8 bg-purple-400 rounded-full"></div>
                  <div className="flex items-center text-lg text-purple-400 mb-2">
                    <BsCalendar className="text-white text-xl mr-2" />
                    2018 - 2019
                  </div>
                  <h3 className="text-xl font-semibold">General Science</h3>
                  <p className="text-lg">Karwan Model College Kohat</p>
                </div>
              </div>

              <div className="mb-8">
                <div className="relative border border-pink-400 p-6 rounded-lg hover:bg-[#4a0050]">
                  <div className="absolute -top-1 left-[-3.1rem] w-8 h-8 bg-purple-400 rounded-full"></div>
                  <div className="flex items-center text-lg text-purple-400 mb-2">
                    <BsCalendar className="text-white text-xl mr-2" />
                    2019 - 2023
                  </div>
                  <h3 className="text-xl font-semibold">BS Software Engineering</h3>
                  <p className="text-lg">Brains Institute Peshawar</p>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Column */}
          <div className="flex-1 min-w-[300px] md:min-w-[400px]">
            <h3 className="text-3xl font-semibold mb-8">Experience</h3>

            <div className="border-l-4 border-purple-400 pl-8">
              {/* Experience Content */}
              <div className="mb-8">
                <div className="relative border border-pink-400 p-6 rounded-lg hover:bg-[#4a0050]">
                  <div className="absolute -top-1 left-[-3.1rem] w-8 h-8 bg-purple-400 rounded-full"></div>
                  <div className="flex items-center text-lg text-purple-400 mb-2">
                    <BsCalendar className="text-white text-xl mr-2" />
                    06/2023 - 08/2023
                  </div>
                  <h3 className="text-xl font-semibold">FRONTEND DEVELOPER</h3>
                  <p className="text-sm">Brains Institute Peshawar</p>
                  <p className="text-lg mt-2 text-gray-400">
                    Successfully completed a 3-month frontend internship at Brains Institute Peshawar.
                    Gained hands-on experience in web development and enhanced frontend skills.
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <div className="relative border border-pink-400 p-6 rounded-lg hover:bg-[#4a0050]">
                  <div className="absolute -top-1 left-[-3.1rem] w-8 h-8 bg-purple-400 rounded-full"></div>
                  <div className="flex items-center text-lg text-purple-400 mb-2">
                    <BsCalendar className="text-white text-xl mr-2" />
                    04/2022 - 05/2022
                  </div>
                  <h3 className="text-xl font-semibold">BAHAR STUDIO WEBSITE</h3>
                  <p className="text-sm">Project of KUST University</p>
                  <p className="text-lg mt-2 text-gray-400">
                    Designed and developed Bahar Studio's photography website, creating a visually
                    captivating online portfolio. Incorporated user-friendly navigation and galleries
                    to showcase the studio's photography work effectively.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
