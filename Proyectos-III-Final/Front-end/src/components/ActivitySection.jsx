"use client"
import {React, useState, useRef} from 'react'
import ActivityCard from './ActivityCard'
import ProjectTag from './ProjectTag'
import { motion, useInView } from 'framer-motion'

import  projectsData  from './activities'


const ActivitySection = () => {
    const [tags, setTags] = useState(new Set(["All"]));
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (tagName) => {
        const updatedTags = new Set(tags);
        // Si se hace clic en "All" y ya está seleccionado, no hacer nada
        if (tagName === "All" && tags.has("All")) {
            return;
        }
        // Si se hace clic en "All" y no hay nada más seleccionado, seleccionar solo "All"
        if (tagName === "All" && Array.from(tags).length === 0) {
            updatedTags.add("All");
        } else {
            // Si se hace clic en "All" y hay otras etiquetas seleccionadas, deseleccionar todas
            if (tagName === "All") {
                updatedTags.clear();
                updatedTags.add("All");
            } else {
                if (updatedTags.has(tagName)) {
                    updatedTags.delete(tagName); // Si la etiqueta ya está seleccionada, quitarla
                } else {
                    updatedTags.add(tagName); // Si la etiqueta no está seleccionada, agregarla
                }
                // Asegúrate de que "All" no esté seleccionado si se selecciona cualquier otra etiqueta
                updatedTags.delete("All");
            }
        }
        if (updatedTags.size === 0) {
            updatedTags.add("All");
        }
        setTags(updatedTags);
    };
    
    
    const filteredProjects = projectsData.filter((project) =>
        Array.from(tags).some(tag => project.tag.includes(tag)) // Verifica si cada etiqueta seleccionada está incluida en las etiquetas del proyecto
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    return (
        <section>
            <div className='text-white justify-start items-center gap-2 py-6'>
                <h2 className='text-start text-lg font-normal font-Montserrat text-black'>
                    Filtrar actividades por:
                </h2>
                <div className="flex flex-wrap gap-2 mt-8 items-center">
                    <h2 className="text-2xl font-semibold text-black font-Montserrat">
                        ÁMBITO:
                    </h2>
                    <ProjectTag
                        onClick={handleTagChange}
                        name="All"
                        isSelected={tags.has("All")}
                    />
                    <ProjectTag
                        onClick={handleTagChange}
                        name="Diseño digital"
                        isSelected={tags.has("Diseño digital")}
                    />
                    <ProjectTag
                        onClick={handleTagChange}
                        name="Animacion"
                        isSelected={tags.has("Animacion")}
                    />
                    <ProjectTag
                        onClick={handleTagChange}
                        name="Videojuegos"
                        isSelected={tags.has("Videojuegos")}
                    />
                    <ProjectTag
                        onClick={handleTagChange}
                        name="Ingenieria"
                        isSelected={tags.has("Ingenieria")}
                    />
                    <ProjectTag
                        onClick={handleTagChange}
                        name="Realidad Virtual"
                        isSelected={tags.has("Realidad Virtual")}
                    />
                    <ProjectTag
                        onClick={handleTagChange}
                        name="Efectos Visuales"
                        isSelected={tags.has("Efectos Visuales")}
                    />
                    <ProjectTag
                        onClick={handleTagChange}
                        name="Matematicas"
                        isSelected={tags.has("Matematicas")}
                    />
                </div>
                <div className="flex flex-wrap gap-2 items-center mt-4">
                    <h2 className="text-2xl font-semibold text-black font-Montserrat">
                        TÍTULO:
                    </h2>
                    <ProjectTag
                        onClick={handleTagChange}
                        name="Grado"
                        isSelected={tags.has("Grado")}
                    />
                    <ProjectTag
                        onClick={handleTagChange}
                        name="Postgrado"
                        isSelected={tags.has("Postgrado")}
                    />
                    <ProjectTag
                        onClick={handleTagChange}
                        name="Ciclo formativo"
                        isSelected={tags.has("Ciclo formativo")}
                    />
                    <ProjectTag
                        onClick={handleTagChange}
                        name="Otro"
                        isSelected={tags.has("Otro")}
                    />
                    <h2 className="ml-10 text-2xl font-semibold text-black font-Montserrat">
                        CURSO:
                    </h2>
                    <ProjectTag
                        onClick={handleTagChange}
                        name="Primero"
                        isSelected={tags.has("Primero")}
                    />
                    <ProjectTag
                        onClick={handleTagChange}
                        name="Segundo"
                        isSelected={tags.has("Segundo")}
                    />
                    <ProjectTag
                        onClick={handleTagChange}
                        name="Tercero"
                        isSelected={tags.has("Tercero")}
                    />
                    <ProjectTag
                        onClick={handleTagChange}
                        name="Cuarto"
                        isSelected={tags.has("Cuarto")}
                    />
                </div>
                <div className="flex flex-wrap gap-2 items-center mt-4">
                    <h2 className="text-2xl font-semibold text-black font-Montserrat">
                        GRUPO:
                    </h2>
                    <ProjectTag
                        onClick={handleTagChange}
                        name="A"
                        isSelected={tags.has("A")}
                    />
                    <ProjectTag
                        onClick={handleTagChange}
                        name="B"
                        isSelected={tags.has("B")}
                    />
                    
                </div>
                
            </div>
            <h2 className='text-start text-2xl font-semibold text-[#0065EF] mb-4'>
                Proximas Actividades
            </h2>
            <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
                {filteredProjects.map((project, index) => (
                    <ActivityCard
                        id={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.imgUrl}
                        tag={project.tag}
                    />
                ))}
            </ul>
        </section>
    );
};

export default ActivitySection;