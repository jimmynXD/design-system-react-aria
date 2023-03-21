import { useRef } from "react"
import { useDateFieldState } from "react-stately"
import { useDateField, useLocale } from "react-aria"
import { createCalendar } from "@internationalized/date"
import { DateSegment } from "./DateSegment"

export function DateField(props) {
  let { locale } = useLocale()
  let state = useDateFieldState({
    ...props,
    locale,
    createCalendar,
  })

  let ref = useRef()
  let { fieldProps } = useDateField(props, state, ref)

  return (
    <div {...fieldProps} ref={ref} className="flex">
      {state.segments.map((segment, i) => (
        <DateSegment key={i} segment={segment} state={state} />
      ))}
    </div>
  )
}
