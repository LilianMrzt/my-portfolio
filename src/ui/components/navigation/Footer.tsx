import React, { type ReactElement } from 'react'
import IconButton from '@components/common/IconButton'
import { Github, LinkedIn, ReactIcon } from '@assets/Images'
import Text from '@components/common/Text'
import Icon from '@components/common/Icon'
import { ExternalLinks } from '@constants/Constants'

const Footer = (): ReactElement => {
    return (
        <footer
            className={'h-200 bg-primary p-20 d-flex flex-column gap-30 justify-center align-center'}
        >
            <div
                className={'d-flex w-100 justify-center'}
            >
                <IconButton
                    icon={Github}
                    color={'surface'}
                    backgroundColor={'primary'}
                    border
                    className={'mr-15'}
                    link={ExternalLinks.gitHub}
                />
                <IconButton
                    icon={LinkedIn}
                    color={'surface'}
                    backgroundColor={'primary'}
                    border
                    link={ExternalLinks.linkedIn}
                />
            </div>
            <Text
                color={'surface'}
            >
                Réalisé par Lilian Marzet
            </Text>
            <div
                className={'d-flex align-center'}
            >
                <Text
                    color={'surface'}
                    size={'small'}
                >
                    Site réalisé avec ReactJS
                </Text>
                <Icon
                    src={ReactIcon}
                    size={'small'}
                    color={'surface'}
                    className={'ml-10'}
                />
            </div>
        </footer>
    )
}

export default Footer
