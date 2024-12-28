import { useEffect, useState } from "react";
import CardContainer from "components/CardContainer";
import Layout from "./Layout";
import { getInventory } from "network";
import { useInventoryStore } from "./store/inventory.store";
import Table from "components/Table/Table";
import { removeDollarSign } from "utils/helper";

function App() {
  const [status, setStatus] = useState<{
    status: "loading" | "error" | "success" | "idle";
    statusMsg?: string;
  }>({ status: "idle" });

  const updateInventory = useInventoryStore((state) => state.updateInventory);

  useEffect(() => {
    (async () => {
      setStatus({ status: "loading" });
      const [data, error] = await getInventory();

      if (error || !data)
        return setStatus({
          status: "error",
          statusMsg: error?.message,
        });

      updateInventory(
        data.map((e) => ({
          ...e,
          price: removeDollarSign(e.price),
          value: removeDollarSign(e.value),
          isDisabled: false,
        }))
      );
      setStatus({ status: "success" });
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
