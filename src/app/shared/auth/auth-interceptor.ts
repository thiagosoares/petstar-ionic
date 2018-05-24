import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpUserEvent, HttpResponse, HTTP_INTERCEPTORS } from "@angular/common/http";
import { API_CONFIG } from './../../config/api.config';
import { StorageService } from './storage.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    
    constructor(public storage: StorageService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
        
        let localUser = this.storage.getLocaUser();

        let isMyApiReq = req.url.substring(0, API_CONFIG.baseUrl.length) == API_CONFIG.baseUrl;

        if(localUser && isMyApiReq) {
            const authReq = req.clone({headers: req.headers.set('Authorization', 'Bearer ' + localUser.token)});
            return next.handle(authReq);
        }
        else {
            return next.handle(req);
        }

    }
}

export const AuthInterceptorProvider = {

    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor, 
    multi: true,
}