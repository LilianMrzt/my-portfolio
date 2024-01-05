import React, { type ReactElement } from 'react'
import Text from '@components/common/Text'

const IntroductionScreenIntroductionTextBloc = (): ReactElement => {
    return (
        <div className={'w-100'}>
            <Text
                size={'24px'}
                font={'poppins'}
            >
              Bonjour, je suis
            </Text>
            <div className={'d-flex'}>
                <Text
                    fontWeight={'700'}
                    color={'tertiary'}
                    size={'140px'}
                >
                  Lilian Marzet
                </Text>
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
