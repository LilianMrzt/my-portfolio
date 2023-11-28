import React, { type ReactElement } from 'react'
import Text from '@components/common/Text'

const HomeScreenIntroductionTextBloc = (): ReactElement => {
    return (
        <div>
            <Text
                size={'large'}
                fontWeight={'bold'}
            >
              Bonjour, je suis
            </Text>
            <div className={'d-flex'}>
                <Text
                    size={'extra-large'}
                    fontWeight={'bold'}
                    color={'primary'}
                >
                  Lilian
                </Text>
                <Text
                    size={'extra-large'}
                    fontWeight={'bold'}
                >
                  Marzet
                </Text>
            </div>
            <Text>
              Développeur Fullstack
            </Text>
        </div>
    )
}

export default HomeScreenIntroductionTextBloc
