import { motion } from 'framer-motion';
import { useState } from 'react';
import * as Icons from 'lucide-react';
import { Tecnologia } from '../data/techStack';

interface TechCardProps {
  tech: Tecnologia;
  index: number;
}

export const TechCard = ({ tech, index }: TechCardProps) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const IconComponent = Icons[
    tech.icono as keyof typeof Icons
  ] as React.ComponentType<any>;
  const Icon = IconComponent || Icons.Box;

  const handleClick = () => {
    window.open(tech.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="relative flex flex-col items-center"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <motion.button
        whileHover={{ scale: 1.05, y: -4 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleClick}
        className="w-full bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center gap-3 border border-gray-100 cursor-pointer group"
      >
        <div
          className="w-12 h-12 p-2 rounded-lg group-hover:opacity-90 transition-all duration-300 flex items-center justify-center"
          style={{
            backgroundColor: '#005055',
            backgroundImage:
              'linear-gradient(135deg, #005055 0%, #004449 100%)',
          }}
        >
          {tech.logo ? (
            <img
              src={tech.logo}
              alt={tech.nombre}
              className="w-8 h-8 object-contain"
            />
          ) : (
            <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
          )}
        </div>
        <span className="text-sm font-medium text-gray-800 text-center leading-tight">
          {tech.nombre}
        </span>
      </motion.button>

      {showTooltip && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="absolute z-50 left-1/2 -translate-x-1/2 top-full mt-3 w-64 p-3 text-white text-xs rounded-lg shadow-xl border border-gray-300"
          style={{ backgroundColor: '#005055' }}
        >
          <div
            className="absolute bottom-full left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 border-l border-t"
            style={{ backgroundColor: '#005055', borderColor: '#005055' }}
          ></div>
          <p className="leading-relaxed">{tech.descripcion}</p>
        </motion.div>
      )}
    </motion.div>
  );
};
