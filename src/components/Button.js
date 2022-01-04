import classNames from "classnames";
import style from "./Button.module.css";

export const Button = ({ children, onClick, className, ...rest }) => {
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
