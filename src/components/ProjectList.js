
import React from "react";
import ProjectItem from "./ProjectItem"; // Import your ProjectItem component

function ProjectList({ projects }) {
  return (
    <div>
      <h1>Project List</h1>
      {projects.map((project) => (
        <ProjectItem
          key={project.id}
          name={project.name}
          about={project.about}
          technologies={project.technologies}
        />
      ))}
    </div>
  );
}

export default ProjectList;
