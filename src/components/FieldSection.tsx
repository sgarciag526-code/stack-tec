import { motion } from 'framer-motion';
import { Campo } from '../data/techStack';
import { TechCard } from './TechCard';

interface FieldSectionProps {
  field: Campo;
  index: number;
}

export const FieldSection = ({ field, index }: FieldSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="mb-8"
    >
      <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <div
          className="w-1 h-6 rounded-full"
          style={{ backgroundColor: '#005055', backgroundImage: 'linear-gradient(180deg, #005055 0%, #004449 100%)' }}
        ></div>
        {field.nombre}
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {field.tecnologias.map((tech, techIndex) => (
          <TechCard key={tech.nombre} tech={tech} index={techIndex} />
        ))}
      </div>
    </motion.div>
  );
};
