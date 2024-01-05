import React, { type ReactElement } from 'react'
import Text from '@components/common/Text'

const IntroductionScreenIntroductionTextBloc = (): ReactElement => {
    return (
        <div className={'mt-30'}>
            <Text
                fontWeight={'bold'}
            >
              Bonjour, je suis
            </Text>
            <div className={'d-flex'}>
                <Text
                    fontWeight={'bold'}
                    color={'primary'}
                    className={'mr-10'}
                >
                  Lilian
                </Text>
                <Text
                    fontWeight={'bold'}
                >
                  Marzet
                </Text>
            </div>
            <Text
            >
              Développeur Fullstack
            </Text>
        </div>
    )
}

export default IntroductionScreenIntroductionTextBloc
