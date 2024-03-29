import React, { type Key, type ReactElement } from 'react'
import SkillCard from '@components/cards/SkillCard'
import Text from '@components/common/Text'
import { useData } from '@utils/UseData'

const SkillsSection = (): ReactElement => {
    const { data } = useData()

    return (
        <div className={'screen w-100'}>
            <div
                className={'w-100 mw-1512 d-flex flex-column justify-between'}
            >
                <div className={'p-100px'}>
                    <Text
                        fontWeight={'700'}
                        size={'40px'}
                        color={'primary'}
                        textAlign={'start'}
                        className={'mb-40'}
                    >
                        MES COMPÉTENCES
                    </Text>
                    {data
                        ? (
                            <div
                                className={'d-flex flex-row w-100 flex-1 justify-center gap-30 wrap border-radius-small'}
                            >
                                {data.skillsInfos.map((content: any, index: Key) => (
                                    <SkillCard
                                        key={index}
                                        content={content}
                                    />
                                ))}
                            </div>
                        )
                        : (
                            <Text>
                                Les compétences n&apos;ont pas été trouvées... Pourtant, elles sont nombreuses!
                            </Text>
                        )}
                </div>
            </div>
        </div>
    )
}

export default SkillsSection
