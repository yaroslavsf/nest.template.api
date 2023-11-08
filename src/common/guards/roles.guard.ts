import {
    CanActivate,
    ExecutionContext,
    ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import {Role} from "../../roles/role.entity";

export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) {}

    public canActivate(context: ExecutionContext): boolean {
        const roles = this.reflector.get<string[]>(
            'roles',
            context.getHandler(),
        );
        if (!roles) {
            return true;
        }
        const request = context.switchToHttp().getRequest();
        const user = request.user;
        if (!user || !this.matchRoles(roles, user.roles)) {
            throw new ForbiddenException(
                'User has not permissions to perform this action',
            );
        } else return true;
    }

    private matchRoles(roles: string[], userRoles: Role[]): boolean {
        for (const userRole of userRoles) {
            if (roles.includes(userRole.name)) {
                return true;
            }
        }
        return false;
    }
}