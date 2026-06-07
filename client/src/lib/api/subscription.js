import { actionPostCompanyData } from "../action"

export const createSubscription = async (v) => {
    return actionPostCompanyData(v,'/api/applications')
}