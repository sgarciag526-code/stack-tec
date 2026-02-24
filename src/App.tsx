import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from './components/Header';
import { ComponentTabs } from './components/ComponentTabs';
import { SearchBar } from './components/SearchBar';
import { FieldSection } from './components/FieldSection';
import { techStackData, Componente } from './data/techStack';
import { AlertCircle } from 'lucide-react';

function App() {
  const [activeComponentIndex, setActiveComponentIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const componentNames = techStackData.componentes.map((c) => c.nombre);
  const isSearching = searchQuery.trim().length > 0;

  const filteredData = useMemo(() => {
    if (!isSearching) {
      return [techStackData.componentes[activeComponentIndex]];
    }

    const query = searchQuery.toLowerCase();
    const results: Componente[] = [];

    techStackData.componentes.forEach((componente) => {
      const filteredCampos = componente.campos
        .map((field) => ({
          ...field,
          tecnologias: field.tecnologias.filter(
            (tech) =>
              tech.nombre.toLowerCase().includes(query) ||
              tech.descripcion.toLowerCase().includes(query)
          ),
        }))
        .filter((field) => field.tecnologias.length > 0);

      if (filteredCampos.length > 0) {
        results.push({
          ...componente,
          campos: filteredCampos,
        });
      }
    });

    return results;
  }, [isSearching, searchQuery, activeComponentIndex]);

  const totalResults = useMemo(() => {
    return filteredData.reduce((acc, comp) => {
      return (
        acc +
        comp.campos.reduce(
          (fieldAcc, field) => fieldAcc + field.tecnologias.length,
          0
        )
      );
    }, 0);
  }, [filteredData]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <SearchBar value={searchQuery} onChange={setSearchQuery} />

        {!isSearching && (
          <ComponentTabs
            components={componentNames}
            activeIndex={activeComponentIndex}
            onTabChange={setActiveComponentIndex}
          />
        )}

        {isSearching && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 text-sm text-gray-600"
          >
            {totalResults}{' '}
            {totalResults === 1
              ? 'resultado encontrado'
              : 'resultados encontrados'}
          </motion.div>
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={isSearching ? 'search' : activeComponentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {totalResults > 0 ? (
              filteredData.map((componente, compIndex) => (
                <div key={componente.nombre}>
                  {isSearching && (
                    <h2
                      className="text-2xl font-bold mb-6 mt-8 first:mt-0"
                      style={{ color: '#005055' }}
                    >
                      {componente.nombre}
                    </h2>
                  )}
                  {componente.campos.map((field, fieldIndex) => (
                    <FieldSection
                      key={field.nombre}
                      field={field}
                      index={fieldIndex}
                    />
                  ))}
                </div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-16 px-4"
              >
                <div className="p-4 bg-gray-200 rounded-full mb-4">
                  <AlertCircle className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-700 mb-2">
                  No se encontraron resultados
                </h3>
                <p className="text-sm text-gray-500 text-center max-w-md">
                  Intenta con otros términos de búsqueda o explora otras
                  categorías
                </p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="border-t border-gray-200 mt-16 py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500">
            Stack Tecnológico - {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
