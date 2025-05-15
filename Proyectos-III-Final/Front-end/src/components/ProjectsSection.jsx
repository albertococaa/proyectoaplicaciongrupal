"use client"
import { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion, useInView } from 'framer-motion';

const ProjectsSection = ({ communities }) => {
  const [tags, setTags] = useState(new Set(["All"]));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (tagName) => {
    const updatedTags = new Set(tags);
    if (tagName === "All" && tags.has("All")) {
      return;
    }
    if (tagName === "All" && Array.from(tags).length === 0) {
      updatedTags.add("All");
    } else {
      if (tagName === "All") {
        updatedTags.clear();
        updatedTags.add("All");
      } else {
        if (updatedTags.has(tagName)) {
          updatedTags.delete(tagName);
        } else {
          updatedTags.add(tagName);
        }
        updatedTags.delete("All");
      }
    }
    if (updatedTags.size === 0) {
      updatedTags.add("All");
    }
    setTags(updatedTags);
  };

  const filteredProjects = communities.filter((project) =>
    Array.from(tags).some(tag => project.tag.includes(tag))
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <>
      <div className="flex flex-wrap">
        <h2 className='text-left text-xl font-bold text-black mt-4'>
          FILTRAR COMUNIDADES POR:
        </h2>
        <div className='text-white flex flex-wrap justify-start items-center gap-2 pl-4 py-2 pb-6'>
          <ProjectTag 
            onClick={handleTagChange}
            name="All" 
            isSelected={tags.has("All")} 
          />
          <ProjectTag 
            onClick={handleTagChange}
            name="Grados" 
            isSelected={tags.has("Grados")} 
          />
          <ProjectTag 
            onClick={handleTagChange}
            name="Ciclos" 
            isSelected={tags.has("Ciclos")} 
          />
          <ProjectTag 
            onClick={handleTagChange}
            name="Clubes" 
            isSelected={tags.has("Clubes")} 
          />
          <ProjectTag 
            onClick={handleTagChange}
            name="Postgrados" 
            isSelected={tags.has("Postgrados")} 
          />
          <ProjectTag 
            onClick={handleTagChange}
            name="INSO" 
            isSelected={tags.has("INSO")} 
          />        
        </div>
      </div>
      <ul ref={ref} className="grid md:grid-cols-4 gap-8 md:gap-12 mt-4">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.imgUrl}
            id={project.id}
          />
        ))} 
      </ul>
    </>
  );
}

export default ProjectsSection;
