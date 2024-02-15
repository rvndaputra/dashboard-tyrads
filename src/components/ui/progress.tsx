"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-7 w-full overflow-hidden rounded-sm bg-secondary",
      className
    )}
    {...props}
  >
    {/* <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-primary transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    /> */}
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

const CircularProgress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value: _value, ...props }, ref) => {
  const { children } = props;
  const value = _value || 0;

  const progressBar = (value: number) => {
    const radius = 100;
    const b = value < 33 ? Math.PI * value : 0;
    const y = value < 66 ? Math.PI * value : 0;

    return (
      <svg width="300" height="300" viewBox="0 0 250 250">
        <circle
          id="textPath"
          cx="125"
          cy="125"
          r={radius}
          fill="none"
          strokeWidth="15"
          strokeLinecap="round"
          strokeDashoffset={-1 * Math.PI * radius}
          strokeDasharray={`${Math.PI * 180} 10000`}
          stroke="#e5e5e5"
        />
        {value > 0 && (
          <>
            <circle
              cx="125"
              cy="125"
              r={radius}
              fill="none"
              strokeWidth="15"
              strokeLinecap="round"
              strokeDashoffset={-1 * Math.PI * radius}
              strokeDasharray={`${Math.PI * value} 10000`}
              stroke="#dc2626"
            />
            <circle
              cx="125"
              cy="125"
              r={radius}
              fill="none"
              strokeWidth="15"
              strokeLinecap="round"
              strokeDashoffset={-1 * Math.PI * radius}
              strokeDasharray={`${y ? y : Math.PI + 200} 10000`}
              stroke="#fb923c"
            />
            <circle
              cx="125"
              cy="125"
              r={radius}
              fill="none"
              strokeWidth="15"
              strokeLinecap="round"
              strokeDashoffset={-1 * Math.PI * radius}
              strokeDasharray={`${b ? b : Math.PI + 100} 10000`}
              stroke="#2563eb"
            />
          </>
        )}
      </svg>
    );
  };

  return (
    <div
      ref={ref}
      className={cn(
        "relative h-[150px] w-[300px] flex justify-center items-end",
        className
      )}
    >
      <div className="absolute top-0 h-full w-full">
        <div className="absolute top-0 ">{progressBar(value)}</div>
      </div>
      {children}
    </div>
  );
});
CircularProgress.displayName = "CircularProgress";

export { Progress, CircularProgress };
