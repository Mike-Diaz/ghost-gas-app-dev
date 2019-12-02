export class User {
    _id?: string;
    createdOn?: number = Date.now();
    organizationId: number;
    role: string;
    googleId: number;
    name: string;
    displayName: string;
    birthday: string;
    relationship: string;
    isPerson: boolean;
    isPlusUser: boolean;
    placesLived: string;
    language: string;
    emails: string;
    gender: string;
    picture: string;
    coverPhoto: string;
}
