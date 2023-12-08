import React, { type ReactElement } from 'react'
import IconButton from '@components/common/IconButton'
import { Github, LinkedIn } from '@assets/Images'

const IntroductionScreenIconsBloc = (): ReactElement => {
    return (
        <div className={'mt-30 w-100'}>
            <IconButton
                icon={Github}
                color={'primary'}
                backgroundColor={'background'}
                border
                className={'mr-15'}
            />
            <IconButton
                icon={LinkedIn}
                color={'primary'}
                backgroundColor={'background'}
                border
            />
        </div>
    )
}

export default IntroductionScreenIconsBloc
