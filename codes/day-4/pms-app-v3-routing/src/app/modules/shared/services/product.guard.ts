import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";
import { TokenService } from "./token.service";

// export class ProductGuard implements CanActivate{
//     canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
//         throw new Error("Method not implemented.");
//     }
// }

export const ProductGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> => {
    const tokenSvc = inject(TokenService)
    const tokenStore = tokenSvc.getTokenStore()
    const token = tokenStore()

    const router = inject(Router)

    if (!token) {
        router.navigate(['/login'], {
            queryParams: {
                returnUrl: state.url
            }
        })
        return false
    }

    return true;
}