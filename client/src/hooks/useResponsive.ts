import { Breakpoint, useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

type QueryType = 'up' | 'down' | 'between' | 'only'

export default function useResponsive(
  query: QueryType,
  start: Breakpoint,
  end?: Breakpoint
): boolean {
  const theme = useTheme()
  const mediaUp = useMediaQuery(theme.breakpoints.up(start))
  const mediaDown = useMediaQuery(theme.breakpoints.down(start))
  const mediaBetween = useMediaQuery(
    theme.breakpoints.between(start, end ?? 'xl')
  )
  const mediaOnly = useMediaQuery(theme.breakpoints.only(start))

  if (query === 'up') {
    return mediaUp
  }

  if (query === 'down') {
    return mediaDown
  }

  if (query === 'between') {
    return mediaBetween
  }

  return mediaOnly
}

export function useWidth(): string {
  const theme = useTheme()
  const keys = [...theme.breakpoints.keys].reverse()
  const matches = keys.reduce<string | null>((output, key) => {
    const isMatch = useMediaQuery(theme.breakpoints.up(key))
    return !output && isMatch ? key : output
  }, null)
  return matches || 'xs'
}
