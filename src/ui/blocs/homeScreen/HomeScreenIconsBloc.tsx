import React, { type ReactElement } from 'react'
import IconButton from '@components/common/IconButton'
import { Github, LinkedIn } from '@assets/Images'

const HomeScreenIconsBloc = (): ReactElement => {
    return (
        <div className={'mt-30 w-100'}>
            <IconButton
                icon={Github}
                color={'primary'}
                backgroundColor={'background'}
                border
            />
            <IconButton
                icon={LinkedIn}
                color={'primary'}
                backgroundColor={'background'}
                className={'ml-10'}
                border
            />
        </div>
    )
}

export default HomeScreenIconsBloc
