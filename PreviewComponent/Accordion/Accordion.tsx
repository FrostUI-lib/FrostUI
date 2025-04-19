'use client'

import React from 'react'
import { Accordion } from '@/components/Accordion/accordion'

export function BasicAccordion() {
  return (
    <Accordion label="Basic Accordion" variant="basic" className="w-full max-w-xl">
      This is a basic accordion. It’s useful for displaying concise information that can be expanded on demand.
    </Accordion>
  )
}

export function BorderedAccordion() {
  return (
    <Accordion label="Bordered Accordion" variant="bordered" className="w-full max-w-xl">
      This accordion includes a subtle border around it to better define boundaries between sections.
    </Accordion>
  )
}

export function GradientAccordion() {
  return (
    <Accordion label="Gradient Accordion" variant="gradient" className="w-full max-w-xl">
      This accordion has a vibrant gradient background that adds visual appeal. Great for standout sections!
    </Accordion>
  )
}

export function NeonAccordion() {
  return (
    <Accordion label="Neon Accordion" variant="neon" className="w-full max-w-xl">
      Glows with a neon effect! Ideal for attention-grabbing content like alerts, callouts, or flashy UI sections.
    </Accordion>
  )
}

export function ShadowAccordion() {
  return (
    <Accordion label="Shadow Accordion" variant="shadow" className="w-full max-w-xl">
      This variant comes with a soft shadow for elegant separation from the background.
    </Accordion>
  )
}

export function TimelineAccordion() {
  return (
    <Accordion label="Timeline Accordion" variant="timeline" className="w-full max-w-xl">
      Use this for timeline steps or progress indicators. Helps guide users through a series of events or stages.
    </Accordion>
  )
}

export function IconBadgeAccordion() {
  return (
    <Accordion
      label="IconBadge Accordion"
      variant="iconBadge"
      avatarSrc="/download.jpeg"
      className="w-full max-w-xl"
    >
      This accordion includes an avatar/icon badge, perfect for user profiles or notifications.
    </Accordion>
  )
}

export function OpenByDefaultAccordion() {
  return (
    <Accordion label="Open by Default" variant="basic" isOpen className="w-full max-w-xl">
      This accordion is expanded by default. You can use this when you want content to be immediately visible.
    </Accordion>
  )
}

export function DisabledAccordion() {
  return (
    <Accordion label="Disabled Accordion" variant="basic" disabled className="w-full max-w-xl">
      You can't interact with this accordion. It's useful when content is read-only or in a locked state.
    </Accordion>
  )
}
