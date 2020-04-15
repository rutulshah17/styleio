export const trimmedUserDisplayName = (displayName) => {
    const indexOfFirstSpace = displayName.indexOf(" ");
    const trimmedDisplayName = displayName.slice(0, indexOfFirstSpace);
    return trimmedDisplayName
}