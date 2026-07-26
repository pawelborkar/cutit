import { Button, InputGroup, Link } from "@heroui/react";
import { Copy, Link2Icon } from "lucide-react";
export const ResultCard = (link: string) => {
  const shortLink = link.link;
  return (
    <>
      <InputGroup className="w-full mt-2 bg-gray-200/40 backdrop-blur-lg shadow-lg">
        <InputGroup.Prefix>
          <Link2Icon size={28} />
        </InputGroup.Prefix>
        <Link href={shortLink} target="_blank" className="underline w-3/4">
          {shortLink}
          <Link.Icon />
        </Link>
        <InputGroup.Suffix className="pr-0 w-12">
          <Button
            type="submit"
            isIconOnly
            aria-label="Shorten link"
            size="sm"
            variant="ghost"
          >
            <Copy size={28} />
          </Button>
        </InputGroup.Suffix>
      </InputGroup>
    </>
  );
};
