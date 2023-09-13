import { Body, Controller, HttpCode, HttpStatus, Post, UsePipes } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto/auth.dto";

@Controller('signin')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post()
    @HttpCode(HttpStatus.OK)
    async Signin(@Body() user: AuthDto) {
        return this.authService.findFirst(user);
    }
}