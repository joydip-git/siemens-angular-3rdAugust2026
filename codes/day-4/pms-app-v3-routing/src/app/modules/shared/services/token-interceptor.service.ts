import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { Observable } from "rxjs";
import { TokenService } from "./token.service";

export const TokenInterceptorService: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {

    const tokenSvc = inject(TokenService)
    const tokenStore = tokenSvc.getTokenStore()
    const token = tokenStore()

    if (token) {
        const altered = req.clone({
            headers: req.headers.append('Authorization', `Bearer ${token}`)
        })
        return next(altered)
    }

    return next(req)
}