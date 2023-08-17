import { ComponentProps } from 'react'

export type TextareaProps = ComponentProps<'textarea'>

export function Textarea(props: TextareaProps) {
  return (
    <textarea
      id="bio"
      className="min-h-[120px] w-full resize-y rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
      defaultValue="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque quod aspernatur repudiandae doloribus numquam distinctio ab similique illum repellat ducimus quibusdam, autem molestiae tenetur, nam minus quam cumque ipsam a.
"
    />
  )
}
