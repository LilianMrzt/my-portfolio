import React, { type FC, type ReactElement } from 'react'
import { type ScreenProps } from '@interfaces/screens/ScreenProps'
import AboutMeBloc from '@blocs/aboutScreen/AboutMeBloc'
import { ComputerIcon } from '@assets/Images'
import Icon from '@components/common/Icon'

const AboutSection: FC<ScreenProps> = ({
    id
}): ReactElement => {
    return (
        <div
            className={'screen pt-40'}
            id={id}
        >
            <div className={'d-flex h-200 align-end'}>
                <Icon
                    src={ComputerIcon}
                    size={'undefined'}
                    color={'text'}
                    className={'d-flex'}
                />
            </div>
            <AboutMeBloc/>
        </div>
    )
}

export default AboutSection
