import React, { type ReactElement } from 'react'
import { ArrowDown } from '@assets/Images'
import IntroductionScreenIntroductionTextBloc from '@blocs/introductionScreen/IntroductionScreenIntroductionTextBloc'
import IntroductionScreenIconsBloc from '@blocs/introductionScreen/IntroductionScreenIconsBloc'
import { sectionIds } from '@constants/ScreensConstants'
import { handleClickScroll } from '@utils/ButtonUtils'
import Button from '@components/common/Button'
import BlocThomas from '@ui/Thomas/Blocs/BlocThomas'

const IntroductionSection = (): ReactElement => {
    return (
        <div
            className={'mw-1512 banner-screen w-100'}
        >
            <div
                className={'index-1 w-100 relative align-center justify-start d-flex flex-column p-100px'}
            >
                <IntroductionScreenIntroductionTextBloc/>
                <IntroductionScreenIconsBloc/>
                <Button
                    icon={ArrowDown}
                    color={'primary'}
                    backgroundColor={'background'}
                    className={'mt-30'}
                    onClick={() => { handleClickScroll(sectionIds.ProjectSectionId) }}
                    padding={20}
                    animationFromCenter
                />
                <BlocThomas/>
            </div>
        </div>
    )
}

export default IntroductionSection
