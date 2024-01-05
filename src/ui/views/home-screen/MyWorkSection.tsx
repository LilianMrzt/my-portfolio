import React, { type Key, type ReactElement, useEffect, useState } from 'react'
import ProjectCard from '@components/cards/ProjectCard'
import ProjectsFixtures from '@constants/fixtures/ProjectsFixtures.json'
import Text from '@components/common/Text'
import Button from '@components/common/Button'
import { ExternalLinks } from '@constants/Constants'

const MyWorkSection = (): ReactElement => {
    const [projects, setProjects] = useState<any>([])

    useEffect(() => {
        setProjects(ProjectsFixtures)
    }, [])

    return (
        <div className={'pt-40 d-flex flex-column align-center'}>
            <Text
                className={'mb-10'}
            >
                Mes projets
            </Text>
            <Text>
                Voici quelques projets sur lesquels je travaille sur mon temps personnel.
            </Text>
            <div className={'pt-40 d-flex flex-row justify-center gap-30 wrap align-center'}>
                {projects?.map((project: any, index: Key) => (
                    <ProjectCard
                        key={index}
                        project={project.content}
                    />
                ))}
            </div>
            <Button
                label={'Voir mon Github'}
                className={'mt-30 mb-20 mb-60'}
                link={ExternalLinks.gitHub}
            />
        </div>
    )
}

export default MyWorkSection
