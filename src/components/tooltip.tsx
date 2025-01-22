import { Component, JSX } from 'solid-js'

interface TooltipProps {
  text: string
  children: JSX.Element
}

export const Tooltip: Component<TooltipProps> = props => {
  return (
    <div class='group relative'>
      <span class='absolute top--80% text-xs text-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-gray-500/80 dark:text-gray-400/80 font-light left-1/2 -translate-x-1/2'>
        {props.text}
      </span>
      {props.children}
    </div>
  )
}
