import { useEffect } from "react";
import CardContainer from "components/CardContainer";
import Layout from "./Layout";
import { getInventory } from "network";
import { useInventoryStore } from "./store/inventory.store";

function App() {
  const update = useInventoryStore((state) => state.update);

  useEffect(() => {
    (async () => {
      const [data, error] = await getInventory();
      if (error || !data) return;
      update("inventory", data);
    })();
    return () => {};
  }, []);

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
