import React, { type FC, type ReactElement, useState } from 'react'
import { type ProjectCardProps } from '@interfaces/components/cards/ProjectCardProps'
import Text from '@components/common/Text'
import Tag from '@components/common/Tag'
import { useTheme } from '@utils/UseTheme'
import { Theme } from '@constants/Constants'
import { Link } from 'react-router-dom'
import { createUrl } from '@utils/TextUtils'
import { useScreenSize } from '@utils/UseScreenSize'

const ProjectCard: FC<ProjectCardProps> = ({ project }): ReactElement => {
    const [isHovered, setIsHovered] = useState(false)
    const { theme } = useTheme()
    const { screenWidth } = useScreenSize()

    return (
        <div
            className={`${screenWidth > 850 ? 'w-400px' : 'w-300px'} mr-50 d-inline-flex h-350px overflow-hidden border-radius-35px d-flex justify-between flex-column gap-10 decoration-none border-radius-small border-none bg-surface pointer shadow ${isHovered ? 'translate-top-10px-shadow' : ''}`}
            onMouseEnter={() => { setIsHovered(true) }}
            onMouseLeave={() => { setIsHovered(false) }}
        >
            <Link
                to={`/projects/${createUrl(project.name)}`}
                state={{ canBeAccessed: true, project }}
                className={'decoration-none'}
            >
                <div className={'p-40px'}>
                    <Text
                        fontWeight={'700'}
                        size={'24px'}
                        color={theme === Theme.light ? 'text' : 'background'}
                    >
                        {project.name}
                    </Text>
                    <div className={'d-flex gap-10'}>
                        {project.technos.map((techno: any, index: number) => (
                            <Tag key={index} label={techno}/>
                        ))}
                    </div>
                </div>
                <div className={'pl-40px pr-40px'}>
                    <img
                        src={project?.image}
                        alt={project.name}
                        className="vertical-align-top border-radius-35px shadow align-self-center h-200px object-cover w-100"
                    />
                </div>
            </Link>
        </div>
    )
}

export default ProjectCard
