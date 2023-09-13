import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { AuthController } from "./auth.controller";
import { PrismaModule } from "../prisma.module";
import configuration from "@/config/configuration";
import { AuthService } from "./auth.service";
import { UserRepository } from "../user/user.repository";


@Module({
    imports: [
        PrismaModule,
        JwtModule.register({
            global: true,
            secret: configuration().secret_key,
            signOptions: {expiresIn: '1day'},
        }),
    ],
    providers: [AuthService, UserRepository],
    controllers: [AuthController],
})
export class AuthModule { }