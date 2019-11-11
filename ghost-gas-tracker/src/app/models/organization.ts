export class Organization {
    _id?: string;
    createdOn?: Number = Date.now();
    organizationId: string;
    employeeIds: string; // Object type might need to be a collection of employee Ids that belong to the org.
    vehicleIds: string; // Collection of vehicle Ids belonging to the org.
    priviledgeLevel: string;
    credentialId: string;
}