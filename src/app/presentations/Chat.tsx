"use client";
import React, { useEffect, useRef, useState } from "react";

import EmojiPicker from "emoji-picker-react";
import { Paperclip, Smile } from "lucide-react";
import { useOnClickOutside } from "usehooks-ts";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

const Chat = () => {
  const [showEmojis, setShowEmojis] = useState(false);
  const [input, setInput] = useState("");

  const ref = useRef(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const [chats, setChats] = useState([
    { message: "Are you ready?", type: "self" },
    { message: "I have prepared everything", type: "" },
  ]);

  const addEmoji = (data: any) => {
    setInput((prev) => prev + data.emoji);
    setShowEmojis(false);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleOnSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!input) return;

    setChats((prev) => [
      ...prev,
      { message: input, type: "self" },
      { message: "Hello there! 👋", type: "" },
    ]);
    setInput("");
  };

  useOnClickOutside(ref, () => setShowEmojis(false));

  useEffect(() => {
    if (chats.length > 2) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [chats]);

  return (
    <Card className="self-start flex-1/3">
      <CardHeader>
        <CardTitle>Esther Howard</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-44">
          <div className="flex flex-col gap-4">
            {chats.map((chat, idx) => {
              return chat.type === "self" ? (
                <div key={idx} className="flex justify-end gap-2">
                  <div className="px-4 py-2 text-white bg-violet-500 rounded-lg rounded-br-none">
                    {chat.message}
                  </div>
                  <Avatar>
                    <AvatarImage
                      src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairDreads&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=ShirtVNeck&clotheColor=PastelRed&eyeType=Surprised&eyebrowType=DefaultNatural&mouthType=Sad&skinColor=Black"
                      alt="ava"
                    />
                    <AvatarFallback>Y</AvatarFallback>
                  </Avatar>
                </div>
              ) : (
                <div
                  key={idx}
                  className="flex flex-row-reverse justify-end gap-2"
                >
                  <div className="px-4 py-2 bg-gray-200 rounded-lg rounded-br-none">
                    {chat.message}
                  </div>
                  <Avatar>
                    <AvatarImage
                      src="https://avataaars.io/?avatarStyle=Circle&topType=Hijab&accessoriesType=Prescription02&hatColor=Blue03&hairColor=Blonde&facialHairType=BeardLight&facialHairColor=Platinum&clotheType=Hoodie&clotheColor=Black&eyeType=Surprised&eyebrowType=SadConcernedNatural&mouthType=Eating&skinColor=DarkBrown"
                      alt="ava"
                    />
                    <AvatarFallback>EH</AvatarFallback>
                  </Avatar>
                </div>
              );
            })}
          </div>
          <div ref={bottomRef} />
        </ScrollArea>
      </CardContent>
      <CardFooter className="relative gap-2">
        {showEmojis && (
          <div ref={ref} className="absolute left-0 z-50">
            <EmojiPicker onEmojiClick={addEmoji} />
          </div>
        )}
        <div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setShowEmojis((prev) => !prev)}
          >
            <Smile />
          </Button>
          <Button variant="ghost" size="icon">
            <Paperclip />
          </Button>
        </div>
        <form className="flex-1 flex gap-2" onSubmit={handleOnSubmit}>
          <Input
            className="flex-1 bg-gray-100"
            placeholder="Type your message"
            value={input}
            onChange={handleOnChange}
          />
          <Button className="bg-violet-500" disabled={!input}>
            Send Now
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
};

export default Chat;
