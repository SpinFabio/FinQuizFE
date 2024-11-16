import React from 'react';

interface MobileLayoutProps {
  // Aggiungi prop qui se necessario
}

const MobileLayout: React.FC<MobileLayoutProps> = () => {
  return (
    <div className="w-screen h-screen">
      <div className="bg-primary w-full h-4 fixed top-0 z-50"></div>

      <div className="pt-20 pb-20 px-4">
        <h2 className="text-xl font-bold mb-4">Contenuto scrollabile</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 50 }).map((_, i) => (
            <div key={i} className="bg-gray-200 p-4 rounded shadow">
              <p className="text-center">Elemento {i + 1}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-red-500 w-full h-6 fixed bottom-0 z-50"></div>
    </div>
  );
};

export default MobileLayout;
