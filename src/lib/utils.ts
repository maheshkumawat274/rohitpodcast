// Lightweight `cn` utility to combine class names.
// Supports strings, numbers, arrays, and object maps.
export function cn(...inputs: any[]) {
  const result: string[] = []

  const handle = (val: any) => {
    if (!val && val !== 0) return
    const t = typeof val
    if (t === 'string' || t === 'number') {
      result.push(String(val))
      return
    }
    if (Array.isArray(val)) {
      val.forEach(handle)
      return
    }
    if (t === 'object') {
      for (const key in val) {
        if (Object.prototype.hasOwnProperty.call(val, key) && (val as any)[key]) {
          result.push(key)
        }
      }
      return
    }
  }

  inputs.forEach(handle)
  return result.join(' ')
}
