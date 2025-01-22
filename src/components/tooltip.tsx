import { Component, JSX } from 'solid-js'

interface TooltipProps {
  text: string
  children: JSX.Element
}

export const Tooltip: Component<TooltipProps> = props => {
  return (
    <div class='group relative'>
      {props.children}
      <span class='text-xs text-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-gray-500/70 dark:text-gray-400/70 font-light absolute left-1/2 -translate-x-1/2 mt-1'>
        {props.text}
      </span>
    </div>
  )
}
