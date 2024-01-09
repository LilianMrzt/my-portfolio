import React, { type FC, type ReactElement } from 'react'
import { type ProjectLanguageTagProps } from '@interfaces/components/common/projects/ProjectLanguageTagProps'
import Text from '@components/common/Text'

const ProjectLanguageTag: FC<ProjectLanguageTagProps> = ({
    label
}): ReactElement => {
    return (
        <div className={'bg-secondary pt-2px pb-2px pl-5px pr-5px border-radius-small'}>
            <Text
                color={'background'}
                font={'poppins'}
                size={'12px'}
            >
                {label}
            </Text>
        </div>
    )
}

export default ProjectLanguageTag
