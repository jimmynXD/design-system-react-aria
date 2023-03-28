import { ReactNode } from "react"

interface InputDataProps {
  label: string
  placeholder: string
  validationState: "valid" | "invalid"
  errorMessage?: ReactNode
  isDisabled?: boolean
  inline?: boolean
}

export const inputData: InputDataProps[] = [
  {
    label: "First name",
    placeholder: "Enter your first name",
    validationState: "valid",
    isDisabled: false,
  },
  {
    label: "First name",
    placeholder: "Enter your first name",
    validationState: "invalid",
    errorMessage: "error message",
  },
  {
    label: "First name",
    placeholder: "Enter your first name",
    validationState: "valid",
    isDisabled: true,
  },
  {
    label: "First name",
    placeholder: "Enter your first name",
    validationState: "valid",
    isDisabled: false,
    inline: true,
  },
  {
    label: "First name",
    placeholder: "Enter your first name",
    validationState: "invalid",
    errorMessage: "error message",
    inline: true,
  },
  {
    label: "First name",
    placeholder: "Enter your first name",
    validationState: "valid",
    isDisabled: true,
    inline: true,
  },
]
