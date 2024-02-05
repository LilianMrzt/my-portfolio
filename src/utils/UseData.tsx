import React, { createContext, type FC, useContext, useState } from 'react'

const DataContext = createContext({})

const DataProvider: FC<any> = ({ children }): any => {
    const [data, setData] = useState({})

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
