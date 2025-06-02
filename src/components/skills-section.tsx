"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Palette, Database, Smartphone, Globe, Zap } from "lucide-react";
const skills = [{
  icon: Code,
  title: "Frontend Development",
  description: "React, Next.js, TypeScript, Tailwind CSS",
  color: "gradient-bg"
}, {
  icon: Database,
  title: "Backend Development",
  description: "Node.js, Python, PostgreSQL, MongoDB",
  color: "gradient-secondary-bg"
}, {
  icon: Palette,
  title: "UI/UX Design",
  description: "Figma, Adobe XD, Design Systems",
  color: "gradient-accent-bg"
}, {
  icon: Smartphone,
  title: "Mobile Development",
  description: "React Native, Flutter, iOS, Android",
  color: "gradient-bg"
}, {
  icon: Globe,
  title: "Web Technologies",
  description: "AWS, Docker, CI/CD, Web Performance",
  color: "gradient-secondary-bg"
}, {
  icon: Zap,
  title: "Optimization",
  description: "SEO, Performance, Accessibility",
  color: "gradient-accent-bg"
}];
export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  return <section className="py-20 px-6 bg-muted/30" ref={ref} data-unique-id="08746261-6e5e-4b97-a2fb-eb9645235e4a" data-file-name="components/skills-section.tsx">
      <div className="container mx-auto max-w-6xl" data-unique-id="29981ebd-f2e3-4b04-90fb-17c48af7d8f7" data-file-name="components/skills-section.tsx">
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
      }} className="text-center mb-16" data-unique-id="4efd2bcf-7bf4-4e37-97f4-3aceadd320b8" data-file-name="components/skills-section.tsx">
          <h2 className="text-4xl font-bold mb-6" data-unique-id="72c65fec-42f2-4549-9b1d-eed48d629efc" data-file-name="components/skills-section.tsx"><span className="editable-text" data-unique-id="8218ce05-4e67-438b-9213-dc812addb981" data-file-name="components/skills-section.tsx">
            Minhas </span><span className="gradient-text" data-unique-id="9b79895f-affc-41e0-b6c7-8febaf616839" data-file-name="components/skills-section.tsx"><span className="editable-text" data-unique-id="4baf1478-bd2b-4ae4-9b0a-4bf78b916041" data-file-name="components/skills-section.tsx">Habilidades</span></span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-unique-id="1c04c838-2fd9-407b-ad02-9f8dbe31fd54" data-file-name="components/skills-section.tsx"><span className="editable-text" data-unique-id="245d027e-c4f9-409b-babf-7638d60d1d70" data-file-name="components/skills-section.tsx">
            Tecnologias e ferramentas que domino para criar soluções excepcionais
          </span></p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-unique-id="810980c1-f6e0-488f-a9e1-bef1498e7840" data-file-name="components/skills-section.tsx" data-dynamic-text="true">
          {skills.map((skill, index) => <motion.div key={skill.title} initial={{
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
        }} className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 group" whileHover={{
          y: -10,
          scale: 1.02
        }} data-unique-id="5bb9c427-8650-43d6-bb0c-4d996d1f39cc" data-file-name="components/skills-section.tsx">
              <div className={`w-16 h-16 ${skill.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`} data-unique-id="a6432dde-35b1-434e-ab24-dddcc5254d40" data-file-name="components/skills-section.tsx">
                <skill.icon className="text-white" size={32} data-unique-id="37307951-90cb-4b76-9902-2a72880f02de" data-file-name="components/skills-section.tsx" data-dynamic-text="true" />
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-foreground" data-unique-id="438a6ae6-77f5-49f6-8ecd-23378e214fc2" data-file-name="components/skills-section.tsx" data-dynamic-text="true">
                {skill.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed" data-unique-id="c6fe72b2-4f09-4043-ab9f-c87a3f3ad003" data-file-name="components/skills-section.tsx" data-dynamic-text="true">
                {skill.description}
              </p>
            </motion.div>)}
        </div>
      </div>
    </section>;
}