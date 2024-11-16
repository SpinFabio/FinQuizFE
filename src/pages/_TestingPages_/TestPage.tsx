import MobileLayout from "../../components/layouts/MobileLayout";

export const dummyContent = (
  <div className="px-4 pb-20 pt-20">
    <h2 className="text-xl font-bold mb-4">Contenuto scrollabile</h2>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 50 }).map((_, i) => (
        <div key={i} className="rounded bg-gray-200 p-4 shadow">
          <p className="text-center">Elemento {i + 1}</p>
        </div>
      ))}

    </div>
  </div>
);

const TestPage: React.FC = () => {
  return (
    <>
      <MobileLayout />
    </>
  );
};

export default TestPage;
