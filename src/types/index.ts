type AtLeast<T, K extends keyof T> = Partial<T> & Pick<T, K>

type CssPixel = `${number}px`

type CssTime = 0 | '0' | `${number}s` | `${number}ms`

export type { AtLeast, CssPixel, CssTime }
