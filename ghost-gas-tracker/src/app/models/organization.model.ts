export class Organization {
    _id?: string;
    createdOn?: number = Date.now();
    organizationId: number;
    name: string;
    address: string;
    phone: number;
}