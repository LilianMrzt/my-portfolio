import React, { type ReactElement, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { RoutesConstants } from '@constants/RoutesConstants'
import Text from '@components/common/Text'
import Image from '@components/common/Image'
import Button from '@components/common/Button'
import { useScreenSize } from '@utils/UseScreenSize'

const ProjectScreen = (): ReactElement => {
    const navigate = useNavigate()

    const { pathname, state } = useLocation()
    const { screenWidth } = useScreenSize()

    const project = state?.project

    useEffect(() => {
        if (!state?.canBeAccessed) {
            navigate(RoutesConstants.HOME_SCREEN_ROUTE)
        }
    }, [state, navigate])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return (
        <div className={'d-flex flex-column full-screen-width align-center'}>
            <div
                className={'w-100 mw-1512'}
            >
                <div className={'pt-40px d-flex flex-column align-start p-100px'}>
                    <Text
                        className={'mb-20'}
                        fontWeight={'700'}
                        size={'40px'}
                        color={'primary'}
                    >
                        {project?.name ?? ''}
                    </Text>
                    <div className={'d-flex flex-row justify-between'}>
                        <Text
                            color={'text'}
                            font={'poppins'}
                            className={screenWidth > 850 ? 'w-50' : 'w-100'}
                        >
                            {project?.introduction}
                        </Text>
                    </div>
                    <Text
                        className={'mb-20 mt-30'}
                        fontWeight={'700'}
                        size={'40px'}
                        color={'primary'}
                    >
                        ÉCRANS ET FONCTIONNALITÉS
                    </Text>
                    {project?.screens?.map((screen: any, index: number) => (
                        <div key={index} className={`d-flex flex-row gap-10 ${screenWidth < 850 ? 'justify-center wrap mb-60' : 'mb-20'}`}>
                            {screen?.images?.map((section: any, index: string) => (
                                <div
                                    className={'d-flex flex-row wrap'}
                                    key={index}
                                >
                                    <Image
                                        square={false}
                                        source={section}
                                        height={screenWidth > 850 ? '800px' : 'auto'}
                                        width={screenWidth > 850 ? 'auto' : '350px'}
                                    />
                                </div>
                            ))}
                            <div className={screenWidth > 850 ? 'p-80px' : ''}>
                                <Text>
                                    {screen.description}
                                </Text>
                            </div>
                        </div>
                    ))}
                    <Button
                        label={'Voir le projet sur GitHub'}
                        link={project?.gitLink}
                        className={'align-self-center mt-30 mb-20'}
                    />
                    <Button
                        label={'Retour'}
                        onClick={() => {
                            navigate(RoutesConstants.HOME_SCREEN_ROUTE)
                        }}
                        className={'align-self-center mt-30'}
                    />
                </div>
            </div>
        </div>
    )
}

export default ProjectScreen
