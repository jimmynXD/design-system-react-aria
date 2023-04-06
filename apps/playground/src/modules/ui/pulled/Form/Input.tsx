import clsx from "clsx"
import * as React from "react"
import type { AriaTextFieldOptions } from "react-aria"
import { mergeProps, useTextField } from "react-aria"

export interface InputProps extends AriaTextFieldOptions<"input"> {
  className?: string
  inline?: boolean
}

export const Input = React.forwardRef(
  (props: InputProps, ref: React.RefObject<HTMLInputElement>) => {
    // change isDisabled to disabled
    const { inputProps, labelProps, errorMessageProps } = useTextField(
      props,
      ref
    )

    return (
      <div>
        <label
          {...labelProps}
          className={clsx({
            "inline-flex items-center": props.inline,
          })}
        >
          <div
            className={clsx("text-sm text-gray-500", {
              "pr-2": props.inline,
              "pb-1": !props.inline,
            })}
          >
            {props.label}
          </div>
          <div className="relative">
            <input
              className={clsx(
                props.className,
                "border border-gray-300 transition-colors rounded-md pr-8 p-1",
                {
                  "bg-white hover:border-gray-400 focus-within:border-violet-600 focus-within:hover:border-violet-600":
                    !props.isDisabled,
                  "bg-gray-100 dark:bg-gray-500 cursor-not-allowed":
                    props.isDisabled,
                }
              )}
              ref={ref}
              {...mergeProps(inputProps)}
            />
            {props.validationState === "invalid" && (
              <div
                {...errorMessageProps}
                className={clsx(
                  "absolute bottom-0 translate-y-full",
                  "text-red-500 text-sm"
                )}
              >
                {props.errorMessage}
              </div>
            )}
          </div>
        </label>
      </div>
    )
  }
)
Input.displayName = "Input"
