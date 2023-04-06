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
            className={clsx(
              "whitespace-nowrap px-8 py-2 cursor-pointer transition-all text-gray-500",
              {
                "border-b-[3px]": props.orientation !== "vertical",
                "border-r-[3px]": props.orientation === "vertical",
                "border-blue-500 bg-blue-50": state.selectedKey === item.key,
                "border-transparent hover:bg-blue-100":
                  state.selectedKey !== item.key,
              }
            )}
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
      className="p-8 overflow-y-auto flex flex-col w-full"
    >
      {state.selectedItem?.props.children}
    </div>
  )
}
