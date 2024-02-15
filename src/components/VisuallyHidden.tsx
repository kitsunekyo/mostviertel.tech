export const VisuallyHidden = ({ children }: { children: React.ReactNode }) => {
  return (
    <span
      style={{
        display: "inline-block",
        position: "absolute",
        overflow: "hidden",
        clip: "rect(0 0 0 0)",
        height: 1,
        width: 1,
        margin: -1,
        padding: 0,
        border: 0,
      }}
    >
      {children}
    </span>
  );
};
