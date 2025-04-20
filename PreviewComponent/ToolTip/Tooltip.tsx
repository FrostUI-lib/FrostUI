"use client";

import { FancyFloatingInfo } from '@/components/Tooltip/tooltip'

export function InfoTooltip() {
  return (
    <FancyFloatingInfo
      label="Info Tooltip"
      content={{
        title: "Info Tooltip",
        description: "This is an info tooltip that provides additional information about a specific element or action.",
      }}
      variant="info"
    />
  )
}

export function WarningTooltip() {
  return (
    <FancyFloatingInfo
      label="Warning Tooltip"
      content={{
        title: "Warning Tooltip",
        description: "This is a warning tooltip that alerts users to potential issues or important notes.",
      }}
      variant="warning"
    />
  )
}

export function ErrorTooltip() {
  return (
    <FancyFloatingInfo
      label="Error Tooltip"
      content={{
        title: "Error Tooltip",
        description: "This is an error tooltip that indicates an error or failure condition.",
      }}
      variant="error"
    />
  )
}