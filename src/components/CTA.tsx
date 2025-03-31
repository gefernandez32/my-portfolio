import { motion } from "framer-motion";

export default function CTA() {
  return (
    <motion.div
      className="mt-12 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h3 className="text-2xl font-semibold text-purple-500 mb-4">
        🚀 ¡Listo para llevar tu proyecto al siguiente nivel?
      </h3>
      <p className="text-sm text-muted-foreground mb-6">
        Si estás buscando a alguien con experiencia en BI, Análisis de Datos, y más, ¡estoy aquí para ayudarte! Colaboremos en tu próximo desafío.
      </p>
      <a
        href="mailto:molinalaura.bi@gmail.com"
        className="bg-purple-500 text-white px-6 py-3 rounded-md text-sm font-semibold hover:bg-purple-600 transition-all"
      >
        ¡Contáctame ahora!
      </a>
    </motion.div>
  );
}
