export class User {
    _id?: string;
    createdOn?: Number = Date.now();
    organizationIds: Array<string>;
    vehicleIds: Array<string>;
    privilegeLevel: string;
    //credentialId: string;
    roles: Array<string>;
}
