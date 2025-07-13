"use client"
// The "project section" of the code gets very big very fast when adding more than 6 so I decided to use a new file to encase the project component

import React, { useState } from "react";

interface Project {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  link: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      name: "Project",
      description: "desc",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "#"
    },
    {
      id: 2,
      name: "Project",
      description: "desc",
      technologies: ["React", "Node.js", "Socket.io"],
      link: "#"
    },
    {
      id: 3,
      name: "Project",
      description: "desc",
      technologies: ["React", "TypeScript", "API"],
      link: "#"
    },
    {
      id: 4,
      name: "Project",
      description: "desc",
      technologies: ["Next.js", "TypeScript", "Tailwind"],
      link: "#"
    },
    {
      id: 5,
      name: "Project",
      description: "desc",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      link: "#"
    },
    {
      id: 6,
      name: "Project",
      description: "desc",
      technologies: ["C", "Arduino", "Python"],
      link: "#"
    },
    {
      id: 7,
      name: "Project",
      description: "desc",
      technologies: ["Vue.js", "Node.js", "PostgreSQL"],
      link: "#"
    },
    {
      id: 8,
      name: "Project",
      description: "desc",
      technologies: ["Unity", "C#", "Mobile"],
      link: "#"
    },
    {
      id: 9,
      name: "Project",
      description: "desc",
      technologies: ["Python", "Flask", "C"],
      link: "#"
    },
  ];

  const [selectedFilter, setSelectedFilter] = useState<string>("All");

  // Get all projects with that type of label
  const allTechnologies = Array.from(
    new Set(projects.flatMap(project => project.technologies))
  ).sort();

  // Filtering it
  const filteredProjects = selectedFilter === "All" 
    ? projects 
    : projects.filter(project => project.technologies.includes(selectedFilter));

  // Colours for filter tags
  const getTechColor = (tech: string) => {
    const colors: { [key: string]: string } = {
      "React": "bg-blue-600",
      "Node.js": "bg-green-600",
      "Python": "bg-yellow-600",
      "TypeScript": "bg-blue-800",
      "JavaScript": "bg-yellow-500",
      "Vue.js": "bg-emerald-600",
      "Next.js": "bg-black",
      "MongoDB": "bg-green-500",
      "PostgreSQL": "bg-blue-700",
      "C": "bg-gray-600",
      "C#": "bg-purple-600",
      "Arduino": "bg-teal-600",
      "Unity": "bg-gray-800",
      "Socket.io": "bg-gray-700",
      "Flask": "bg-red-600",
      "TensorFlow": "bg-orange-600",
      "Tailwind": "bg-cyan-500",
      "API": "bg-indigo-600",

    };
    return colors[tech] || "bg-gray-500";
  };

  return (
    <div
      id="projects"
      className="flex justify-center items-center w-full my-20"
    >
      <div className="bg-[#191919] rounded-lg p-6 w-full max-w-7xl mx-auto">
        {/* TItlte and filter */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
          <h2 className="text-2xl font-semibold text-white">Projects</h2>
          
          {/* Filter dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-gray-400 text-sm">Filter by:</span>
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="bg-[#1b1b1b] text-white px-3 py-2 rounded-lg border border-gray-600 focus:border-blue-400 focus:outline-none text-sm"
            >
              <option value="All">All ({projects.length})</option>
              {allTechnologies.map(tech => {
                const count = projects.filter(p => p.technologies.includes(tech)).length;
                return (
                  <option key={tech} value={tech}>
                    {tech} ({count})
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        {/* Results count */}
        <div className="mb-4">
          <span className="text-gray-400 text-sm">
            Showing {filteredProjects.length} of {projects.length} projects
            {selectedFilter !== "All" && ` filtered by ${selectedFilter}`}
          </span>
        </div>

        {/* Projects grid */}
        <div className="max-h-96 overflow-y-auto pr-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-[#1b1b1b] rounded-lg p-4 hover:bg-[#252525] transition-colors cursor-pointer"
              >
                <h3 className="text-lg font-medium text-white mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-400 text-sm mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-2 py-1 ${getTechColor(tech)} text-white text-xs rounded`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="text-blue-400 hover:text-blue-300 text-sm"
                >
                  View Project →
                </a>
              </div>
            ))}
          </div>
          
          {/* No results message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-400">
                No projects found using {selectedFilter}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;