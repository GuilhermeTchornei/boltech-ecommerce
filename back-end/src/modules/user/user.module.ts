import { Module } from "@nestjs/common";
import { UserRepository } from "./user.repository";
import { PrismaModule } from "../prisma.module";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";


@Module({
    imports: [
        PrismaModule,
    ],
    controllers: [UserController],
    providers: [UserService, UserRepository]
})
export class UserModule { }