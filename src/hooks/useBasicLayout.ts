import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

export function useIsMobile() {
  // breakpointsTailwind 是用于定义 Tailwind CSS 的断点（breakpoints）的对象，包含了不同屏幕尺寸的断点信息
  const breakpoints = useBreakpoints(breakpointsTailwind)
  // 当前屏幕尺寸是否符合 'sm'（小屏幕）的断点条件
  const isMobile = breakpoints.smaller('sm')

  return { isMobile }
}
