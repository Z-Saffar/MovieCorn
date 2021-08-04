import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

export const useMediaDetector = () => {
  const theme = useTheme()

  const isSmall = useMediaQuery(theme.breakpoints.down('xs'))
  const isMedium = useMediaQuery(theme.breakpoints.between('sm', 'md'))
  const isLarge = useMediaQuery(theme.breakpoints.up('lg'))
  return [isSmall, isMedium, isLarge]
}
