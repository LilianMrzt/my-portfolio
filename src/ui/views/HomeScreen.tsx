import React, { type FC, forwardRef, type ReactElement } from 'react'
import Image from '@components/common/Image'
import Images from '@assets/Images'
import HomeScreenIntroductionTextBloc from '@blocs/homeScreen/HomeScreenIntroductionTextBloc'
import HomeScreenIconsBloc from '@blocs/homeScreen/HomeScreenIconsBloc'
import NavigationBar from '@components/navigation/NavigationBar'
import { type HomeScreenProps } from '@interfaces/screens/HomeScreenProps'

const HomeScreen: FC<HomeScreenProps> = forwardRef<HTMLDivElement, HomeScreenProps>(({
    id,
    theme,
    toggleTheme,
    handleClickScroll
}, ref): ReactElement => {
    return (
        <div
            id={id}
            ref={ref}
        >
            <NavigationBar
                theme={theme}
                toggleTheme={toggleTheme}
                handleClick={handleClickScroll}
            />
            <div
                className={'screen'}
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
            </div>
        </div>
    )
}
)

HomeScreen.displayName = 'HomeScreen'

export default HomeScreen
