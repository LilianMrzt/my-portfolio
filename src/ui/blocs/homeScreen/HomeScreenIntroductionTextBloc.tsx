import React, { type ReactElement } from 'react'
import Text from '@components/common/Text'

const HomeScreenIntroductionTextBloc = (): ReactElement => {
    return (
        <div className={'mt-30'}>
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
                    className={'mr-10'}
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
            <Text
                size={'large'}
            >
              Développeur Fullstack
            </Text>
        </div>
    )
}

export default HomeScreenIntroductionTextBloc
