export function exercise01(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement != "e" && currentElement != "E")
      result.push(currentElement)
  }
  return result.join("")
}

export function exercise02(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const capitalizedElement = currentElement.toUpperCase()
    result.push(capitalizedElement)
  }
  return result.join("")
}

export function exercise03(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e" || currentElement === "E") {
      result.push(currentElement)
    }
  }
  const amount = result.length
  return amount
}

export function exercise04(args) {
  const input = args
  const result = []
  for (let i = 1; i < input.length; i++) {
    const currentElement = input[i]
    const previousElement = input[i - 1]
    if (currentElement === " " && previousElement != "-") {
      result.push(currentElement)
    }
  }
  const amount = result.length + 1

  return amount
}

export function exercise05(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (
      currentElement.charCodeAt() >= 65 &&
      currentElement.charCodeAt() <= 90
    ) {
      return true
    }
  }
  return false
}

export function exercise06(args) {
  const input = args.toUpperCase()

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (
      (currentElement.charCodeAt() < 65 || currentElement.charCodeAt() > 90) &&
      currentElement.charCodeAt() != 32
    ) {
      console.log(currentElement)
      return true
    }
  }
  return false
}
