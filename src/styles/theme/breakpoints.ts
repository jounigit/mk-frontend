export const size = {
  xs: '320px',
  sm: '768px',
  lg: '1024px',
  xl: '1200px',
  xxl: '1400px',
}
export const device = {
  mobile: ` screen and (min-width: ${size.xs})`,
  tablet: ` screen and (min-width: ${size.sm})`,
  labtop: ` screen and (min-width: ${size.lg})`,
  desktop: ` screen and (min-width: ${size.xl})`,
  bigscreen: ` screen and (min-width: ${size.xxl})`,
}

export const MOBILE = device.mobile
export const TABLET = device.tablet
export const LAPTOP = device.labtop
export const DESKTOP = device.desktop
export const BIGSCREEN = device.bigscreen

// export const mediaQueries = (
//   key: keyof typeof device,
// ): string => `(min-width: ${device[key]})`

export default { size, device }
