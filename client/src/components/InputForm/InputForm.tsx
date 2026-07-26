import { Button, InputGroup, Surface, toast } from "@heroui/react";
import { noop } from "@tanstack/react-query";
import { createShortURL } from "../../services/axios.ts";
import { CornerDownLeft, Link } from "lucide-react";
import { useState } from "react";
import { ResultCard } from "../ResultCard/ResultCard.tsx";

const API_URL = import.meta.env.VITE_API_URL || "https://c.pawel.in";
export function InputForm() {
  const [inputLink, setInputLink] = useState<string>("");
  const [shortURL, setShortURL] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let link = e.target?.value;
    setInputLink(link);
  };

  const handleSubmit = async () => {
    const res = await createShortURL({ url: inputLink });
    const shortCode = await res?.short_code;
    const shortLink = `${API_URL}/${shortCode}`;
    setShortURL(shortLink);
    toast(shortLink, {
      actionProps: {
        children: "Copy",
        onPress: noop,
      },
      description: "Your short link is ready",
    });
  };

  return (
    <Surface className="flex flex-col h-1/3 w-96 items-center justify-center rounded-3xl bg-rose-100/50 shadow-lg backdrop-blur-lg p-4">
      <h1 className="text-4xl font-semibold mb-8">cutit.in</h1>
      <InputGroup className="w-full bg-white/70 backdrop-blur-lg shadow-xl">
        <InputGroup.Prefix>
          <Link size={28} />
        </InputGroup.Prefix>
        <InputGroup.Input className="w-full" onChange={handleChange} />
        <InputGroup.Suffix className="w-12 mr-4">
          <Button
            type="button"
            aria-label="Shorten link"
            size="sm"
            variant="primary"
            onClick={handleSubmit}
          >
            Short
            <CornerDownLeft size={28} />
          </Button>
        </InputGroup.Suffix>
      </InputGroup>
      {shortURL && <ResultCard link={shortURL} />}
    </Surface>
  );
}

export default InputForm;
