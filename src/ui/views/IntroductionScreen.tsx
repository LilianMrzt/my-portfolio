import React, { type FC, type ReactElement } from 'react'
import Image from '@components/common/Image'
import Images, { ArrowDown } from '@assets/Images'
import IntroductionScreenIntroductionTextBloc from '@blocs/introductionScreen/IntroductionScreenIntroductionTextBloc'
import IntroductionScreenIconsBloc from '@blocs/introductionScreen/IntroductionScreenIconsBloc'
import { type ScreenProps } from '@interfaces/screens/ScreenProps'
import IconButton from '@components/common/IconButton'
import { screenIds } from '@constants/ScreensConstants'
import { handleClickScroll } from '@utils/ButtonUtils'

const IntroductionScreen: FC<ScreenProps> = ({
    id
}): ReactElement => {
    return (
        <div
            id={id}
        >
            <div
                className={'banner-screen'}
            >
                <div
                    className={'index-1 relative align-center justify-center d-flex flex-column'}
                >
                    <Image
                        source={Images.Lilian}
                        round
                        backgroundColor={'primary'}
                    />
                    <IntroductionScreenIntroductionTextBloc/>
                    <IntroductionScreenIconsBloc/>
                    <IconButton
                        icon={ArrowDown}
                        color={'primary'}
                        backgroundColor={'background'}
                        size={'large'}
                        className={'mt-30'}
                        onClick={() => { handleClickScroll(screenIds.aboutScreenId) }}
                    />
                </div>
            </div>
        </div>
    )
}

export default IntroductionScreen
