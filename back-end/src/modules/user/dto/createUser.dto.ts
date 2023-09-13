import { IsNotEmpty, IsString, Matches } from "class-validator";
import { Match } from "../decorator/match.decorator";
import { AuthDto } from "@/modules/auth/dto/auth.dto";

export default class CreateUserDto extends AuthDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    @Match(CreateUserDto, (s) => s.password)
    confirmPassword: string;

    @IsNotEmpty()
    @IsString()
    @Matches(/^[(][0-9]{2}[)]9[0-9]{4}[-][0-9]{4}$/, {
        message: "The phone number must be in the format (xx)9xxxx-xxxx"
    })
    phone: string;
}