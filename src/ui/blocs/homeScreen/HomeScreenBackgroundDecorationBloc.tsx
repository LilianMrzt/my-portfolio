import React, { type ReactElement } from 'react'

const HomeScreenBackgroundDecorationBloc = (): ReactElement => {
    return (
        <div className={'absolute top-0'}>
            <div className={'w-100 h-64px bg-secondary'}/>
            <div className={'triangle'}/>
        </div>
    )
}

export default HomeScreenBackgroundDecorationBloc
