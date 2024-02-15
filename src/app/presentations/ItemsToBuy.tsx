"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { ChevronRight, MoreVertical, Plus } from "lucide-react";
import React, { useState } from "react";

const dummyItemsToBuy = [
  {
    id: "1",
    value: "Macbook",
    checked: true,
  },
  { id: "2", value: "Bycicle", checked: false },
  { id: "3", value: "Motorcycle", checked: false },
  { id: "4", value: "Iphone 14 pro max", checked: false },
];

const ItemsToBuy = () => {
  const [data, setData] = useState(dummyItemsToBuy);
  const [newItem, setNewItem] = useState("");

  const handleOnAddItem = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setData((prev) => [
      ...prev,
      { id: newItem, value: newItem, checked: false },
    ]);
    setNewItem("");
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewItem(e.target.value);
  };

  const handleOnChecked = (id: string) => {
    setData((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            checked: !item.checked,
          };
        }
        return item;
      })
    );
  };

  const handleOnDelete = (id: string) => {
    setData(data.filter((x) => x.id !== id));
  };

  return (
    <Card className="flex-1 overflow-hidden">
      <CardHeader>
        <CardTitle>List of items to buy</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-8">
          <div>
            <div className="flex text-3xl font-bold">
              <div contentEditable>02</div>
              <div>:</div>
              <div contentEditable>00</div>
            </div>
            <div className="text-muted-foreground">Sat, August 12</div>
          </div>
          <ChevronRight color="#64748b" />
          <div>
            <div className="flex text-3xl font-bold">
              <div contentEditable>05</div>
              <div>:</div>
              <div contentEditable>00</div>
            </div>
            <div className="text-muted-foreground">Sat, September 12</div>
          </div>
        </div>
        <div className="flex items-center gap-2 my-4">
          <span className="text-muted-foreground">
            {data.filter((x) => x.checked).length}/{data.length}
          </span>
          <span className="flex-1 font-semibold" contentEditable>
            Shopping list
          </span>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary">
                <Plus color="#000000" size={16} />
                &nbsp;Add an item
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <form onSubmit={handleOnAddItem}>
                <Input
                  type="text"
                  placeholder="Add new item"
                  onChange={handleOnChange}
                />
              </form>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <ScrollArea className="w-full overflow-hidden">
          <div className="grid grid-rows-2 grid-flow-col grid-cols-[minmax(1fr,_1fr)] gap-4">
            {data.map((x) => {
              return (
                <div
                  key={x.id}
                  className="flex items-center gap-2 p-2 bg-gray-100"
                >
                  <Checkbox
                    id={x.id}
                    checked={x.checked}
                    onClick={() => handleOnChecked(x.id)}
                  />
                  <label className="flex-1" htmlFor={x.id}>
                    {x.value}
                  </label>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="secondary" size="icon">
                        <MoreVertical size={16} />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                      <DropdownMenuItem onClick={() => handleOnDelete(x.id)}>
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              );
            })}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </CardContent>
      <CardFooter />
    </Card>
  );
};

export default ItemsToBuy;
