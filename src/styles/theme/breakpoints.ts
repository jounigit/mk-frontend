export const size = {
  xs: '320px',
  sm: '768px',
  lg: '1024px',
  xl: '1200px',
}
export const device = {
  mobile: `(min-width: ${size.xs})`,
  tablet: `(min-width: ${size.sm})`,
  labtop: `(min-width: ${size.lg})`,
  desktop: `(min-width: ${size.xl})`,
}

export const MOBILE = device.mobile
export const TABLET = device.tablet
export const LAPTOP = device.labtop
export const DESKTOP = device.desktop

// export const mediaQueries = (
//   key: keyof typeof device,
// ): string => `(min-width: ${device[key]})`

export default { size, device }
