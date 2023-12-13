import React, { type ReactElement } from 'react'
import IconButton from '@components/common/IconButton'
import { Github, LinkedIn, ReactIcon } from '@assets/Images'
import Text from '@components/common/Text'
import { ReactSVG } from 'react-svg'

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
                />
                <IconButton
                    icon={LinkedIn}
                    color={'surface'}
                    backgroundColor={'primary'}
                    border
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
                <ReactSVG src={ReactIcon} className={'w-small color-surface ml-10'}/>
            </div>
        </footer>
    )
}

export default Footer
