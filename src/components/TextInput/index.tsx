import { Slot } from "@radix-ui/react-slot";
import { InputHTMLAttributes } from "react";

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function TextInput(props: TextInputProps) {
  return (
    <input
      className="py-4 px-3 bg-gray-800 rounded w-full outline-none text-gray-100 text-sm placeholder:text-gray-400 transition-colors focus:ring-2 ring-cyan-600"
      {...props}
    />
  );
}
