import { useRef } from "react"
import { useButton } from "react-aria"

export function FieldButton(props) {
  let ref = useRef()
  let { buttonProps, isPressed } = useButton(props, ref)
  return (
    <button
      {...buttonProps}
      ref={ref}
      className={`px-2 -ml-px border transition-colors rounded-r-md group-focus-within:border-violet-600 group-focus-within:group-hover:border-violet-600 outline-none ${
        isPressed || props.isPressed
          ? "bg-gray-200 border-gray-400"
          : "bg-gray-50 border-gray-300 group-hover:border-gray-400"
      }`}
    >
      {props.children}
    </button>
  )
}
