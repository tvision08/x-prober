const template = (str: string, placeholders: { [id: string]: any }) => {
  for (const [k, v] of Object.entries(placeholders)) {
    const reg = new RegExp(`\\$\\{${k}\\}`, 'g')
    str = str.replace(reg, String(v))
  }

  return str
}

export default template
