import type { AriaDialogProps } from "react-aria"
import React from "react"
import { useDialog } from "react-aria"
import { Button } from "../Button"
import { ExclamationCircleIcon } from "@heroicons/react/24/outline"

interface AlertDialogProps extends AriaDialogProps {
  children: React.ReactNode
  title?: string
  variant?: "default" | "destructive"
  confirmLabel?: string
  onClose?: () => void
}

export function AlertDialog(props: AlertDialogProps) {
  let { children, onClose, confirmLabel } = props

  let ref = React.useRef(null)
  let { dialogProps, titleProps } = useDialog(
    {
      ...props,
      role: "alertdialog",
    },
    ref
  )

  return (
    <div {...dialogProps} ref={ref} className="outline-none">
      {props.variant === "destructive" && (
        <ExclamationCircleIcon className="w-6 h-6 text-red-500 absolute right-8 top-8" />
      )}
      <h3
        {...titleProps}
        className="text-lg font-medium pb-2 dark:text-gray-700"
      >
        {props.title}
      </h3>
      <p className="text-sm text-gray-600">{children}</p>
      <div className="pt-8 flex space-x-3 justify-end">
        <Button onPress={onClose}>Cancel</Button>
        <Button onPress={onClose}>{confirmLabel}</Button>
      </div>
    </div>
  )
}
