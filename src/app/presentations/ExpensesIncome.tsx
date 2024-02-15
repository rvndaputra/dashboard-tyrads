"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

const ExpensesIncome = () => {
  const [dummyExpenses, setDummyExpenses] = useState(75);
  const dummyIncome = 100 - dummyExpenses;

  const handleDummyExpenses = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.valueAsNumber > 100) return;
    setDummyExpenses(e.target.valueAsNumber || 0);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Expenses and income</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex overflow-hidden">
          <div>
            <div className="text-sm font-semibold">Expense</div>
            <div className="text-lg font-bold">{dummyExpenses}%</div>
            <div className="text-xs text-muted-foreground">5.653</div>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center">
            <Separator orientation="vertical" />
            <div className="text-sm font-semibold">VS</div>
            <Separator orientation="vertical" />
          </div>
          <div>
            <div className="text-sm font-semibold">Income</div>
            <div className="text-lg font-bold">{dummyIncome}%</div>
            <div className="text-xs text-muted-foreground">2.656</div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="gap-2">
        {!!dummyExpenses && (
          <Progress
            value={0}
            className="bg-blue-600"
            style={{ width: `${dummyExpenses}%` }}
          />
        )}
        {!!dummyIncome && (
          <Progress
            value={0}
            className="bg-orange-400"
            style={{ width: `${dummyIncome}%` }}
          />
        )}
      </CardFooter>
      <div className="flex items-center px-4 py-2">
        <span className="font-semibold italic">
          try to put dummy value here:
        </span>
        <Input
          type="number"
          min={0}
          max={100}
          className="w-16 ml-4"
          defaultValue={dummyExpenses}
          onChange={handleDummyExpenses}
        />
      </div>
    </Card>
  );
};

export default ExpensesIncome;
