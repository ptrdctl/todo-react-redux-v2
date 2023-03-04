export function Button({onPointerDown, children, ...props}){
  return(
    <button
      onPointerDown={onPointerDown}
      {...props}
    >
      {children}
    </button>
  )
}