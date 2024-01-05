import React, { type ReactElement } from 'react'
import { ArrowDown } from '@assets/Images'
import IntroductionScreenIntroductionTextBloc from '@blocs/introductionScreen/IntroductionScreenIntroductionTextBloc'
import IntroductionScreenIconsBloc from '@blocs/introductionScreen/IntroductionScreenIconsBloc'
import IconButton from '@components/common/IconButton'
import { screenIds } from '@constants/ScreensConstants'
import { handleClickScroll } from '@utils/ButtonUtils'

const IntroductionSection = (): ReactElement => {
    return (
        <div
            className={'banner-screen w-100'}
        >
            <div
                className={'index-1 w-100 relative align-center justify-start d-flex flex-column p-100px'}
            >
                <IntroductionScreenIntroductionTextBloc/>
                <IntroductionScreenIconsBloc/>
                <IconButton
                    icon={ArrowDown}
                    color={'primary'}
                    backgroundColor={'background'}
                    padding={10}
                    className={'mt-30'}
                    onClick={() => { handleClickScroll(screenIds.aboutScreenId) }}
                />
            </div>
        </div>
    )
}

export default IntroductionSection
