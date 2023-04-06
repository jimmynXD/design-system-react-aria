import clsx from "clsx"
import * as React from "react"
import { useTab, useTabList, useTabPanel, AriaTabListProps } from "react-aria"
import { useTabListState } from "react-stately"

export interface TabsProps extends AriaTabListProps<HTMLElement> {
  className?: string
}

export function Tabs({ className, ...props }: TabsProps) {
  const state = useTabListState(props)
  const ref = React.useRef(null)
  const { tabListProps } = useTabList(props, state, ref)
  return (
    <div
      className={clsx(className, "flex", {
        "flex-col": props.orientation !== "vertical",
      })}
    >
      <div
        className={clsx("flex", {
          "border-b border-b-gray-200": props.orientation !== "vertical",
          "flex-col border-r border-gray-200": props.orientation === "vertical",
        })}
        {...tabListProps}
        ref={ref}
      >
        {[...state.collection].map((item) => (
          <Tab
            className={clsx("cursor-pointer transition-all text-gray-500", {
              "py-2 px-4 border-b-[3px] rounded-t-lg":
                props.orientation !== "vertical",
              "whitespace-nowrap p-2 border-r-[3px] rounded-l-lg":
                props.orientation === "vertical",
              "border-blue-500  text-blue-500": state.selectedKey === item.key,
              "border-transparent hover:bg-blue-100":
                state.selectedKey !== item.key,
            })}
            key={item.key}
            item={item}
            state={state}
          />
        ))}
      </div>
      <TabPanel key={state.selectedItem?.key} state={state} />
    </div>
  )
}

function Tab({ item, state, className }) {
  const { key, rendered } = item
  const ref = React.useRef(null)
  const { tabProps } = useTab({ key }, state, ref)
  return (
    <div className={className} {...tabProps} ref={ref}>
      {rendered}
    </div>
  )
}

function TabPanel({ state, ...props }) {
  const ref = React.useRef(null)
  const { tabPanelProps } = useTabPanel(props, state, ref)
  return (
    <div
      {...tabPanelProps}
      ref={ref}
      className="p-8 overflow-y-auto flex w-full"
    >
      {state.selectedItem?.props.children}
    </div>
  )
}
