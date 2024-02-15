"use client";
import Image from "next/image";
import React from "react";

import { ChevronDown } from "lucide-react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import type { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";

const dummyStatistics = [
  {
    name: "Oct",
    income: 60,
    outcome: 50,
  },
  {
    name: "Nov",
    income: 30,
    outcome: 20,
  },
  {
    name: "Dec",
    income: 30,
    outcome: 15,
  },
  {
    name: "Jan",
    income: 20,
    outcome: 10,
  },
  {
    name: "Feb",
    income: 15,
    outcome: 5,
  },
];

const formatYAxis = (value: number) => {
  return "$" + value;
};

type Checked = DropdownMenuCheckboxItemProps["checked"];

const BalanceStatistics = () => {
  const [showIncomeBar, setShowIncomeBar] = React.useState<Checked>(true);
  const [showOutcomeBar, setShowOutcomeBar] = React.useState<Checked>(true);

  return (
    <Card className="flex-grow">
      <CardHeader className="flex flex-row items-center">
        <CardTitle className="flex-1">Balance statistics</CardTitle>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary">
              Filter
              <ChevronDown size={16} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Bar Appearance</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem
              checked={showIncomeBar}
              onCheckedChange={setShowIncomeBar}
            >
              Income
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={showOutcomeBar}
              onCheckedChange={setShowOutcomeBar}
            >
              Outcome
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent className="flex">
        <div className="w-48">
          <div className="mb-2 text-3xl font-bold">$564</div>
          <div className="flex items-center gap-2">
            <Image
              src="/assets/images/golden-coins.png"
              width={50}
              height={50}
              alt="coins"
            />
            <div className="text-xs font-semibold text-gray-600">
              Your total balance
            </div>
          </div>
          <Separator className="my-2" />
          <div className="text-xs text-muted-foreground">
            Always see your earnings update
          </div>
        </div>
        <div className="w-full h-44">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart width={5} height={40} data={dummyStatistics}>
              <XAxis dataKey="name" className="font-semibold" />
              <YAxis
                dataKey="outcome"
                className="font-semibold"
                tickFormatter={formatYAxis}
              />
              <Tooltip />
              {showIncomeBar && <Bar dataKey="income" fill="#4f46e5" />}
              {showOutcomeBar && <Bar dataKey="outcome" fill="#a5b4fc" />}
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default BalanceStatistics;
