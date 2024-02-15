"use client";
import React, { useState } from "react";

import { MoreVertical } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { CircularProgress } from "@/components/ui/progress";

const Analytics = () => {
  const [dummyAnalytics, setDummyAnalytics] = useState(90);

  const handleDummyAnalytics = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.valueAsNumber > 100) return;
    setDummyAnalytics(e.target.valueAsNumber || 0);
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center">
          <CardTitle className="flex-1">Analytics</CardTitle>
          <Button variant="ghost" size="icon">
            <MoreVertical size={16} />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="relative p-4 overflow-hidden">
          <div className="absolute">
            <svg width="300" viewBox="0 0 220 220">
              <text x="0" y="0" textAnchor="start">
                <textPath xlinkHref="#curved" className="text-xs font-bold">
                  &nbsp;&nbsp;0
                  <tspan fill="#ccc" className="!font-thin !tracking-wider">
                    &nbsp;••••••&nbsp;
                  </tspan>
                  100
                  <tspan fill="#ccc" className="!font-thin !tracking-wider">
                    &nbsp;••••••&nbsp;
                  </tspan>
                  200
                  <tspan fill="#ccc" className="!font-thin !tracking-wider">
                    &nbsp;••••••&nbsp;
                  </tspan>
                  300
                  <tspan fill="#ccc" className="!font-thin !tracking-wider">
                    &nbsp;••••••&nbsp;
                  </tspan>
                  400
                </textPath>
              </text>
              <path
                id="curved"
                d="M 100,0 A 100,100 0 0 1 -100,0 A 100,100 0 0 1 100,0"
                transform="translate(110,110),rotate(180)"
                fill="none"
              />
            </svg>
          </div>
          <CircularProgress value={dummyAnalytics}>
            <div className="flex flex-col text-center z-10">
              <span className="text-2xl font-bold">
                {Math.round(dummyAnalytics)}%
              </span>
              {dummyAnalytics > 33 ? (
                dummyAnalytics > 66 ? (
                  <div className="text-sm text-muted-foreground">Done</div>
                ) : (
                  <div className="text-sm text-muted-foreground">
                    In progress
                  </div>
                )
              ) : (
                <div className="text-sm text-muted-foreground">Todo</div>
              )}
            </div>
          </CircularProgress>
        </div>
      </CardContent>
      <CardFooter className="flex gap-2 justify-center items-center">
        <span>
          <span className="text-[#2563eb] text-xl">•</span> To do
        </span>
        <span>
          <span className="text-[#fb923c] text-xl">•</span> In progress
        </span>
        <span>
          <span className="text-[#dc2626] text-xl">•</span> Done
        </span>
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
          defaultValue={dummyAnalytics}
          onChange={handleDummyAnalytics}
        />
      </div>
    </Card>
  );
};

export default Analytics;
