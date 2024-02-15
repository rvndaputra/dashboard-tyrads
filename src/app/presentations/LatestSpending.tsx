import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, MoreVertical } from "lucide-react";
import Image from "next/image";
import React from "react";

const LatestSpending = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center">
        <CardTitle className="flex-1">Latest spending</CardTitle>
        <Button variant="ghost" size="icon">
          <MoreVertical size={16} />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="flex py-2 justify-center items-center gap-5">
          <div className="bg-blue-100 rounded-full">
            <Image
              src="/assets/images/techny-health-technology-and-medical-monitoring-device.png"
              width={60}
              height={60}
              alt="online store"
            />
          </div>
          <div className="flex-1">
            <p className="leading-4 font-bold">Online store</p>
            <span className="text-xs text-muted-foreground">
              May 30, 2023 at 08:00 pm
            </span>
          </div>
        </div>
        <Separator />
        <div className="flex py-2 justify-center items-center gap-5">
          <div className="bg-blue-100 rounded-full">
            <Image
              src="/assets/images/techny-passport-and-plane-tickets-for-travelling-abroad.png"
              width={60}
              height={60}
              alt="pay the hospital"
            />
          </div>
          <div className="flex-1">
            <p className="leading-4 font-bold">Pay the hospital</p>
            <span className="text-xs text-muted-foreground">
              May 30, 2023 at 08:00 pm
            </span>
          </div>
        </div>
        <Separator />
        <div className="flex pt-2 justify-center items-center gap-5">
          <div className="bg-blue-100 rounded-full">
            <Image
              src="/assets/images/techny-online-shopping.png"
              width={60}
              height={60}
              alt="tickets"
            />
          </div>
          <div className="flex-1">
            <p className="leading-4 font-bold">Tickets</p>
            <span className="text-xs text-muted-foreground">
              May 30, 2023 at 08:00 pm
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" className="w-full text-violet-500">
          View all <ArrowRight size={16} strokeWidth={3} className="ml-1" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default LatestSpending;
