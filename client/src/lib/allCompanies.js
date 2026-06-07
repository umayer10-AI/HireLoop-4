export const serverData = async (path) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}${path}`)
    return res.json()
}