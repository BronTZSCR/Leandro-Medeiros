"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  return <section id="about" className="py-20 px-6" ref={ref} data-unique-id="a54648e3-e81b-45b0-adfc-a62b01ac90e7" data-file-name="components/about-section.tsx">
      <div className="container mx-auto max-w-6xl" data-unique-id="22287e34-38b6-458d-bdc0-e95e65329b9a" data-file-name="components/about-section.tsx">
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
      }} className="text-center mb-16" data-unique-id="f90227b9-bba7-46c2-b48b-b36095c1b3c3" data-file-name="components/about-section.tsx">
          <h2 className="text-4xl font-bold mb-6" data-unique-id="622af12b-eb18-4f1d-8a16-2286cb834112" data-file-name="components/about-section.tsx"><span className="editable-text" data-unique-id="33ac77f3-6f09-4b59-871e-f63d276be9d9" data-file-name="components/about-section.tsx">
            Sobre </span><span className="gradient-text" data-unique-id="f9054f03-a8ab-417b-a845-af85015cacf2" data-file-name="components/about-section.tsx"><span className="editable-text" data-unique-id="f23334b6-f4e8-4baa-8a56-fc9f5b825d64" data-file-name="components/about-section.tsx">Mim</span></span>
          </h2>
          <div className="w-20 h-1 gradient-bg mx-auto rounded-full" data-unique-id="56d5c548-ea94-4077-addd-9fb0e5673544" data-file-name="components/about-section.tsx"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center" data-unique-id="b8e0647f-34fa-42f9-aa41-0e1b5d597a4b" data-file-name="components/about-section.tsx">
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {
          opacity: 0,
          x: -50
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} data-unique-id="04da1876-92af-48e7-901c-a8ba3a6fc3b3" data-file-name="components/about-section.tsx">
            <div className="relative" data-unique-id="be2f977b-4275-4168-9f4f-40a82239e6cf" data-file-name="components/about-section.tsx">
              <div className="absolute -top-4 -left-4 w-full h-full gradient-bg rounded-2xl opacity-20" data-unique-id="f06d2893-ad42-4c0a-9756-951df8bef4db" data-file-name="components/about-section.tsx"></div>
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face" alt="Profile" className="relative rounded-2xl shadow-large w-full max-w-md mx-auto" data-unique-id="82c3cac3-9708-44e0-9e85-ee96131e5c6b" data-file-name="components/about-section.tsx" />
            </div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          x: 50
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {
          opacity: 0,
          x: 50
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }} className="space-y-6" data-unique-id="fcd4c4e2-5f62-4443-96b0-c1989265b3bb" data-file-name="components/about-section.tsx">
            <h3 className="text-2xl font-semibold mb-4" data-unique-id="a48dd157-835e-460d-b3dc-485b995b1af4" data-file-name="components/about-section.tsx"><span className="editable-text" data-unique-id="07971bdc-f16e-4846-b7cf-7a227018b287" data-file-name="components/about-section.tsx">
              Desenvolvedor apaixonado por tecnologia
            </span></h3>
            
            <p className="text-lg text-muted-foreground leading-relaxed" data-unique-id="8649617b-6627-4664-8d7f-98fb710b62e3" data-file-name="components/about-section.tsx"><span className="editable-text" data-unique-id="ef958ad9-f40d-480d-b52f-eddefb938795" data-file-name="components/about-section.tsx">
              Com mais de 5 anos de experiência em desenvolvimento web, sou especializado em criar soluções digitais que combinam funcionalidade e design excepcional.
            </span></p>
            
            <p className="text-lg text-muted-foreground leading-relaxed" data-unique-id="9499179b-6809-42b1-9826-326ca9d66eca" data-file-name="components/about-section.tsx"><span className="editable-text" data-unique-id="5667468c-5030-4ce1-a1a8-6368ed4ed72d" data-file-name="components/about-section.tsx">
              Minha paixão está em transformar ideias complexas em interfaces intuitivas e experiências memoráveis para os usuários.
            </span></p>

            <div className="grid grid-cols-2 gap-6 pt-6" data-unique-id="6228de69-6f4b-40e4-b20b-fdeb60794cdd" data-file-name="components/about-section.tsx">
              <motion.div className="text-center p-6 bg-white rounded-xl shadow-soft" whileHover={{
              scale: 1.05,
              y: -5
            }} transition={{
              duration: 0.3
            }} data-unique-id="bdef9ade-4804-47fa-a4f1-299cf3904127" data-file-name="components/about-section.tsx">
                <div className="text-3xl font-bold gradient-text mb-2" data-unique-id="26208e60-76fa-4003-ba48-ba5ad58ae899" data-file-name="components/about-section.tsx"><span className="editable-text" data-unique-id="df14f42d-b693-4186-abf9-8e529a6529b0" data-file-name="components/about-section.tsx">50+</span></div>
                <div className="text-sm text-muted-foreground font-medium" data-unique-id="a1317186-0798-488b-9f6b-a5c9e22f56ee" data-file-name="components/about-section.tsx"><span className="editable-text" data-unique-id="9134c76f-878b-418d-b731-8eba815bc49d" data-file-name="components/about-section.tsx">Projetos Concluídos</span></div>
              </motion.div>
              
              <motion.div className="text-center p-6 bg-white rounded-xl shadow-soft" whileHover={{
              scale: 1.05,
              y: -5
            }} transition={{
              duration: 0.3
            }} data-unique-id="6ea56be7-7a5e-4d2b-bb1e-a68388f6df63" data-file-name="components/about-section.tsx">
                <div className="text-3xl font-bold gradient-text mb-2" data-unique-id="aac56c3b-a776-4fb5-8cff-fc67e68499e5" data-file-name="components/about-section.tsx"><span className="editable-text" data-unique-id="0c6bc02d-1ab3-4fed-9ec7-1e1f48fc0178" data-file-name="components/about-section.tsx">5+</span></div>
                <div className="text-sm text-muted-foreground font-medium" data-unique-id="e52fafb4-f639-4463-aff3-35748d6f022a" data-file-name="components/about-section.tsx"><span className="editable-text" data-unique-id="b9533ae8-ec90-40d1-8bdf-dda9b6630ef5" data-file-name="components/about-section.tsx">Anos de Experiência</span></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
}