import React, { type ReactElement } from 'react'
import Text from '@components/common/Text'
import Icon from '@components/common/Icon'
import { StarIcon } from '@assets/Images'

const IntroductionScreenIntroductionTextBloc = (): ReactElement => {
    return (
        <div className={'w-100'}>
            <Text
                size={'24px'}
                font={'poppins'}
            >
              Bonjour, je suis
            </Text>
            <div className={'d-flex align-center'}>
                <Text
                    fontWeight={'700'}
                    color={'text'}
                    size={'120px'}
                    letterSpacing={'2px'}
                >
                  Lilian Marzet
                </Text>
                <Icon
                    src={StarIcon}
                    size={'40px'}
                    className={'ml-20'}
                    color={'primary'}
                />
            </div>
            <Text
                size={'24px'}
                color={'primary'}
                fontWeight={'500'}
                font={'poppins'}
            >
              Développeur Fullstack
            </Text>
            <Text
                size={'24px'}
                font={'poppins'}
                className={'w-65 mt-30'}
            >
                Je suis un jeune développeur enthousiaste et passioné par le monde du développement, avec une expertise de moins d’un an dans l’industrie.
            </Text>
        </div>
    )
}

export default IntroductionScreenIntroductionTextBloc
