import classNames from "classnames";
import React, { ComponentPropsWithRef } from "react";
import style from "./Button.module.css";

export const Button = ({
  children,
  onClick,
  className,
  ...rest
}: { children: React.ReactNode } & ComponentPropsWithRef<"button">) => {
  return (
    <button
      className={classNames(style.button, "text-sm", className)}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};
