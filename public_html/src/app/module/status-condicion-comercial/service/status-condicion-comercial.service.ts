import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL, systemName } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatusCondicionComercialService {

  constructor(private http: HttpClient) {
  }

  create(formData: {}): Observable<any> {
    const headers = new HttpHeaders({
        Authorization: localStorage.getItem(systemName + 'Token')
    });
    return this.http.post(`${API_URL}api/StatusCondicionComercial`, formData, { headers });
  }

  update(formData: {}, id: number): Observable<any> {
    const headers = new HttpHeaders({
        Authorization: localStorage.getItem(systemName + 'Token')
    });
    return this.http.put(`${API_URL}api/StatusCondicionComercial/${id}`, formData, { headers });
  }

  delete(id: number): Observable<any> {
    const headers = new HttpHeaders({
        Authorization: localStorage.getItem(systemName + 'Token')
    });
    return this.http.delete(`${API_URL}api/StatusCondicionComercial/${id}`, { headers });
  }

  data(id): Observable<any> {
    const headers = new HttpHeaders({
        Authorization: localStorage.getItem(systemName + 'Token')
    });
    return this.http.get(`${API_URL}api/StatusCondicionComercial/${ id }`, { headers });
  }

  combo(): Observable<any> {
    const headers = new HttpHeaders({
        Authorization: localStorage.getItem(systemName + 'Token')
    });
    return this.http.get(`${API_URL}api/StatusCondicionComercial/combo`, { headers });
  }
}
