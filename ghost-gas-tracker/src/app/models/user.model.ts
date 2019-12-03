export class User {
    _id?: string;
    createdOn?: number = Date.now();
    organizationId: number;
    role: string;
    googleId?: number;
    name: string;
    emails: string;
    picture: string;
}
