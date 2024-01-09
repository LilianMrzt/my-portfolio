import React, { type FC, type ReactElement, useState } from 'react'
import { type ProjectCardProps } from '@interfaces/components/cards/ProjectCardProps'
import Text from '@components/common/Text'
import ProjectLanguageTag from '@components/common/projects/ProjectLanguageTag'
import { useTheme } from '@utils/UseTheme'
import { Theme } from '@constants/Constants'

const ProjectCard: FC<ProjectCardProps> = ({ project }): ReactElement => {
    const [isHovered, setIsHovered] = useState(false)
    const { theme } = useTheme()

    return (
        <div
            className={`w-400px h-350px overflow-hidden border-radius-35px d-flex justify-between flex-column gap-10 decoration-none border-radius-small border-none bg-surface pointer ${isHovered ? 'translate-top-10px-shadow shadow' : ''}`}
            onMouseEnter={() => { setIsHovered(true) }}
            onMouseLeave={() => { setIsHovered(false) }}
        >
            <div className={'p-40px'}>
                <Text
                    fontWeight={'700'}
                    size={'24px'}
                    color={theme === Theme.light ? 'text' : 'background'}
                >
                    {project.label}
                </Text>
                <div className={'d-flex gap-10'}>
                    {project.technos.map((techno: any, index: number) => (
                        <ProjectLanguageTag key={index} label={techno}/>
                    ))}
                </div>
            </div>
            <div className={'pl-40px pr-40px'}>
                <img src={project?.image} alt={project.label} className="vertical-align-top border-radius-35px shadow align-self-center h-200px object-cover w-100" />
            </div>
        </div>
    )
}

export default ProjectCard
