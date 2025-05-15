"use client"
import {React, useState, useRef} from 'react'
import ForumCard from './ForumCard'
import ProjectTag from './ProjectTag'
import { motion, useInView } from 'framer-motion'

const forumData = [
    {
        id: 1,
        title: "Foro de Diseño Digital",
        description: "Un foro comunitario para diseñadores digitales para discutir tendencias, técnicas y herramientas.",
        imgUrl: "/1.png",
        tag: ["All", "Diseño"],
    },
    {
        id: 2,
        title: "Discusión de UI/UX",
        description: "Participa en conversaciones sobre principios de diseño de interfaz de usuario y experiencia de usuario.",
        imgUrl: "/2.png",
        tag: ["All", "UI/UX", "Diseño Web"],
    },
    {
        id: 3,
        title: "Rincón de Diseño Gráfico",
        description: "Conéctate con otros diseñadores gráficos y comparte consejos, recursos e inspiración.",
        imgUrl: "/3.png",
        tag: ["All", "Diseño Gráfico"],
    },
    {
        id: 4,
        title: "Preguntas y Respuestas de Diseño Web",
        description: "Haz preguntas, busca consejos e intercambia conocimientos sobre las mejores prácticas de diseño web.",
        imgUrl: "/4.png",
        tag: ["All", "Diseño Web"],
    },
    {
        id: 5,
        title: "Centro de Motion Graphics",
        description: "Explora el mundo de los motion graphics, técnicas de animación y efectos visuales.",
        imgUrl: "/5.png",
        tag: ["All", "Motion Graphics"],
    },
    {
        id: 6,
        title: "Galería de Arte Digital",
        description: "Muestra tu arte digital, recibe comentarios y descubre nuevos talentos.",
        imgUrl: "/6.png",
        tag: ["All", "Arte Digital"],
    },
];


const ForumSection = () => {
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
    
    
    const filteredProjects = forumData.filter((project) =>
        Array.from(tags).some(tag => project.tag.includes(tag)) // Verifica si cada etiqueta seleccionada está incluida en las etiquetas del proyecto
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    return (
        <section>
            <div className='text-white flex flex-wrap justify-start items-center gap-2 py-6'>
                <h2 className='ml-10 text-start text-2xl font-bold text-black'>
                    Filtrar comunidades por:
                </h2>
                <ProjectTag
                    onClick={handleTagChange}
                    name="All"
                    isSelected={tags.has("All")}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Design"
                    isSelected={tags.has("Design")}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="UI/UX"
                    isSelected={tags.has("UI/UX")}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Graphic Design"
                    isSelected={tags.has("Graphic Design")}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Web Design"
                    isSelected={tags.has("Web Design")}
                />
                
            </div>
            <h2 className='text-start text-3xl font-bold text-white mb-4'>
                Proximas Actividades
            </h2>
            <ul ref={ref} className="ml-10 grid md:grid-cols-3 gap-8 md:gap-12">
                {filteredProjects.map((project, index) => (
                    <motion.li
                        key={index}
                        variants={cardVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{ duration: 0.4, delay: 0.3 }}
                    >
                        <ForumCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            imgUrl={project.imgUrl}
                            id={project.id}
                        />
                    </motion.li>
                ))}
            </ul>
        </section>
    );
};

export default ForumSection;