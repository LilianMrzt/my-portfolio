export const fetchData = async (): Promise<void> => {
    try {
        const response = await fetch('http://localhost:3001/api/', {
            method: 'GET'
        })
        return await response.json()
    } catch (error) {
        console.error('Error fetching data:', error)
        throw error
    }
}
