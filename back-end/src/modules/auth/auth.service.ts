import { ConflictException, Injectable } from "@nestjs/common";
import { UserRepository } from "../user/user.repository";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from 'bcrypt';
import { AuthDto } from "./dto/auth.dto";
import { IPayload } from "./interface/payload.interface";

@Injectable()
export class AuthService{
    constructor(
        private readonly userRepository: UserRepository,
        private readonly jwtService: JwtService
    ) { }

    async findFirst(user: AuthDto) {
        const _user = await this.userRepository.findFirst({ email: user.email });
        if (_user === null) throw new ConflictException('Email/senha incorretos');

        const isMatch = await bcrypt.compare(user.password, _user.password);
        if (!isMatch) throw new ConflictException('Email/senha incorretos');

        const payload: IPayload = { userId: _user.id };

        return {
            token: await this.jwtService.signAsync(payload),
            userName: _user.name
        };
    }
}