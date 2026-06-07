import { actionPostCompanyData } from "../action"
import { serverData } from "../allCompanies"
import { getUserSession } from "../session"

export const postCompanyData = async (v) => {
    return actionPostCompanyData(v,'/api/companies')
}

export const submitApplication = async (v) => {
    return actionPostCompanyData(v,'/api/applications')
}

export const getCompanyData = async (reqruiterId) => {
    return serverData(`/api/my/companies?reqruiterId=${reqruiterId}`)
}

export const getLoggedReqruiter = async () => {
    const user = await getUserSession()
    return getCompanyData(user?.id)
}