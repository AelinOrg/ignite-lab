import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { ReactNode } from "react";

export interface TextProps {
  size?: "sm" | "md" | "lg";
  children?: ReactNode;
  asChild?: boolean;
}

export function Text({ size = "md", children, asChild = false }: TextProps) {
  /**
   * Por que não aceitar uma string como children, assim como fizemos
   * com o `span`? O `Slot` nos permite repassar os estilos do pai
   * para o filho, e isso é muito útil para estilizar
   */
  const Component = asChild ? Slot : "span";

  return (
    <Component
      className={clsx("text-gray-100", {
        /**
         * Usamos essa abordagem para demonstrar como o clsx pode ser usado,
         * mas poderíamos ter usado `text-${size}` e teríamos o mesmo resultado.
         */
        "text-sm": size === "sm",
        "text-md": size === "md",
        "text-lg": size === "lg",
      })}
    >
      {children}
    </Component>
  );
}
