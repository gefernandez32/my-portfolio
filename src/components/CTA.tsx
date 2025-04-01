import { motion } from "framer-motion";

export default function CTA() {
  return (
    <motion.div
      id="contactame"
      className="mt-16 px-6 py-12 bg-gradient-to-r from-purple-500/20 to-purple-500/10 rounded-xl text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h3 className="text-3xl font-semibold text-purple-700 mb-4 leading-tight">
        🚀 Estoy lista para participar en tu proyecto de Datos!
      </h3>
      <p className="text-base text-muted-foreground mb-8 leading-relaxed max-w-lg mx-auto">
        Soy una profesional especializada en Business Intelligence y Análisis de Datos, con experiencia en el uso de herramientas como Power BI, DAX, Excel, SQL y Python.
        <br />
        Mi enfoque analítico, junto con mi capacidad para aprender rápidamente, me permite generar soluciones eficaces y adaptarme a diversos proyectos en el ámbito de los datos.
        <br />
        Estoy comprometida con la optimización de procesos, el apoyo en la toma de decisiones estratégicas y la generación de insights valiosos para impulsar el crecimiento y la competitividad de los proyectos.
        <br />
        <br />
        Estaría encantada de conversar sobre cómo puedo aportar al éxito de su equipo y contribuir al desarrollo de sus iniciativas.
      </p>

      <a
        href="mailto:molinalaura.bi@gmail.com"
        className="bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-all ease-in-out duration-300"
      >
        Contáctame ahora
      </a>
    </motion.div>
  );
}
