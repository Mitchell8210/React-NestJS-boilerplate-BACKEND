import { IsNotEmpty } from "class-validator";

export class UserObjectDto {

    @IsNotEmpty()
    nickname: string;

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    picture: string;

    @IsNotEmpty()
    updated_at: string;

    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    email_verified: boolean;

    @IsNotEmpty()
    iss: string;

    @IsNotEmpty()
    sub: string;

    @IsNotEmpty()
    aud: string;

    @IsNotEmpty()
    iat: number;

    @IsNotEmpty()
    exp: number;

    @IsNotEmpty()
    nonce: string;
}