import { personalInfo } from "@/lib/data";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="border-t border-purple-500/10 py-6 bg-gradient-to-b from-background to-muted/20 backdrop-blur-sm">
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="text-center md:text-left text-sm text-muted-foreground space-y-1"
            whileHover={{ scale: 1.01 }}
          >
            <p className="font-semibold text-purple-500">
              🔎 ¿Buscás una profesional en BI y Análisis de Datos?
            </p>
            <p>
              <strong>¡Hola!</strong> Gracias por visitar mi website. Estoy disponible para colaborar en proyectos relacionados con Business Intelligence, Análisis de Datos y más. Si estás buscando a alguien con experiencia para sumar valor a tu equipo o proyecto, no dudes en{" "}
              <a
                href="mailto:molinalaura.bi@gmail.com"
                className="text-purple-500 underline"
              >
                contactarme aquí
              </a>.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-sm text-muted-foreground text-center md:text-left"
            whileHover={{ scale: 1.01 }}
          >
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved. ✨
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}
