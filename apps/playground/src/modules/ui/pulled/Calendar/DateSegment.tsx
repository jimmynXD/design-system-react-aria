import { useRef } from "react"
import { useDateSegment } from "@react-aria/datepicker"
import clsx from "clsx"

export function DateSegment({ segment, state }) {
  let ref = useRef()
  let { segmentProps } = useDateSegment(segment, state, ref)

  return (
    <div
      {...segmentProps}
      ref={ref}
      style={{
        ...segmentProps.style,
        minWidth:
          segment.maxValue != null && String(segment.maxValue).length + "ch",
      }}
      className={`px-0.5 box-content tabular-nums text-right outline-none rounded-sm focus:bg-violet-600 focus:text-white group ${
        !segment.isEditable ? "text-gray-500" : "text-gray-800"
      }`}
    >
      {/* Always reserve space for the placeholder, to prevent layout shift when editing. */}
      <span
        aria-hidden="true"
        className={clsx(
          "block w-full text-center italic text-gray-500 group-focus:text-white pointer-events-none",
          {
            "hidden h-0": !segment.isPlaceholder,
          }
        )}
      >
        {segment.placeholder}
      </span>
      {segment.isPlaceholder ? "" : segment.text}
    </div>
  )
}
