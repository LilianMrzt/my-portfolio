import React, { type ReactElement } from 'react'
import AboutMeBloc from '@blocs/aboutScreen/AboutMeBloc'
import { ComputerIcon } from '@assets/Images'
import Icon from '@components/common/Icon'

const AboutSection = (): ReactElement => {
    return (
        <div
            className={'screen pt-40px'}
        >
            <div className={'d-flex h-200px align-end'}>
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
