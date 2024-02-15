import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import React from "react";

const Premium = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center">👑 Go to premium</CardTitle>
      </CardHeader>
      <CardContent>
        <Image
          src="/assets/images/purr-premium-account.png"
          width={150}
          height={150}
          alt="premium account img"
        />
        <p className="text-lg font-bold">Need more features?</p>
        <p className="text-sm text-muted-foreground">
          Update your account to premium to get more features.
        </p>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-violet-500">Get now</Button>
      </CardFooter>
    </Card>
  );
};

export default Premium;
