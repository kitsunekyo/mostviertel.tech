import classNames from "classnames";

export const Button = ({ children, onClick, className, ...rest }) => {
  return (
    <button
      className={classNames("button text-sm", className)}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};
