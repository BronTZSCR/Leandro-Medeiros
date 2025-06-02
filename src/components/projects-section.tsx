"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
const projects = [{
  title: "E-commerce Platform",
  description: "Plataforma completa de e-commerce com painel administrativo e sistema de pagamentos integrado.",
  image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
  tags: ["React", "Node.js", "MongoDB", "Stripe"],
  size: "large",
  gradient: "gradient-bg"
}, {
  title: "Mobile Banking App",
  description: "Aplicativo bancário móvel com design intuitivo e recursos de segurança avançados.",
  image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
  tags: ["React Native", "Firebase", "TypeScript"],
  size: "medium",
  gradient: "gradient-secondary-bg"
}, {
  title: "Dashboard Analytics",
  description: "Dashboard interativo para análise de dados com gráficos dinâmicos e relatórios personalizados.",
  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  tags: ["Vue.js", "D3.js", "Python", "PostgreSQL"],
  size: "medium",
  gradient: "gradient-accent-bg"
}, {
  title: "Social Media Platform",
  description: "Rede social moderna com sistema de posts, stories e chat em tempo real.",
  image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
  tags: ["Next.js", "Socket.io", "Redis", "AWS"],
  size: "large",
  gradient: "gradient-bg"
}, {
  title: "Portfolio Website",
  description: "Site portfolio responsivo com animações e design moderno.",
  image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
  tags: ["React", "Framer Motion", "Tailwind"],
  size: "small",
  gradient: "gradient-secondary-bg"
}, {
  title: "Task Management",
  description: "Aplicação de gerenciamento de tarefas com colaboração em equipe.",
  image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
  tags: ["Angular", "NestJS", "MySQL"],
  size: "small",
  gradient: "gradient-accent-bg"
}];
export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  return <section id="projects" className="py-20 px-6" ref={ref} data-unique-id="617838f1-ea7d-4859-a971-19b510ac488e" data-file-name="components/projects-section.tsx">
      <div className="container mx-auto max-w-7xl" data-unique-id="b1014f74-67be-483b-903a-506561970f3b" data-file-name="components/projects-section.tsx">
        <motion.div initial={{
        opacity: 0,
        y: 50
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {
        opacity: 0,
        y: 50
      }} transition={{
        duration: 0.8
      }} className="text-center mb-16" data-unique-id="c5c2f8b3-09b7-4f96-9d69-a331f7a18f50" data-file-name="components/projects-section.tsx">
          <h2 className="text-4xl font-bold mb-6" data-unique-id="83c0f5d3-0690-41d2-b67c-3e65c884c37e" data-file-name="components/projects-section.tsx"><span className="editable-text" data-unique-id="706623cd-4c8b-444a-bac8-ec385e2e834d" data-file-name="components/projects-section.tsx">
            Meus </span><span className="gradient-text" data-unique-id="c0d76656-063d-434f-8ad7-7f22a812fc29" data-file-name="components/projects-section.tsx"><span className="editable-text" data-unique-id="a4c18000-ffec-4ea0-b986-30aff97afacb" data-file-name="components/projects-section.tsx">Projetos</span></span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-unique-id="bacb2e64-0e4c-4bf4-91c9-4879fa174a9a" data-file-name="components/projects-section.tsx"><span className="editable-text" data-unique-id="5c9d6248-0ef9-4158-b444-e6bb6190c6b3" data-file-name="components/projects-section.tsx">
            Algumas atividades que participei
          </span></p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[300px] gap-6" data-unique-id="c66be200-6edd-4e95-9c4a-4f88e38b356f" data-file-name="components/projects-section.tsx" data-dynamic-text="true">
          {projects.map((project, index) => <motion.div key={project.title} initial={{
          opacity: 0,
          y: 50
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {
          opacity: 0,
          y: 50
        }} transition={{
          duration: 0.8,
          delay: index * 0.1
        }} className={`
                relative group overflow-hidden rounded-2xl shadow-medium hover:shadow-large transition-all duration-300 cursor-pointer
                ${project.size === 'large' ? 'md:col-span-2 lg:row-span-2' : ''}
                ${project.size === 'medium' ? 'lg:col-span-1 lg:row-span-2' : ''}
                ${project.size === 'small' ? 'lg:col-span-1 lg:row-span-1' : ''}
              `} whileHover={{
          y: -5
        }} data-unique-id="7b919fc5-60ff-4fa6-8868-65f0f19dc02c" data-file-name="components/projects-section.tsx">
              <div className="absolute inset-0" data-unique-id="7753a1e4-48dd-44cd-87c8-473015677f99" data-file-name="components/projects-section.tsx">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-unique-id="3bb95247-b3a7-4d86-8eac-eac4ce21638a" data-file-name="components/projects-section.tsx" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" data-unique-id="466f5302-a9c7-46c4-820f-7d71cd4d7789" data-file-name="components/projects-section.tsx"></div>
              </div>

              <div className="absolute inset-0 p-6 flex flex-col justify-end" data-unique-id="5d3ac3a5-dd8c-414e-a946-9e647b5ed0d5" data-file-name="components/projects-section.tsx">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300" data-unique-id="fe88d846-a434-469f-aacf-83b8dd8d39f9" data-file-name="components/projects-section.tsx">
                  <h3 className="text-xl font-semibold text-white mb-2" data-unique-id="52a20908-fe04-415a-90dc-20b5a23b49fe" data-file-name="components/projects-section.tsx" data-dynamic-text="true">
                    {project.title}
                  </h3>
                  <p className="text-gray-200 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-unique-id="5a295520-3e43-4ae7-83aa-1032f2a4fd16" data-file-name="components/projects-section.tsx" data-dynamic-text="true">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4" data-unique-id="189e17b8-e14d-41c4-aac4-011ea2bfe968" data-file-name="components/projects-section.tsx" data-dynamic-text="true">
                    {project.tags.map(tag => <span key={tag} className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full border border-white/30" data-unique-id="e15cac0f-b654-496f-918a-4556f2828110" data-file-name="components/projects-section.tsx" data-dynamic-text="true">
                        {tag}
                      </span>)}
                  </div>

                  <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-unique-id="032406d1-9f67-42b6-ae5f-ae456c71f4d1" data-file-name="components/projects-section.tsx">
                    <motion.button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors" whileHover={{
                  scale: 1.1
                }} whileTap={{
                  scale: 0.95
                }} data-unique-id="0759f68b-31e6-48ab-acbe-10c5c5155327" data-file-name="components/projects-section.tsx">
                      <Github size={20} data-unique-id="9e12e44f-cbea-4cb6-b022-cb9161446ff0" data-file-name="components/projects-section.tsx" data-dynamic-text="true" />
                    </motion.button>
                    <motion.button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors" whileHover={{
                  scale: 1.1
                }} whileTap={{
                  scale: 0.95
                }} data-unique-id="cc7a9c4b-ac1a-44a0-a922-97afab6d5bfb" data-file-name="components/projects-section.tsx">
                      <ExternalLink size={20} data-unique-id="2c1389e6-e90e-4af7-aa2c-b4aa21a2a49b" data-file-name="components/projects-section.tsx" data-dynamic-text="true" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
}