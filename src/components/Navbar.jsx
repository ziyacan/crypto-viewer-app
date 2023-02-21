import { navLinks } from "../constants/layout";
import { Link } from "react-router-dom";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <nav className="navbar flex w-full content-center items-center align-middle py-4 border-b justify-between">
      <div className="md:flex w-full items-center justify-between">
        <Link className="text-2xl font-bold cursor-pointer" to={"/"}>
          COIN MARKET
        </Link>
        <div className="gap-12 md:pl-16 flex justify-between items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              className="text-sm font-medium"
              to={link.path}
            >
              {link.name}
            </Link>
          ))}
          <div>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
