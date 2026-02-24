import { motion } from 'framer-motion';

interface ComponentTabsProps {
  components: string[];
  activeIndex: number;
  onTabChange: (index: number) => void;
}

export const ComponentTabs = ({ components, activeIndex, onTabChange }: ComponentTabsProps) => {
  return (
    <div className="flex flex-wrap gap-2 mb-8 p-1 bg-gray-100 rounded-xl">
      {components.map((component, index) => (
        <button
          key={component}
          onClick={() => onTabChange(index)}
          className="relative px-6 py-3 text-sm font-medium transition-colors duration-200 rounded-lg"
        >
          {activeIndex === index && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-white rounded-lg shadow-md"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span
            className={`relative z-10 ${
              activeIndex === index
                ? 'hover:text-gray-800'
                : 'text-gray-600 hover:text-gray-800'
            }`}
            style={activeIndex === index ? { color: '#005055' } : {}}
          >
            {component}
          </span>
        </button>
      ))}
    </div>
  );
};
