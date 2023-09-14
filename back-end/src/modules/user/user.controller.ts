import { Body, Controller, Get, Post, Request, UseGuards } from "@nestjs/common";
import { UserService } from "./user.service";
import CreateUserDto from "./dto/createUser.dto";
import { AuthGuard } from "../auth/guard/auth.guard";
import IUserReq from "../auth/interface/userRequest.interface";

@Controller('/')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get()
    hello() {
        return "hello";
    }

    @UseGuards(AuthGuard)
    @Get('users')
    async findOne(@Request() { userId }: IUserReq) {
        return await this.userService.findOne(userId);
    }

    @Post('signup')
    async create(@Body() signupDto: CreateUserDto) {
        const { confirmPassword, ...user } = signupDto;
        return this.userService.create(user);
    }
}