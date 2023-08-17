'use client'

import * as Select from '@radix-ui/react-select'
import { Check } from 'lucide-react'

export type SelectItemProps = Select.SelectItemProps & {
  text: string
}

export function SelectItem({ text, ...props }: SelectItemProps) {
  return (
    <Select.Item
      {...props}
      className="flex cursor-pointer items-center justify-between gap-2 px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-50"
    >
      <Select.ItemText className="text-black">{text}</Select.ItemText>

      <Select.ItemIndicator>
        <Check className="h-4 w-4 to-violet-500" />
      </Select.ItemIndicator>
    </Select.Item>
  )
}
