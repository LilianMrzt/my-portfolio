import React, { type ReactElement } from 'react'
import IconButton from '@components/common/IconButton'
import { Github, LinkedIn } from '@assets/Images'
import { ExternalLinks } from '@constants/Constants'

const IntroductionScreenIconsBloc = (): ReactElement => {
    return (
        <div className={'d-flex mt-30 w-100'}>
            <IconButton
                icon={Github}
                color={'primary'}
                backgroundColor={'background'}
                border
                className={'mr-15'}
                link={ExternalLinks.gitHub}
            />
            <IconButton
                icon={LinkedIn}
                color={'primary'}
                backgroundColor={'background'}
                border
                link={ExternalLinks.linkedIn}
            />
        </div>
    )
}

export default IntroductionScreenIconsBloc
