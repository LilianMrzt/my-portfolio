import React, { type FC, type ReactElement, useState } from 'react'
import { type ProjectCardProps } from '@interfaces/components/cards/ProjectCardProps'
import Text from '@components/common/Text'
import Button from '@components/common/Button'
import { ReactIcon, StrapiIcon } from '@assets/Images'
import Icon from '@components/common/Icon'
import './project-card.css' // Import the CSS file for styling

const ProjectCard: FC<ProjectCardProps> = ({ project }): ReactElement => {
    const icons = (): any => {
        const technologiesIcons = []
        if (project.technos.includes('React Native')) {
            technologiesIcons.push(ReactIcon)
        }
        if (project.technos.includes('Strapi')) {
            technologiesIcons.push(StrapiIcon)
        }
        return technologiesIcons
    }

    const [isHovered, setIsHovered] = useState(false)

    return (
        <div
            className={`project-card ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={() => { setIsHovered(true) }}
            onMouseLeave={() => { setIsHovered(false) }}
        >
            <div className="h-100 w-100 overflow-hidden">
                <img src={project?.image} alt={project.label} />
            </div>
            <div className={`hover-content ${isHovered ? 'fade-in' : 'fade-out'}`}>
                <Text>
                    {project.label}
                </Text>
                <Button
                    label={project.buttonLabel}
                    className={'mt-30 mb-20'}
                    backgroundColor={'transparent'}
                />
                <div className={'d-flex gap-30'}>
                    {icons().map((icon: any, index: number) => (
                        <Icon key={index} src={icon} color={'primary'} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
