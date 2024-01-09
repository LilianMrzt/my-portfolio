import React, { type FC, type Key, type ReactElement } from 'react'
import Text from '@components/common/Text'
import { type SkillCardProps } from '@interfaces/components/cards/SkillCardProps'
import { DatabaseIcon, ReactIcon, ToolsIcon } from '@assets/Images'
import Icon from '@components/common/Icon'

const SkillCard: FC<SkillCardProps> = ({
    content
}): ReactElement => {
    const getIcon = (iconName: string): string => {
        switch (iconName) {
            case 'ReactIcon':
                return ReactIcon
            case 'ToolsIcon':
                return ToolsIcon
            case 'DatabaseIcon':
                return DatabaseIcon
            default:
                return ToolsIcon
        }
    }

    return (
        <div
            className={'p-20 d-flex flex-1 flex-column align-center pt-40px'}
        >
            <Icon
                src={getIcon(content?.icon)}
                color={'text'}
                className={'mb-20'}
            />
            <Text
                className={'mb-20'}
            >
                {content?.title}
            </Text>
            <Text
                textAlign={'center'}
                className={'mb-20'}
            >
                {content.introductionSentence}
            </Text>
            <Text
                className={'mb-20'}
                color={'primary'}
            >
                {content?.section?.title ?? ''}
            </Text>
            {content?.section?.sectionItems?.map((item: any, index: Key) => (
                <Text
                    key={index}
                    className={'mb-10'}
                >
                    {item}
                </Text>
            ))}
        </div>
    )
}

export default SkillCard
