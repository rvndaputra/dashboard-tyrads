"use client";
import Link from "next/link";

import { LogOut, MessagesSquare } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import useSidebarEvent from "./usecase/use-sidebar-event";

const Sidebar = () => {
  const { menus, handleMenuClick } = useSidebarEvent();

  return (
    <div className="w-20 bg-white p-6 shadow-sm">
      <div className="sticky top-6 flex flex-col items-center">
        <div className="text-2xl font-bold">S.</div>
        <Button
          variant="secondary"
          size="icon"
          className="mt-8 mb-16 bg-orange-200 rounded-full"
        >
          <MessagesSquare color="#000000" />
        </Button>
        <div className="flex flex-col gap-4 rounded-full bg-gray-100 p-1">
          {menus.map((menu) => {
            return (
              <Link key={menu.id} href={menu.path}>
                <Button
                  variant="secondary"
                  size="icon"
                  className={cn(
                    "rounded-full",
                    menu.isActive &&
                      "bg-indigo-500 text-white hover:bg-indigo-400"
                  )}
                  onClick={() => handleMenuClick(menu.id)}
                >
                  {menu.icon}
                </Button>
              </Link>
            );
          })}
        </div>
        <div className="fixed bottom-5">
          <Avatar className="relative top-2">
            <AvatarImage
              src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairDreads&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=ShirtVNeck&clotheColor=PastelRed&eyeType=Surprised&eyebrowType=DefaultNatural&mouthType=Sad&skinColor=Black"
              alt="ava"
            />
            <AvatarFallback>Y</AvatarFallback>
          </Avatar>
          <Button variant="secondary" size="icon" className="rounded-full">
            <LogOut color="#000000" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
