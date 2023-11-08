import { SetMetadata, applyDecorators, UseGuards } from '@nestjs/common';;
import { Reflector } from '@nestjs/core';
import {RolesGuard} from "./roles.guard";

export function Roles(...roles: string[]): any {
    return applyDecorators(
        SetMetadata('roles', roles),
        UseGuards(new RolesGuard(new Reflector())),
    );
}