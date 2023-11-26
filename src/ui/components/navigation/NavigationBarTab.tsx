import React, { type FC, type ReactElement } from 'react'
import { type NavigationBarTabProps } from '@interfaces/components/navigation/NavigationBarTabProps'
import Text from '@components/common/Text'

const NavigationBarTab: FC<NavigationBarTabProps> = ({
  label,
  className,
  onClick
}): ReactElement => {
  return (
      <button
          className={`${className} bg-background border-none`}
          onClick={onClick}
      >
        <Text className={'hover-primary pointer'} fontWeight={'bold'}>
            {label}
        </Text>
      </button>
  )
}

export default NavigationBarTab
