export function Label({ children, htmlFor, ...props }) {
  return (
    <label
      htmlFor={htmlFor}
      {...props}
    >
      {children}
    </label>
  );
}
