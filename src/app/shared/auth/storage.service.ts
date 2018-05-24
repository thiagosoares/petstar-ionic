import { LocalUser } from './local_user';
import { Injectable } from '@angular/core';
import { API_CONFIG } from './../../config/api.config';


@Injectable()
export class StorageService {

    getLocaUser(): LocalUser {

        let user = localStorage.getItem(API_CONFIG.localUser);

        if(user == null) {
            return null;
        }

        return JSON.parse(user);
    }

    setLocalUser(user: LocalUser) {

        if(user == null) {
            localStorage.removeItem(API_CONFIG.localUser);
        }

        localStorage.setItem(API_CONFIG.localUser, JSON.stringify(user));

    }
    
}