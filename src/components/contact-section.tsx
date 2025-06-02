"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return <section id="contact" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50" ref={ref} data-unique-id="a5671f55-07f8-41c2-bc49-fb10a29c2889" data-file-name="components/contact-section.tsx">
      <div className="container mx-auto max-w-6xl" data-unique-id="b883f019-4748-43dc-9e58-6d5095574b03" data-file-name="components/contact-section.tsx">
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
      }} className="text-center mb-16" data-unique-id="bf33a678-cb22-4fdc-a531-be8b5a774ba0" data-file-name="components/contact-section.tsx">
          <h2 className="text-4xl font-bold mb-6" data-unique-id="65d972fc-7737-40d7-9d04-62d6d94ad626" data-file-name="components/contact-section.tsx"><span className="editable-text" data-unique-id="8ae6b93e-2590-4210-ad6e-9899911e05c3" data-file-name="components/contact-section.tsx">
            Entre em </span><span className="gradient-text" data-unique-id="ab8ed705-6e7d-487f-8244-89cbe274aa18" data-file-name="components/contact-section.tsx"><span className="editable-text" data-unique-id="74edc95e-0e61-4836-98bb-b92a8753478e" data-file-name="components/contact-section.tsx">Contato</span></span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-unique-id="28d734ec-1f9e-4c8e-a2b3-261c50f8429d" data-file-name="components/contact-section.tsx"><span className="editable-text" data-unique-id="4dcee468-997c-4b62-a6e2-7a98544a9402" data-file-name="components/contact-section.tsx">
            Estou a disposição para o que precisar!

          </span></p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12" data-unique-id="456781f9-704d-4f7b-a67a-933a98739af5" data-file-name="components/contact-section.tsx">
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
        }} className="space-y-8" data-unique-id="f8b1d730-c2a7-4b82-bc3a-e6d2a3967b8e" data-file-name="components/contact-section.tsx">
            <h3 className="text-2xl font-semibold mb-6" data-unique-id="52f65dbf-e6a9-4434-9d88-440d7ebb96d9" data-file-name="components/contact-section.tsx"><span className="editable-text" data-unique-id="fd872bce-2991-49f0-afb4-48eb46c1f462" data-file-name="components/contact-section.tsx">Informações de Contato</span></h3>
            
            <div className="space-y-6" data-unique-id="5cd88d4b-bdea-408b-8dca-49b6358ea28d" data-file-name="components/contact-section.tsx">
              <motion.div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-soft" whileHover={{
              x: 10,
              scale: 1.02
            }} transition={{
              duration: 0.3
            }} data-unique-id="2a431305-687b-473c-b231-d96b64a683d5" data-file-name="components/contact-section.tsx">
                <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center" data-unique-id="16f21385-6cb0-4a15-8ac5-86c74fdf2548" data-file-name="components/contact-section.tsx">
                  <Mail className="text-white" size={20} />
                </div>
                <div data-unique-id="df060619-db6c-4224-baee-10410f63af9b" data-file-name="components/contact-section.tsx">
                  <h4 className="font-semibold" data-unique-id="fb7f4861-1622-49e7-8e44-bd29bbe4fcf5" data-file-name="components/contact-section.tsx"><span className="editable-text" data-unique-id="aba4605f-9127-4a37-9e9b-db29d6df868f" data-file-name="components/contact-section.tsx">Email</span></h4>
                  <p className="text-muted-foreground" data-unique-id="fbc800bd-370c-4070-9fdc-5ec7011f1567" data-file-name="components/contact-section.tsx"><span className="editable-text" data-unique-id="ce4917e0-0769-464c-9171-0798815a04e8" data-file-name="components/contact-section.tsx">medeirosleandro075@gmail.com</span></p>
                </div>
              </motion.div>

              <motion.div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-soft" whileHover={{
              x: 10,
              scale: 1.02
            }} transition={{
              duration: 0.3
            }} data-unique-id="f27d41b9-9f49-47f9-9d40-fa78ebf083ba" data-file-name="components/contact-section.tsx">
                <div className="w-12 h-12 gradient-secondary-bg rounded-full flex items-center justify-center" data-unique-id="82d0fee1-a32a-4eee-ad55-d75ed021e92c" data-file-name="components/contact-section.tsx">
                  <Phone className="text-white" size={20} />
                </div>
                <div data-unique-id="083dc9ed-7920-43e3-ab15-59712e99a11e" data-file-name="components/contact-section.tsx">
                  <h4 className="font-semibold" data-unique-id="d91f3240-0bcd-44b6-9789-fb98d01f7fbc" data-file-name="components/contact-section.tsx"><span className="editable-text" data-unique-id="44ad7ab9-b051-4b49-8d5a-749fa83339fc" data-file-name="components/contact-section.tsx">Telefone</span></h4>
                  <p className="text-muted-foreground" data-unique-id="7a061f96-3426-409b-af2b-0199894fc07d" data-file-name="components/contact-section.tsx"><span className="editable-text" data-unique-id="9e16b82e-a968-4444-8506-bc2bd130f8b4" data-file-name="components/contact-section.tsx">+55 (84) 9 921843-69</span></p>
                </div>
              </motion.div>

              <motion.div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-soft" whileHover={{
              x: 10,
              scale: 1.02
            }} transition={{
              duration: 0.3
            }} data-unique-id="fbcab6cb-c42d-493d-a92f-4e2516c58725" data-file-name="components/contact-section.tsx">
                <div className="w-12 h-12 gradient-accent-bg rounded-full flex items-center justify-center" data-unique-id="2339a760-bf3b-4e32-8c33-e78f933fc2cd" data-file-name="components/contact-section.tsx">
                  <MapPin className="text-white" size={20} />
                </div>
                <div data-unique-id="c1a488c3-9d62-45db-be01-1c9b5cb31a57" data-file-name="components/contact-section.tsx">
                  <h4 className="font-semibold" data-unique-id="796dd33a-2023-4520-90f5-e1909fa54edd" data-file-name="components/contact-section.tsx"><span className="editable-text" data-unique-id="e79c4e67-085b-4e5b-ba00-f7a788772c14" data-file-name="components/contact-section.tsx">Localização</span></h4>
                  <p className="text-muted-foreground" data-unique-id="f93bff2d-bbd4-4d9f-b3a3-7b4d746a97a7" data-file-name="components/contact-section.tsx"><span className="editable-text" data-unique-id="ba85fc38-777f-4fdc-9749-d4a7479d963a" data-file-name="components/contact-section.tsx">Mossoró-RN, Brasil</span></p>
                </div>
              </motion.div>
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
        }} data-unique-id="35887157-0c4d-4390-84f2-e966415d7ded" data-file-name="components/contact-section.tsx">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-medium space-y-6" data-unique-id="b1c810cc-2723-49b8-8f60-72dbc0a6ccac" data-file-name="components/contact-section.tsx">
              <h3 className="text-2xl font-semibold mb-6" data-unique-id="44490fd8-78df-4869-8858-0f0317820fbe" data-file-name="components/contact-section.tsx"><span className="editable-text" data-unique-id="15caf7a0-a106-4a2f-b96d-6b8b7b52861d" data-file-name="components/contact-section.tsx">Envie uma Mensagem</span></h3>
              
              <div data-unique-id="ec4ec2dc-d2d1-4e8a-bd7d-24906ed801be" data-file-name="components/contact-section.tsx">
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2" data-unique-id="accdb91f-ec38-416f-967a-687e55424e5e" data-file-name="components/contact-section.tsx"><span className="editable-text" data-unique-id="fd6b4542-246b-4e1c-853f-467f39a566a9" data-file-name="components/contact-section.tsx">
                  Nome
                </span></label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200" placeholder="Seu nome completo" required data-unique-id="41b7c14a-2940-46e1-b4d4-52578f73893b" data-file-name="components/contact-section.tsx" />
              </div>

              <div data-unique-id="62f00813-44a3-4eb6-901d-21b570313510" data-file-name="components/contact-section.tsx">
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2" data-unique-id="2a12e436-9a6c-4332-9009-73c313d4f607" data-file-name="components/contact-section.tsx"><span className="editable-text" data-unique-id="2ea91a0a-5e1e-4c12-adac-31f37e7c6e61" data-file-name="components/contact-section.tsx">
                  Email
                </span></label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200" placeholder="seu.email@exemplo.com" required data-unique-id="14f73ac5-21f3-4360-a60d-46165c170f2f" data-file-name="components/contact-section.tsx" />
              </div>

              <div data-unique-id="87642abe-9120-4b94-872f-73f6caa53e73" data-file-name="components/contact-section.tsx">
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2" data-unique-id="90ed3df1-4f6e-4c91-9743-cdc93bb5bfb1" data-file-name="components/contact-section.tsx"><span className="editable-text" data-unique-id="ccd0324a-cf09-4d52-9ad1-820dfc3e69bf" data-file-name="components/contact-section.tsx">
                  Mensagem
                </span></label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none" placeholder="Conte-me sobre seu projeto..." required data-unique-id="4d31cf38-2244-4200-8736-ebca86208fb9" data-file-name="components/contact-section.tsx" />
              </div>

              <motion.button type="submit" className="w-full px-6 py-4 gradient-bg text-white rounded-xl font-semibold shadow-medium hover:shadow-large transition-all duration-300 flex items-center justify-center gap-2" whileHover={{
              scale: 1.02
            }} whileTap={{
              scale: 0.98
            }} data-unique-id="dca66370-e463-4173-a5bc-d61c7c03c8bb" data-file-name="components/contact-section.tsx">
                <Send size={20} /><span className="editable-text" data-unique-id="6cd54010-689c-4fbc-9695-1e7bac76bc2d" data-file-name="components/contact-section.tsx">
                Enviar Mensagem
              </span></motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>;
}