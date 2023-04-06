import * as React from "react"
import type { AriaSelectProps } from "@react-types/select"
import { useSelectState } from "react-stately"
import {
  useSelect,
  HiddenSelect,
  useButton,
  mergeProps,
  useFocusRing,
} from "react-aria"
import { ChevronUpDownIcon } from "@heroicons/react/24/solid"

import { ListBox } from "./ListBox"
import { Popover } from "./Popover"
import clsx from "clsx"

export function Select<T extends object>(props: AriaSelectProps<T>) {
  // Create state based on the incoming props
  let state = useSelectState(props)

  // Get props for child elements from useSelect
  let ref = React.useRef(null)
  let { labelProps, triggerProps, valueProps, menuProps } = useSelect(
    props,
    state,
    ref
  )

  // Get props for the button based on the trigger props from useSelect
  let { buttonProps } = useButton(triggerProps, ref)

  let { focusProps, isFocusVisible } = useFocusRing()

  return (
    <div className="inline-flex flex-col relative text-sm">
      <div
        {...labelProps}
        className=" text-gray-700 dark:text-gray-300 text-left cursor-default"
      >
        {props.label}
      </div>
      <HiddenSelect
        state={state}
        triggerRef={ref}
        label={props.label}
        name={props.name}
      />
      <button
        {...mergeProps(buttonProps, focusProps)}
        ref={ref}
        className={clsx(
          "py-1 px-2 relative inline-flex flex-row items-center justify-between rounded-md overflow-hidden cursor-default shadow-sm border-2 outline-none",
          {
            "border-pink-500": isFocusVisible,
            "border-gray-300": !isFocusVisible,
            "bg-gray-100 dark:bg-gray-800 dark:text-white": state.isOpen,
            "bg-white dark:bg-white/10 dark:text-white": !state.isOpen,
          }
        )}
      >
        <span {...valueProps} className={clsx()}>
          {state.selectedItem
            ? state.selectedItem.rendered
            : "Select an option"}
        </span>
        <ChevronUpDownIcon
          className={`ml-4 w-5 h-5 ${
            isFocusVisible ? "text-pink-500" : "text-gray-500 dark:text-white"
          }`}
        />
      </button>
      {state.isOpen && (
        <Popover
          state={state}
          triggerRef={ref}
          placement="bottom start"
          //   className="w-52"
        >
          <ListBox {...menuProps} state={state} />
        </Popover>
      )}
    </div>
  )
}
