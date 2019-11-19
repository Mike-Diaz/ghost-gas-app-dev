export class User {
    _id?: string;
    createdOn?: number = Date.now();
    organizationIds: Array<string>;
    vehicleIds: Array<string>;
    privilegeLevel: string;
    //credentialId: string;
    role: string;
}
