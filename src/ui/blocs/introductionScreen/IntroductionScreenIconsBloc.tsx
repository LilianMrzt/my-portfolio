import React, { type ReactElement } from 'react'
import { Github, LinkedIn } from '@assets/Images'
import { ExternalLinks } from '@constants/Constants'
import Button from '@components/common/Button'

const IntroductionScreenIconsBloc = (): ReactElement => {
    return (
        <div className={'d-flex mt-30 w-100 align-start'}>
            <Button
                icon={Github}
                color={'primary'}
                backgroundColor={'background'}
                className={'mr-15'}
                link={ExternalLinks.gitHub}
                effect={'hover'}
                hoverColor={'background'}
                border={'primary'}
            />
            <Button
                icon={LinkedIn}
                color={'primary'}
                backgroundColor={'background'}
                link={ExternalLinks.linkedIn}
                effect={'hover'}
                hoverColor={'background'}
                border={'primary'}
            />
        </div>
    )
}

export default IntroductionScreenIconsBloc
