export const fetchData = async (): Promise<void> => {
    try {
        const response = await fetch('http://localhost:8080/api/home', {
            method: 'GET'
        })
        return await response.json()
    } catch (error) {
        console.error('Error fetching data:', error)
    }
}
