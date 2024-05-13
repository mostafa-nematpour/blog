export const toPersianString = (str: string): string => {
  const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']
  const arabicToPersianChars: { [key: string]: string } = {
    ي: 'ی',
    ك: 'ک'
    // Add more mappings here if needed
  }
  const arabicToPersianDigits: { [key: string]: string } = {
    '٠': '۰',
    '١': '۱',
    '٢': '۲',
    '٣': '۳',
    '٤': '۴',
    '٥': '۵',
    '٦': '۶',
    '٧': '۷',
    '٨': '۸',
    '٩': '۹'
    // Add more mappings here if needed
  }

  let output = ''

  for (let i = 0; i < str.length; i++) {
    let char = str[i]
    if (!isNaN(parseInt(char))) {
      output += persianDigits[parseInt(char)]
    } else if (arabicToPersianChars[char]) {
      output += arabicToPersianChars[char]
    } else if (arabicToPersianDigits[char]) {
      output += arabicToPersianDigits[char]
    } else {
      output += char
    }
  }
  return output
}

export function isEmptyString(value: any): boolean {
  // Check if the value is null or undefined
  if (value === null || value === undefined) {
    return true
  }
  // Check if the value is an empty string
  if (typeof value === 'string' && value.trim() === '') {
    return true
  }
  return false
}

export function isStringInRange(value: any, min: number, max: number): boolean {
  // Check if the value is a string
  if (typeof value !== 'string') {
    // throw new Error('Value must be a string.');
    return false
  }

  const length = value.trim().length
  // Check if the length falls within the specified range
  return length >= min && length <= max
}

export function isEmail(value: any): boolean {
  // Check if the value is a string
  if (typeof value !== 'string') {
    return false
  }

  // Regular expression pattern for basic email validation
  const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  // Test if the value matches the email pattern
  return emailRegex.test(value)
}
