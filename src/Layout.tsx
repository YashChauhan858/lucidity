import { ReactNode } from "react";
import Nav from "./components/Nav";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="h-full">
      <Nav />
      {children}
    </main>
  );
};

export default Layout;
