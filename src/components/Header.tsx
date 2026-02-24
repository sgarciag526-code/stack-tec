export const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40 backdrop-blur-sm bg-opacity-90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-4">
            <img
              src="/Logo_grupo_exito_0.png"
              alt="Grupo Éxito"
              className="h-16 object-contain"
            />
            <div className="hidden sm:block border-l border-gray-300 pl-4">
              <h1 className="text-xl font-bold" style={{ color: '#005055' }}>
                Stack Tecnológico
              </h1>
              <p className="text-xs text-gray-500">
                Nuestras herramientas y tecnologías
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
