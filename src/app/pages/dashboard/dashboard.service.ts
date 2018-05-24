import { Dashboard } from './dashboard.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_CONFIG } from './../../config/api.config';

@Injectable()
export class DashboardService {


    constructor(public http: HttpClient) {

    }
    
    findDashboardItens() {
        return this.http.get<Dashboard>(`${API_CONFIG.baseUrl}/dashboard`);
    }
}