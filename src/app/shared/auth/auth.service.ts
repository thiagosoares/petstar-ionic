import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelper} from 'angular2-jwt';
import { StorageService } from './storage.service';
import { LocalUser } from './local_user';
import { API_CONFIG } from './../../config/api.config';
import { CredenciasDto } from './credenciais.dto';

@Injectable()
export class AuthService {

    jwtHelper: JwtHelper = new JwtHelper()

    constructor(public http: HttpClient, public storage: StorageService) { }

    authenticate(creds: CredenciasDto) {
        return this.http.post(`${API_CONFIG.baseUrl}/login`, creds, {observe: 'response', responseType: 'text'})
    }

    refreshToken() {
        return this.http.get(`${API_CONFIG.baseUrl}/auth/refresh_token`, {observe: 'response', responseType: 'text'})
    }

    succesfulLogin(authValue: string) {

        let tk = authValue.substring(7);

        let user: LocalUser = {
            token: tk,
            email: this.jwtHelper.decodeToken(tk).sub
        }

        this.storage.setLocalUser(user);
    }

    logout() {
        this.storage.setLocalUser(null);
    }
}