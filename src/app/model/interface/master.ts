export interface IApiResponse{
    message : string;
    result : boolean;
    data : any;
}

export interface IParentDept {
    departmntId : number;
    departmentName :  string;
    departmentLogo :  string
}