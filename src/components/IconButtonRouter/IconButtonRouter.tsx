import { IconButton, IconButtonProps } from '@material-ui/core'
import React, { VFC } from 'react'
import { Link as RouterLink } from 'react-router-dom'

export interface ButtonRouterProps extends IconButtonProps {
  to: string
}

const IconButtonRouter: VFC<ButtonRouterProps> = (props) => {
  const { to, ...others } = props
  return (
    <RouterLink to={to}>
      <IconButton {...others} />
    </RouterLink>
  )
}
export default IconButtonRouter
