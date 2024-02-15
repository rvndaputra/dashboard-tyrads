import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <div className="flex items-center">
      <div className="flex-1">
        <h2 className="text-3xl font-bold">Hello, Jhon .D</h2>
        <p className="text-muted-foreground">
          View and control your finances here!
        </p>
      </div>
      <Button variant="secondary" size="icon" className="bg-white rounded-full">
        <Search size={18} />
      </Button>
    </div>
  );
};

export default Header;
