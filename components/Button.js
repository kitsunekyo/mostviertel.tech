import classNames from "classnames";

export const Button = ({ children, onClick, className, ...rest }) => {
  return (
    <button
      className={classNames("button", className)}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};
