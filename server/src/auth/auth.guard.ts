import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request: Request = context.switchToHttp().getRequest();
    const token = process.env.ADMIN_TOKEN;

    if (!request.headers['authorization']) return false;

    if (request.headers['authorization'] !== token) return false;

    return true;
  }
}
