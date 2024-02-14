export const downloadFile = async (): Promise<void> => {
    try {
        const response = await fetch('http://localhost:8080/api/pdf')
        const blob = await response.blob()
        const url = window.URL.createObjectURL(new Blob([blob]))
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', 'CV_Lilian_Marzet.pdf')
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    } catch (error) {
        console.error('Error fetching the PDF file:', error)
    }
}
