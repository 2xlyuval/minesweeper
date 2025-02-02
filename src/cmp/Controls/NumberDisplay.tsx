import { CustomIcon } from "../CustomIcon"

export function NumberDisplay({ number: number = 0 }) {
  const digits = number.toString().padStart(3, "0").split("")

  return (
    <div className="number-display">
      <div className="number-display__digits">
        <CustomIcon name={`digit-${digits[0]}`} />
      </div>
      <div className="number-display__digits">
        <CustomIcon name={`digit-${digits[1]}`} />
      </div>
      <div className="number-display__digits">
        <CustomIcon name={`digit-${digits[2]}`} />
      </div>
    </div>
  )
}
