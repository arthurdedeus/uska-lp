import { Plus } from "lucide-react";
import { useState } from "react";

type ThirdFoldAccordionProps = {
  title: string;
  content: string;
};

export function ThirdFoldAccordion({
  title,
  content,
}: ThirdFoldAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-md mb-4">
      <div
        className="py-6 px-10 flex flex-row items-center justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-primary text-paragraph-alt1">{title}</p>
        <Plus
          className={`text-primary transition-transform duration-300 will-change-transform  ${
            isOpen ? "rotate-45" : "rotate-0"
          }`}
        />
      </div>
      <div
        className={`overflow-hidden transition-max-h duration-300 ease-in-out ${
          isOpen ? "max-h-40" : "max-h-0"
        }`}
      >
        <p className="text-primary text-paragraph px-10 pb-6">{content}</p>
      </div>
    </div>
  );
}
