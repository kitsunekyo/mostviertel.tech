import classNames from "classnames";

export const Card = ({ children, className }) => {
  return (
    <div
      className={classNames(
        "bg-white border-2 border-black rounded-md px-8 py-6",
        className
      )}
      style={{ boxShadow: "4px 4px 0 0 rgb(0 0 0 / 89%)" }}
    >
      {children}
    </div>
  );
};
