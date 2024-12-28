import { LogOut } from "lucide-react";
import Switch from "./Switch";

const Nav = () => {
  return (
    <nav className="flex items-center justify-end gap-3 bg-primary px-4 py-2 border-b-2 border-border">
      <div className="flex items-center gap-2">
        <Switch />
      </div>
      <span className="h-5 w-[0.05rem] bg-border"></span>
      <button className="rounded-full p-2 hover:bg-gray-800">
        <LogOut className="h-5 w-5 text-white" />
      </button>
    </nav>
  );
};

export default Nav;
