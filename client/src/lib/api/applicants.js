export const getApplicantsId = async(id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/applications?applicantId=${id}`)
    return res.json()
}