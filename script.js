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
  for (let i = 1; i < input.length; i++) {
    const currentElement = input[i]
    if (
      currentElement.charCodeAt() >= 65 &&
      currentElement.charCodeAt() <= 90
    ) {
      result.push(currentElement)
    }
  }
  if (result != []) {
    const capital = true
  }
  if (capital == true) {
    return "yes"
  } else {
    return "no"
  }
}

// if (
//   (currentElement.charCodeAt() >= 41 &&
//     currentElement.charCodeAt() <= 57) ||
//   (currentElement.charCodeAt() >= 72 &&
//     currentElement.charCodeAt() <= 100) ||
//   (currentElement.charCodeAt() >= 133 &&
//     currentElement.charCodeAt() <= 140) ||
//   (currentElement.charCodeAt() >= 173 && currentElement.charCodeAt() <= 177)
// ) {
