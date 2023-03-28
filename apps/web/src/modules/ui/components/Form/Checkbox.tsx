import clsx from "clsx"
import React from "react"
import {
  AriaCheckboxProps,
  VisuallyHidden,
  mergeProps,
  useCheckbox,
} from "react-aria"
import { useToggleState } from "react-stately"

export interface CheckboxProps extends AriaCheckboxProps {}

export const Checkbox = React.forwardRef(
  (props: CheckboxProps, ref: React.RefObject<HTMLInputElement>) => {
    const state = useToggleState(props)
    const { inputProps } = useCheckbox(props, state, ref)

    const checkboxClassName = clsx(
      "absolute left-0 transition ease-in-out duration-150 rounded border-2",
      {
        "bg-indigo-500 border-indigo-500 group-active:bg-indigo-600":
          state.isSelected,
        "bg-white": !state.isSelected,
      }
    )
    const labelClassName = clsx("pl-6", {
      "text-gray-400": props.isDisabled,
      "text-gray-700 group-active:text-gray-800 select-none": !props.isDisabled,
    })

    return (
      <label>
        <VisuallyHidden>
          <input {...inputProps} ref={ref} />
        </VisuallyHidden>
        <div className={checkboxClassName} aria-hidden="true">
          <svg className="stroke-current w-4 h-4" viewBox="0 0 18 18">
            <polyline
              points="1 9 7 14 15 4"
              fill="none"
              stroke="#fff"
              strokeWidth={3}
              strokeDasharray={22}
              strokeDashoffset={state.isSelected ? 44 : 66}
              style={{
                transition: "all 200ms",
              }}
            />
          </svg>
        </div>
        <span className={labelClassName}>{props.children}</span>
      </label>
    )
  }
)

Checkbox.displayName = "Checkbox"
