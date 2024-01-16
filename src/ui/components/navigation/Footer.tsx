import React, { type ReactElement } from 'react'
import { Github, LinkedIn, ReactIcon } from '@assets/Images'
import Text from '@components/common/Text'
import Icon from '@components/common/Icon'
import { ExternalLinks } from '@constants/Constants'
import Button from '@components/common/Button'

const Footer = (): ReactElement => {
    return (
        <footer
            className={'h-80px w-100 bg-background pb-40 d-flex flex-row gap-30 justify-between align-center'}
        >
            <div className={'d-flex gap-10 pl-40px'}>
                <Text
                    color={'primary'}
                    font={'poppins'}
                    fontWeight={'400'}
                >
                    Site réalisé avec ReactJS
                </Text>
                <Icon
                    src={ReactIcon}
                    color={'primary'}
                />
            </div>
            <div
                className={'d-flex gap-10 pr-40px'}
            >
                <Button
                    icon={Github}
                    color={'primary'}
                    backgroundColor={'background'}
                    border={'primary'}
                    link={ExternalLinks.gitHub}
                    effect={'hover'}
                />
                <Button
                    icon={LinkedIn}
                    color={'primary'}
                    backgroundColor={'background'}
                    border={'primary'}
                    link={ExternalLinks.linkedIn}
                    effect={'hover'}
                />
            </div>
        </footer>
    )
}

export default Footer
