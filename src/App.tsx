import CardContainer from "./components/CardContainer";
import Layout from "./Layout";

function App() {
  return (
    <Layout>
      <div className="h-full bg-primary px-10 pt-5">
        <h1 className="font-medium text-4xl text-white">Inventory stats</h1>
        <CardContainer />
      </div>
    </Layout>
  );
}

export default App;
