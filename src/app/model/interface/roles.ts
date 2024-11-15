export interface IRole {
    roleId: number,
    role: String
}

export interface IDesignation {
    designationId: number,
    designation: String
}

export interface APIModel {
    message: String,
    result: boolean,
    data: any
}