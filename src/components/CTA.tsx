import { motion } from "framer-motion";

export default function CTA() {
  return (
    <motion.div
      className="mt-16 px-6 py-12 bg-gradient-to-r from-purple-500/20 to-purple-500/10 rounded-xl text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h3 className="text-3xl font-semibold text-purple-700 mb-4 leading-tight">
        🚀 ¡Lista para transformar tu proyecto con datos!
      </h3>
      <p className="text-base text-muted-foreground mb-8 leading-relaxed max-w-lg mx-auto">
        Soy una profesional en Business Intelligence y Análisis de Datos con experiencia en herramientas como Power BI, SQL y Python. Mi enfoque analítico y mi capacidad para aprender rápidamente me permiten adaptarme y aportar valor en proyectos de datos.

        Estoy comprometida en optimizar procesos, ayudar en la toma de decisiones estratégicas y generar insights valiosos para impulsar el crecimiento de los proyectos.
        <br />
        <br />
        Conversemos sobre cómo puedo aportar al éxito de tu equipo y llevar tu proyecto al siguiente nivel!
      </p>
      <a
        href="mailto:molinalaura.bi@gmail.com"
        className="bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-all ease-in-out duration-300"
      >
        ¡Contáctame ahora!
      </a>
    </motion.div>
  );
}
