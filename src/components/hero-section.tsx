"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
export function HeroSection() {
  return <section className="min-h-screen flex items-center justify-center relative overflow-hidden" data-unique-id="e30d20af-ec79-47e4-840a-4e78d640ec66" data-file-name="components/hero-section.tsx" data-dynamic-text="true">
      {/* Animated background gradient */}
      <div className="absolute inset-0 gradient-bg opacity-5" data-unique-id="5cc743ab-e55b-4325-82cd-c41b15a387ff" data-file-name="components/hero-section.tsx"></div>
      
      {/* Floating geometric shapes */}
      <motion.div className="absolute top-20 left-20 w-32 h-32 rounded-full gradient-accent-bg opacity-10" animate={{
      y: [0, -20, 0],
      rotate: [0, 180, 360]
    }} transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut"
    }} data-unique-id="ef2523f7-6edb-459a-a73f-8faa7b21e98e" data-file-name="components/hero-section.tsx" />
      
      <motion.div className="absolute bottom-20 right-20 w-24 h-24 rounded-lg gradient-secondary-bg opacity-10" animate={{
      y: [0, 20, 0],
      rotate: [0, -180, -360]
    }} transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }} data-unique-id="72de53e8-c70b-4b39-8ae5-ced4c4ba7e4a" data-file-name="components/hero-section.tsx" />

      <div className="container mx-auto px-6 text-center z-10" data-unique-id="55f37bd2-d1d7-4776-8abb-89e7602991aa" data-file-name="components/hero-section.tsx">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} data-unique-id="f774ffa7-e380-4003-96ed-4f704d458e37" data-file-name="components/hero-section.tsx">
          <motion.h1 className="text-6xl font-bold mb-6" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.2,
          duration: 0.8
        }} data-unique-id="074b95c9-f80b-4d92-9532-a947b944c4e5" data-file-name="components/hero-section.tsx"><span className="editable-text" data-unique-id="26b925a4-c20d-4114-b8f3-9b7a4a6369bd" data-file-name="components/hero-section.tsx">
            Olá, eu sou</span>{" "}
            <span className="gradient-text" data-unique-id="a3b45656-951a-4491-b61d-9e7c3f9ede59" data-file-name="components/hero-section.tsx"><span className="editable-text" data-unique-id="d547715a-849d-4cfd-97f8-28af61b6a392" data-file-name="components/hero-section.tsx">Leandro Medeiros</span></span>
          </motion.h1>
          
          <motion.p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto font-medium" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.4,
          duration: 0.8
        }} data-unique-id="0c6691ff-99bd-44cd-a57f-dd4d892b189d" data-file-name="components/hero-section.tsx"><span className="editable-text" data-unique-id="f400247a-8143-48cb-8695-9ac25d78f62e" data-file-name="components/hero-section.tsx">
            Estudante de Agronomia pela UFERSA especializando-se em Nutrição de Plantas e Fertilidade do Solo. E cusro tecnico em zootecnia pelo SENAR.

          </span></motion.p>
        </motion.div>

        <motion.div className="flex justify-center gap-6 mb-12" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.6,
        duration: 0.8
      }} data-unique-id="97e0fb62-de2f-43ba-bdc0-60be30bbe335" data-file-name="components/hero-section.tsx">
          <motion.a href="#contact" className="px-8 py-4 gradient-bg text-white rounded-xl font-semibold shadow-medium hover:shadow-large transition-all duration-300" whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }} data-unique-id="d169981d-3b04-4d23-b0eb-1828b0e684be" data-file-name="components/hero-section.tsx"><span className="editable-text" data-unique-id="4f9cce47-c72b-492c-be52-5726b6d1bb30" data-file-name="components/hero-section.tsx">
            Entre em Contato
          </span></motion.a>
          
          <motion.a href="#projects" className="px-8 py-4 bg-white text-primary border-2 border-primary rounded-xl font-semibold shadow-soft hover:bg-primary hover:text-white transition-all duration-300" whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }} data-unique-id="f31c6c4d-925a-464a-aee2-b16a8ab415b3" data-file-name="components/hero-section.tsx"><span className="editable-text" data-unique-id="67bf80b2-427e-4643-bce0-d25d2592d463" data-file-name="components/hero-section.tsx">
            Ver Projetos
          </span></motion.a>
        </motion.div>

        <motion.div className="flex justify-center gap-6" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 0.8,
        duration: 0.8
      }} data-unique-id="a282b4bf-06e4-4fad-9c16-2f27b1fb8e3d" data-file-name="components/hero-section.tsx">
          <motion.a href="https://github.com/BronTZSCR" target="_blank" className="p-3 bg-white rounded-full shadow-soft hover:shadow-medium transition-all duration-300 text-primary" whileHover={{
          scale: 1.1,
          y: -2
        }} data-unique-id="522e5dcf-5fa5-414f-9fcd-67590f41fbe8" data-file-name="components/hero-section.tsx">
            <Github size={24} />
          </motion.a>
          
          <motion.a href="https://www.linkedin.com/in/leandro-medeiros-192a26313/" target="_blank" className="p-3 bg-white rounded-full shadow-soft hover:shadow-medium transition-all duration-300 text-primary" whileHover={{
          scale: 1.1,
          y: -2
        }} data-unique-id="0b829255-a6e4-4022-bf08-39d4bc4420a0" data-file-name="components/hero-section.tsx">
            <Linkedin size={24} />
          </motion.a>
          
          <motion.a href="mailto:medeirosleandro075@gmail.com" className="p-3 bg-white rounded-full shadow-soft hover:shadow-medium transition-all duration-300 text-primary" whileHover={{
          scale: 1.1,
          y: -2
        }} data-unique-id="373bfd37-d279-4a07-bd40-1912315bf7b0" data-file-name="components/hero-section.tsx">
            <Mail size={24} />
          </motion.a>
        </motion.div>

        <motion.div className="absolute bottom-8 left-1/2 transform -translate-x-1/2" initial={{
        opacity: 0
      }} animate={{
        opacity: 1,
        y: [0, 10, 0]
      }} transition={{
        opacity: {
          delay: 1,
          duration: 0.5
        },
        y: {
          duration: 2,
          repeat: Infinity
        }
      }} data-unique-id="1c6517f0-9e82-4409-a8a2-8394b6749c6b" data-file-name="components/hero-section.tsx">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors" data-unique-id="f68db780-a8bc-4692-ac7b-6d72877e41ab" data-file-name="components/hero-section.tsx">
            <ArrowDown size={32} />
          </a>
        </motion.div>
      </div>
    </section>;
}