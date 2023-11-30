import React, { type FC, forwardRef, type ReactElement } from 'react'
import Image from '@components/common/Image'
import Images from '@assets/Images'
import HomeScreenIntroductionTextBloc from '@blocs/homeScreen/HomeScreenIntroductionTextBloc'
import HomeScreenIconsBloc from '@blocs/homeScreen/HomeScreenIconsBloc'
import HomeScreenBackgroundDecorationBloc from '@blocs/homeScreen/HomeScreenBackgroundDecorationBloc'
import { type ScreenProps } from '@interfaces/components/ScreenProps'

const HomeScreen: FC<ScreenProps> = forwardRef<HTMLDivElement, ScreenProps>(
    ({ id }, ref): ReactElement => {
        return (
            <div
                className={'screen'}
                id={id}
                ref={ref}
            >
                <div
                    className={'index-1 relative transform-64px-top d-flex align-center'}
                >
                    <Image
                        source={Images.Lilian}
                        round
                    />
                    <div
                        className={'ml-50'}
                    >
                        <HomeScreenIntroductionTextBloc/>
                        <HomeScreenIconsBloc/>
                    </div>
                </div>
                <HomeScreenBackgroundDecorationBloc/>
            </div>
        )
    }
)

HomeScreen.displayName = 'HomeScreen'

export default HomeScreen
