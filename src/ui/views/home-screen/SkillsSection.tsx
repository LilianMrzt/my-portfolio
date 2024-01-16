import React, { type Key, type ReactElement, useEffect, useState } from 'react'
import SkillCard from '@components/cards/SkillCard'
import SkillsFixtures from '@constants/fixtures/SkillsFixtures.json'
import Text from '@components/common/Text'

const SkillsSection = (): ReactElement => {
    const [skillCardsContent, setSkillCardContent] = useState<any>([])

    useEffect(() => {
        setSkillCardContent(SkillsFixtures)
    }, [])
    return (
        <div className={'screen w-100'}>
            <div
                className={'mw-1512 p-100px d-flex flex-column align-start justify-between'}
            >
                <Text
                    fontWeight={'700'}
                    size={'40px'}
                    color={'primary'}
                    textAlign={'start'}
                    className={'mb-40'}
                >
                    MES COMPÉTENCES
                </Text>
                <div
                    className={'d-flex flex-row w-100 flex-1 justify-center gap-30 wrap border-radius-small'}
                >
                    {skillCardsContent.map((content: any, index: Key) => (
                        <SkillCard
                            key={index}
                            content={content.content}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SkillsSection
