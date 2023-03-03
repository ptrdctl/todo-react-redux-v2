export function Button({onPointerDown, children}){
  return(
    <button
      onPointerDown={onPointerDown}
    >
      {children}
    </button>
  )
}