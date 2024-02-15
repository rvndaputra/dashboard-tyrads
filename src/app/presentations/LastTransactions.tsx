"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { MoreVertical } from "lucide-react";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import dayjs from "dayjs";
import { dummyLastTransactions } from "../constants";
import { formatCurrency } from "@/utils/format";

const LastTransactions = () => {
  const [isSortASC, setIsSortASC] = useState(true);
  const data = [...dummyLastTransactions];

  const transactions = isSortASC ? data : data.reverse();

  const handleDataSort = (opt: string) => {
    setIsSortASC(opt === "ASC");
  };

  return (
    <Card className="flex-1">
      <CardHeader>
        <div className="flex items-center">
          <CardTitle className="flex-1 text-semibold">
            Last transactions
          </CardTitle>
          <div className="flex">
            <Button
              variant="ghost"
              className={cn(
                "font-semibold text-muted-foreground",
                isSortASC && "underline"
              )}
              onClick={() => handleDataSort("ASC")}
            >
              Newest
            </Button>
            <Button
              variant="ghost"
              className={cn(
                "font-semibold text-muted-foreground",
                !isSortASC && "underline"
              )}
              onClick={() => handleDataSort("DESC")}
            >
              Oldest
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-64">
          <div>
            {transactions.map((trx, idx) => (
              <div key={idx}>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={trx.avatar} alt="ava" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="font-bold">{trx.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {dayjs(trx.date).format("DD MMMM YYYY")}
                    </div>
                  </div>
                  <div className="max-w-[20%] mx-4 text-right">
                    <span
                      className={cn(
                        "font-semibold",
                        trx.status === "PAYIN"
                          ? "text-green-500"
                          : "text-red-500"
                      )}
                    >
                      {`${trx.status === "PAYIN" ? "+" : "-"}${formatCurrency(
                        trx.amount,
                        trx.currency
                      )}`}
                    </span>
                  </div>
                  <Button variant="ghost" size="icon">
                    <MoreVertical size={16} />
                  </Button>
                </div>
                <Separator className="my-4" />
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
      <CardFooter />
    </Card>
  );
};

export default LastTransactions;
