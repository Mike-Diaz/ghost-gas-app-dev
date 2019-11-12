export class User {
    _id?: string;
    createdOn?: Number = Date.now();
    organizationIds: string;
    employeeIds: string;
    vehicleIds: string;
    priviledgeLevel: string;
    credentialId: string;
    roles: string; // this is supposed to be an array
}