export const createUrl = (input: string): string => {
    let transformedString = input.replace(/ ?- ?/g, '-')
    // Replace spaces with -
    transformedString = transformedString.replace(/ /g, '-')

    return transformedString.toLowerCase()
}
