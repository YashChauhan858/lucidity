import { useEffect, useState } from "react";
import CardContainer from "components/CardContainer";
import Layout from "./Layout";
import { getInventory } from "network";
import { useInventoryStore } from "./store/inventory.store";
import Table from "components/Table/Table";
import { removeDollarSign } from "utils/helper";

function App() {
  const [status, setStatus] = useState<
    "loading" | "error" | "success" | "idle"
  >("idle");

  const update = useInventoryStore((state) => state.update);

  useEffect(() => {
    (async () => {
      setStatus("loading");
      const [data, error] = await getInventory();
      if (error || !data) return setStatus("error");
      update(
        "inventory",
        data.map((e) => ({
          ...e,
          price: removeDollarSign(e.price),
          value: removeDollarSign(e.value),
          isDisabled: false,
        }))
      );
      setStatus("success");
    })();
    return () => {};
  }, []);

  return (
    <Layout>
      <div className="h-full bg-primary px-10 pt-5">
        <h1 className="font-medium text-4xl text-white">Inventory stats</h1>
        <CardContainer />
        <Table status={status} />
      </div>
    </Layout>
  );
}

export default App;
