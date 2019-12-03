export class User {
    _id?: string;
    createdOn?: number = Date.now();
    organizationId: number;
    role: string;
    userId: number;
    name: string;
    emails: string;
    picture: string;
}
