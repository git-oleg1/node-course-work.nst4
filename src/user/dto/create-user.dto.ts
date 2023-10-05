import { GenderEnum } from '../enum';

export class CreateUserDto {
  constructor(
    readonly name: string,
    readonly email: string,
    readonly password: string,
    readonly gender: GenderEnum,
  ) {}
}
