import React, { createContext, type FC, type ReactElement, useContext, useState } from 'react'
import { type HomePageInterface } from '@interfaces/api/HomePageInterface'

const DataContext = createContext({})

const DataProvider: FC<any> = ({ children }): ReactElement => {
    const [data, setData] = useState<HomePageInterface>()

    return (
        <DataContext.Provider value={{ data, setData }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider

export const useData = (): any => {
    const context = useContext(DataContext)
    if (!context) {
        throw new Error('useData must be used within a DataProvider')
    }
    return context
}
