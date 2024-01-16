import React, { type FC, type Key, type ReactElement } from 'react'
import Text from '@components/common/Text'
import { type SkillCardProps } from '@interfaces/components/cards/SkillCardProps'
import { BackEnd, FrontEnd, Tools } from '@assets/Images'
import Icon from '@components/common/Icon'
import Tag from '@components/common/Tag'
import { useTheme } from '@utils/UseTheme'
import { Theme } from '@constants/Constants'

const SkillCard: FC<SkillCardProps> = ({
    content
}): ReactElement => {
    const { theme } = useTheme()
    const isDarkTheme = theme === Theme.dark

    const getIcon = (iconName: string): string => {
        switch (iconName) {
            case 'ReactIcon':
                return FrontEnd
            case 'ToolsIcon':
                return Tools
            case 'DatabaseIcon':
                return BackEnd
            default:
                return FrontEnd
        }
    }

    return (
        <div
            className={'mw-1512 w-400px h-400px aspect-1 bg-surface border-radius-35px shadow flex-column'}
        >
            <div className={'p-40px d-flex flex-1 flex-column align-start space-between'}>
                <Icon
                    src={getIcon(content?.icon)}
                    color={'text'}
                    className={'mb-20'}
                    size={'40px'}
                />
                <Text
                    className={'mb-20'}
                    color={isDarkTheme ? 'secondary' : 'primary'}
                    size={'24px'}
                    fontWeight={'700'}
                    font={'poppins'}
                >
                    {content?.title}
                </Text>
                <Text
                    textAlign={'start'}
                    className={'mb-20'}
                    size={'16px'}
                    fontWeight={'400'}
                    font={'poppins'}
                    color={isDarkTheme ? 'background' : 'text'}
                >
                    {content.introductionSentence}
                </Text>
                <div>
                    <Text
                        className={'mb-20'}
                        color={isDarkTheme ? 'secondary' : 'primary'}
                        font={'poppins'}
                    >
                        {content?.section?.title ?? ''}
                    </Text>
                    <div className={'d-flex gap-10 wrap'}>
                        {content?.section?.sectionItems?.map((item: any, index: Key) => (
                            <Tag
                                key={index}
                                label={item}
                                size={'16px'}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SkillCard
