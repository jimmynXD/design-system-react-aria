import { useRef } from "react"
import { useLocale, useTimeField } from "react-aria"
import { useTimeFieldState } from "react-stately"
import { DateSegment } from "./DateSegment"

export function TimeField(props) {
  let { locale } = useLocale()
  let state = useTimeFieldState({
    ...props,
    locale,
  })

  let ref = useRef()
  let { labelProps, fieldProps } = useTimeField(props, state, ref)

  return (
    <div className="flex flex-col items-start">
      <span
        {...labelProps}
        className="text-sm text-gray-800 dark:text-gray-100"
      >
        {props.label}
      </span>
      <div
        {...fieldProps}
        ref={ref}
        className="flex bg-white border border-gray-300 hover:border-gray-400 transition-colors rounded-md pr-8 focus-within:border-violet-600 focus-within:hover:border-violet-600 p-1"
      >
        {state.segments.map((segment, i) => (
          <DateSegment key={i} segment={segment} state={state} />
        ))}
      </div>
    </div>
  )
}
