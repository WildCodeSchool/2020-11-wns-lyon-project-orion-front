import {UserGenders} from './enums/user-genders.enum';
import {UserRoles} from './enums/user-roles.enum';

export interface UserModel {
    readonly id: number;
    readonly pid: string;
    readonly email: string;
    readonly lastName: string;
    readonly firstName: string;
    readonly birthDate: Date;
    readonly gender: UserGenders;
    readonly roles: UserRoles[];
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
