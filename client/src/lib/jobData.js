export const getJobsData = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/user/jobs/browser`)
    return res.json()
}

export const getJobsIdData = async(id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/user/jobs/browser/${id}`)
    return res.json()
}