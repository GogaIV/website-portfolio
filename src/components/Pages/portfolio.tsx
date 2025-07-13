import React from "react";
import Navigation from "@/components/navigation";
import Projects from "@/components/projects";

const portfolio = () => {
  // Define sections for navigation
  const sections = [
    { id: "about", label: "About Me" },
    { id: "projects", label: "Projects" },
  ];

  return (
    <div className="min-h-screen bg-[#1b1b1b] p-8">
      {/* Navigation bar */}
      <Navigation sections={sections} />
      {/* Encases the profile section */}
      <div id="about" className="max-w-6xl mx-auto mt-14">
        <div className="flex items-start gap-8 mb-8">
          {
            // Profile picture - Needs to be replaced
          }
          <div className="w-64 h-48 rounded-lg flex-shrink-0">
            <img
              src="/assets/Images/saturn.jpg"
              alt="Profile"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          {
            // Name and description
          }
          <div className="flex-1 pt-4">
            <h1 className="text-4xl font-bold text-white mb-2">Jauhar Goga</h1>
            <p className="text-xl text-gray-300">
              Proficient in web development and C development
            </p>
          </div>
        </div>

        {
          // About me section
        }
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-[#191919] outline-solid outline-[#464646] rounded-lg p-6 h-40">
              <h2 className="text-2xl font-semibold text-white mb-4">
                About Me
              </h2>
              <div className="text-gray-400">
                dgasd
              </div>
            </div>
          </div>

          {
            // Achievements
          }
          <div className="lg:col-span-1 lg:row-span-3">
            <div className="bg-[#191919] outline-solid outline-[#464646] rounded-lg p-6 h-full">
              <h2 className="text-2xl text-gray-200 font-semibold mb-4">
                Achievements
              </h2>
              <div className="text-gray-400">
                <p className="mb-2">• Level 2 Excellence Endorsment</p>
                <p className="mb-2">• Level 3 Merit Endorsment</p>
                <p className="mb-2">•</p>
                <p className="mb-2">•</p>
                <p className="mb-2">•</p>
                <p className="mb-2">•</p>
              </div>
            </div>
          </div>

          {
            // Schooling
          }
          <div className="lg:col-span-2">
            <div className="bg-[#191919] outline-solid outline-[#464646] rounded-lg p-6 h-34">
              <h2 className="text-2xl font-semibold text-gray-200 mb-4">
                Schooling
              </h2>
              <div className="text-gray-400">
                <p>
                  University Entrance Qualification • Ormiston Senior College •
                  2021-2024
                </p>
                <p>
                  Bachelor of Science - Computer Science & Marine Science •
                  University of Auckland • 2025-2027
                </p>
              </div>
            </div>
          </div>

          {/* Job History */}
          <div className="lg:col-span-2">
            <div className="bg-[#191919] outline-solid outline-[#464646] rounded-lg p-6 h-40">
              <h2 className="text-2xl font-semibold text-gray-200 mb-4">
                Job History
              </h2>
              <div className="text-gray-400">
                {/* What a job section looks like start */}
                <div>
                  <p className="font-medium">
                    Junior Developer • Previous Company
                  </p>
                  <p className="text-sm">2022 - 2023</p>
                </div>
                {/* What a job section looks like end */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <Projects />
    </div>
  );
};

export default portfolio;
