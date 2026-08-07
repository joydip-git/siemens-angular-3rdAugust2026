import { HttpEvent, HttpHandler, HttpHandlerFn, HttpInterceptor, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { Observable } from "rxjs";
import { TokenService } from "./token.service";

export const TokenInterceptorService: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> => {

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

// class MyInterceptor implements HttpInterceptor{
//     intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//         return next.handle(req)
//     }
// }