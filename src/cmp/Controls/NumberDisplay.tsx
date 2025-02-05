import { CustomIcon } from "../CustomIcon"

export function NumberDisplay({ number: number = 0 }) {
  // need to handle negative numbers
  let digits = ["0", "0", "0"]
  if (number < 0) {
    digits[0] = "-"
    digits[1] = Math.abs(number).toString().padStart(2, "0").split("")[0]
    digits[2] = Math.abs(number).toString().padStart(2, "0").split("")[1]
  } else {
    digits = number.toString().padStart(3, "0").split("")
  }

  return (
    <div className="number-display">
      <div className="number-display__digits">
        <CustomIcon
          name={digits[0] === "-" ? "digit-minus" : `digit-${digits[0]}`}
        />
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
