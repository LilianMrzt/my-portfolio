import React, { type FC, type ReactElement } from 'react'
import { type ScreenProps } from '@interfaces/screens/ScreenProps'
import AboutMeBloc from '@blocs/aboutScreen/AboutMeBloc'
import { ReactSVG } from 'react-svg'
import { ComputerIcon } from '@assets/Images'

const AboutScreen: FC<ScreenProps> = ({
    id
}): ReactElement => {
    return (
        <div
            className={'screen pt-40'}
            id={id}
        >
            <div className={'d-flex h-200 align-end'}>
                <ReactSVG
                    src={ComputerIcon}
                    className={'d-flex aspect-1 m-0 p-0 color-text'}
                />
            </div>
            <AboutMeBloc/>
        </div>
    )
}

export default AboutScreen
