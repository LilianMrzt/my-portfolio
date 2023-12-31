import React, { type FC, type Key, type ReactElement, useEffect, useState } from 'react'
import { type ScreenProps } from '@interfaces/screens/ScreenProps'
import SkillCard from '@components/cards/SkillCard'
import SkillsFixtures from '@constants/fixtures/SkillsFixtures.json'

const SkillsSection: FC<ScreenProps> = ({
    id
}): ReactElement => {
    const [skillCardsContent, setSkillCardContent] = useState<any>([])

    useEffect(() => {
        setSkillCardContent(SkillsFixtures)
    }, [])
    return (
        <div
            className={'screen pt-80 mb-60'}
            id={id}
        >
            <div
                className={'d-flex w-75 justify-between shadow border-radius-small'}
            >
                {skillCardsContent.map((content: any, index: Key) => (
                    <SkillCard
                        key={index}
                        content={content.content}
                    />
                ))}
            </div>
        </div>
    )
}

export default SkillsSection
