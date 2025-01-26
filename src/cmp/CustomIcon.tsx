import { iconSvg } from "../services/service.icon"

export function CustomIcon({ name }: { name: string | number }) {
  const svgCode = iconSvg[name]

  return <i dangerouslySetInnerHTML={{ __html: svgCode }}></i>
}
