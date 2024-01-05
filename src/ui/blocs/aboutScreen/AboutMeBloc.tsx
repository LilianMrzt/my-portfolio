import React, { type ReactElement, useEffect, useState } from 'react'
import Text from '@components/common/Text'
import AboutMeFixtures from '@constants/fixtures/AboutMeFixtures.json'

const AboutMeBloc = (): ReactElement => {
    const [aboutMe, setAboutMe] = useState('')

    useEffect(() => {
        setAboutMe(AboutMeFixtures.content)
    }, [])

    return (
        <div
            className={'pt-40 d-flex flex-column bg-primary h-200 w-100 relative align-center mb-60'}
        >
            <div className={'absolute bg-background w-50 p-20 border-radius-small shadow'}>
                <Text
                    className={'mb-20'}
                    color={'primary'}
                >
                    A propos de moi
                </Text>
                <Text>
                    {aboutMe}
                </Text>
            </div>
        </div>
    )
}

export default AboutMeBloc
