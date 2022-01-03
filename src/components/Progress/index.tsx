import { design } from './index.css'

export interface ProgrssProps {
  value: number
  height?: string
}
export function Progress({ value, height = '4px' }: ProgrssProps) {
  return (
    <div className="w-full">
      <div
        role="progressbar"
        className={design}
        style={{
          width: `${value}%`,
          height: height,
        }}
      ></div>
    </div>
  )
}
