import React, { type FC, type Key, type ReactElement } from 'react'
import ProjectCard from '@components/cards/ProjectCard'
import Text from '@components/common/Text'
import Button from '@components/common/Button'
import { ExternalLinks } from '@constants/Constants'
import { type ScreenProps } from '@interfaces/screens/ScreenProps'
import { useData } from '@utils/UseData'

const ProjectsSection: FC<ScreenProps> = ({
    id
}): ReactElement => {
    const { data } = useData()

    return (
        <div
            className={'w-100 mw-1512'}
            id={id}
        >
            <div className={'pt-40px d-flex flex-column align-start p-100px'}>
                <Text
                    className={'mb-20'}
                    fontWeight={'700'}
                    size={'40px'}
                    color={'primary'}
                >
                    MES PROJETS
                </Text>
                <Text
                    font={'poppins'}
                >
                    Voici quelques projets sur lesquels je travaille sur mon temps personnel.
                </Text>
                {data?.projects
                    ? (
                        <div className={'pt-40px d-flex w-100 flex-row justify-center gap-30 wrap align-center'}>
                            {data?.projects?.map((project: any, index: Key) => (
                                <ProjectCard
                                    key={index}
                                    project={project}
                                />
                            ))}
                        </div>
                    )
                    : (
                        <Text>
                            Il semblerait qu&apos;aucun projet n&apos;ait été trouvé...
                        </Text>
                    )}
                <Button
                    label={'Voir mon Github'}
                    className={'mt-30 mb-20 mb-60 align-self-center'}
                    link={ExternalLinks.gitHub}
                />
            </div>
        </div>
    )
}

export default ProjectsSection
