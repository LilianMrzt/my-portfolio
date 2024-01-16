import React, { type FC, type ReactElement } from 'react'
import { type TagProps } from '@interfaces/components/common/projects/TagProps'
import Text from '@components/common/Text'
import { useTheme } from '@utils/UseTheme'
import { Theme } from '@constants/Constants'

const Tag: FC<TagProps> = ({
    label,
    size = '12px'
}): ReactElement => {
    const { theme } = useTheme()
    return (
        <div className={'bg-secondary pt-2px pb-2px pl-5px pr-5px border-radius-5px'}>
            <Text
                color={theme === Theme.light ? 'background' : 'text'}
                font={'poppins'}
                size={size}
            >
                {label}
            </Text>
        </div>
    )
}

export default Tag
