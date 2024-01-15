import React, { type FC, type Key, type ReactElement, useEffect, useState } from 'react'
import ProjectCard from '@components/cards/ProjectCard'
import ProjectsFixtures from '@constants/fixtures/ProjectsFixtures.json'
import Text from '@components/common/Text'
import Button from '@components/common/Button'
import { ExternalLinks } from '@constants/Constants'
import { type ScreenProps } from '@interfaces/screens/ScreenProps'

const MyWorkSection: FC<ScreenProps> = ({
    id
}): ReactElement => {
    const [projects, setProjects] = useState<any>([])

    useEffect(() => {
        setProjects(ProjectsFixtures)
    }, [])

    return (
        <div
            className={'w-100 mw-1512 '}
            id={id}
        >
            <div className={'pt-40px d-flex flex-column align-start p-100px'}>
                <Text
                    className={'mb-20'}
                    fontWeight={'700'}
                    size={'40px'}
                    color={'primary'}
                >
                    Mes projets
                </Text>
                <Text
                    font={'poppins'}
                >
                    Voici quelques projets sur lesquels je travaille sur mon temps personnel.
                </Text>
                <div className={'pt-40px d-flex w-100 flex-row justify-center gap-30 wrap align-center'}>
                    {projects?.map((project: any, index: Key) => (
                        <ProjectCard
                            key={index}
                            project={project.content}
                        />
                    ))}
                    {
                        projects.length === 2 && (
                            <div className={'w-400px'}/>
                        )
                    }
                </div>
                <Button
                    label={'Voir mon Github'}
                    className={'mt-30 mb-20 mb-60 align-self-center'}
                    link={ExternalLinks.gitHub}
                />
            </div>
        </div>
    )
}

export default MyWorkSection
