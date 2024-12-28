import { ReactNode } from "react";
import Nav from "./components/Nav";
import { EditInventoryModal } from "components/EditInventoryModal";
import { useInventoryStore } from "store/inventory.store";

const Layout = ({ children }: { children: ReactNode }) => {
  const editInventoryItem = useInventoryStore(
    (state) => state.editInventoryItem
  );
  return (
    <main className="h-full">
      <Nav />
      {editInventoryItem >= 0 && <EditInventoryModal />}
      {children}
    </main>
  );
};

export default Layout;
