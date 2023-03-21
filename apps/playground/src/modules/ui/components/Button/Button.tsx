import * as React from "react"
import {
  useButton,
  useFocusRing,
  mergeProps,
  AriaButtonProps,
} from "react-aria"
import clsx from "clsx"
interface ButtonProps extends AriaButtonProps {
  className?: string
  isPressed?: boolean
}

export const Button = React.forwardRef(
  (props: ButtonProps, ref: React.RefObject<HTMLButtonElement>) => {
    const { buttonProps, isPressed } = useButton(props, ref)
    const { focusProps, isFocusVisible } = useFocusRing()

    return (
      <button
        {...mergeProps(buttonProps, focusProps)}
        ref={ref}
        className={clsx(
          props.className,
          "cursor-pointer text-white text-sm font-semibold py-2 px-4 rounded focus:outline-none transition",
          "bg-blue-500",
          {
            "ring ring-offset-2 ring-blue-400": isFocusVisible,
            "bg-gray-400": props.isDisabled,
            "bg-blue-600": isPressed || props.isPressed,
          }
        )}
      >
        {props.children}
      </button>
    )
  }
)

Button.displayName = "Button"
