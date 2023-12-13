import React, { type Key, type ReactElement, useEffect, useState } from 'react'
import ProjectCard from '@components/cards/ProjectCard'
import ProjectsFixtures from '@constants/fixtures/ProjectsFixtures.json'

const MyWorkSection = (): ReactElement => {
    const [projects, setProjects] = useState<any>([])

    useEffect(() => {
        setProjects(ProjectsFixtures)
    }, [])

    return (
        <div className={'pt-40 pb-40 d-flex flex-row justify-center gap-30 wrap align-center'}>
            {projects?.map((project: any, index: Key) => (
                <ProjectCard
                    key={index}
                    project={project.content}
                />
            ))}
        </div>
    )
}

export default MyWorkSection
