export function Button({ onPointerDown, children, ...props }) {
  return (
    <button
      type="button"
      onPointerDown={onPointerDown}
      {...props}

    >
      {children}
    </button>
  );
}
