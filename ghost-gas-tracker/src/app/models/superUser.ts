export class SuperUser {
    _id?: string;
    createdOn?: Number = Date.now();
    organizationIds: string; // All orgs?
    employeeIds: string; // All employees?
    vehicleIds: string; // All vehicles?
    priviledgeLevel: string;
    credentialId: string;
}