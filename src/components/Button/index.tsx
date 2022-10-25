import { Slot } from "@radix-ui/react-slot";
import { ReactNode } from "react";

export interface ButtonProps {
  children?: ReactNode;
  asChild?: boolean;
}

export function Button({ children, asChild = false }: ButtonProps) {
  const Component = asChild ? Slot : "button";

  return (
    <Component className="py-4 px-3 bg-cyan-500 rounded font-semibold text-black text-sm w-full hover:bg-cyan-600 transition-colors focus:ring-2 ring-white">
      {children}
    </Component>
  );
}
