import React from "react";
import Container from "../ui/Container";
import Link from "next/link";
import Button from "../ui/Button/Button";
import { MdOutlinePhone } from "react-icons/md";

const Header = () => {
  return (
    <header className="py-3.5 bg-gradient">
      <Container>
        <div className="fx-between">
          <Link href="/">
            <h1 className="text-xl lg:text-3xl font-medium">Eternal AI</h1>
          </Link>
          {/* BTN */}
          <Button className={"bg-secondary"}>
            <MdOutlinePhone />
            <span>Book a dermatologist</span>
          </Button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
