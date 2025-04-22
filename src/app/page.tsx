import TabletMap from "@/components/TabletMap";

const HomePage: React.FC = () => {
  return (
    <main className="max-w-7xl mx-auto mt-10 flex flex-col items-center">
      <h1 className="text-4xl font-hauora font-medium mb-4">
        IPad Viewport size Map Animation
      </h1>
      <section className="p-2 bg-white rounded-lg">
        <TabletMap />
      </section>
    </main>
  );
};

export default HomePage;
