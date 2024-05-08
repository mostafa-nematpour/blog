export const toPersianString = (str: string): string => {
  const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']
  const arabicToPersianChars: { [key: string]: string } = {
    ي: 'ی',
    ك: "ک",
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
