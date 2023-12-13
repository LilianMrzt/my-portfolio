import React, { type FC, type Key, type ReactElement } from 'react'
import { type ProjectCardProps } from '@interfaces/components/cards/ProjectCardProps'
import Text from '@components/common/Text'
import Button from '@components/common/Button'
import { ReactIcon, StrapiIcon } from '@assets/Images'
import { ReactSVG } from 'react-svg'

const ProjectCard: FC<ProjectCardProps> = ({
    project
}): ReactElement => {
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

    return (
        <div
            className={'d-flex flex-column align-center justify-center h-280px w-400px border-radius-small shadow'}
        >
            <Text
                size={'large'}
            >
                {project.label}
            </Text>
            <Button
                label={project.buttonLabel}
                border={'primary'}
                rounded
                color={'primary'}
                hoverColor={'background'}
                fontWeight={'bold'}
                className={'mt-30 mb-20'}
            />
            <div className={'d-flex gap-30'}>
                {icons().map((icon: any, index: Key) => (
                    <ReactSVG
                        key={index}
                        src={icon}
                        className={'w-medium'}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProjectCard
