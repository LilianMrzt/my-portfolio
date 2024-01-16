import React, { type FC, type ReactElement } from 'react'
import Image from '@components/common/Image'
import { type CarouselItemProps } from '@interfaces/components/common/carousel/CarouselItemProps'
import Text from '@components/common/Text'
import Icon from '@components/common/Icon'
import { Quote } from '@assets/Images'
import { useTheme } from '@utils/UseTheme'
import { Theme } from '@constants/Constants'

const CarouselItem: FC<CarouselItemProps> = ({
    slide
}): ReactElement => {
    const { theme } = useTheme()
    const isDarkTheme = theme === Theme.dark

    return (
        <div className="d-inline-flex w-700px wrap h-100">
            <div className={'p-20 d-flex flex-column flex-1 align-start justify-between'}>
                <Icon
                    src={Quote}
                    size={'60px'}
                    color={isDarkTheme ? 'secondary' : 'primary'}
                />
                <Text
                    className={'mt-30 mb-20'}
                    textAlign={'justify'}
                    fontWeight={'400'}
                    font={'poppins'}
                    color={isDarkTheme ? 'background' : 'text'}
                >
                    {slide.testimony}
                </Text>
                <div className={'d-flex align-center gap-10'}>
                    <Image
                        source={slide.picture}
                        round
                        backgroundColor={'primary'}
                        size={'60px'}
                    />
                    <div>
                        <Text
                            fontWeight={'700'}
                            font={'poppins'}
                            color={isDarkTheme ? 'secondary' : 'primary'}
                        >
                            {slide.name}
                        </Text>
                        <Text
                            fontWeight={'400'}
                            font={'poppins'}
                            color={isDarkTheme ? 'background' : 'text'}
                        >
                            {`${slide.job}, ${slide.company}`}
                        </Text>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarouselItem
