import React from 'react'
import ButtonThomas from '@ui/Thomas/components/ButtonThomas'

const BlocThomas = (): any => {
    return (
        <div className={'d-flex w-100 flex-1 align-center p-80px flex-column gap-10 bg-secondary'}>
            <ButtonThomas
                onClick={() => {}}
                label={'Suivant'}
            />
            <ButtonThomas
                onClick={() => {}}
                label={'Suivant'}
                type={'secondary'}
            />
        </div>
    )
}

export default BlocThomas
