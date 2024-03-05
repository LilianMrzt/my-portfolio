import React, { type ReactElement } from 'react'
import { Github, LinkedIn, ReactIcon } from '@assets/Images'
import Text from '@components/common/Text'
import Icon from '@components/common/Icon'
import { ExternalLinks } from '@constants/Constants'
import Button from '@components/common/Button'
import { useScreenSize } from '@utils/UseScreenSize'

const Footer = (): ReactElement => {
    const { screenWidth } = useScreenSize()
    return (
        <footer
            className={`h-80px w-100 bg-background ${screenWidth > 850 && 'pb-40'} d-flex flex-row gap-30 justify-between align-center`}
        >
            <div className={`d-flex ${screenWidth > 850 ? 'pl-40px' : 'pl-20'} gap-10 `}>
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
                className={`d-flex ${screenWidth > 850 ? 'pr-40px' : 'pr-20'} gap-10`}
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
