import * as React from "react"
import {
  useButton,
  useFocusRing,
  mergeProps,
  AriaButtonProps,
} from "react-aria"
import clsx from "clsx"

type ButtonVariants = "primary" | "tertiary" | "ghost"
interface ButtonProps extends AriaButtonProps {
  className?: string
  isPressed?: boolean
  variant?: ButtonVariants
  inline?: boolean
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
          "cursor-pointer focus:outline-none transition flex items-center",
          "text-sm text-black",
          {
            "bg-blue-500 cursor-pointer text-white font-semibold py-2 px-4 rounded focus:outline-none transition":
              !props.inline,
            "ring ring-offset-2 ring-blue-400": isFocusVisible && !props.inline,
            "bg-gray-400": props.isDisabled && !props.inline,
            "bg-blue-600": (isPressed || props.isPressed) && !props.inline,
          }
        )}
      >
        {props.children}
      </button>
    )
  }
)

Button.displayName = "Button"
