import React, { type ReactElement, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { RoutesConstants } from '@constants/RoutesConstants'

const ProjectScreen = (): ReactElement => {
    const navigate = useNavigate()

    const { state } = useLocation()

    useEffect(() => {
        if (!state?.canBeAccessed) {
            navigate(RoutesConstants.HOME_SCREEN_ROUTE)
        }
    }, [state, navigate])

    return (
        <div>

        </div>
    )
}

export default ProjectScreen
