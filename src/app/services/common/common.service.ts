import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) {}

  public getAppointments(date, doctorId): Observable<any> {
    return this.http.get(
      `${environment.apiurl}doctors/get-appointments/${date}/${doctorId}`
    );
  }

  public getTimeSlots(date, doctorId): Observable<any> {
    return this.http.get(
      `${environment.apiurl}doctors/get-timeslots/${date}/${doctorId}`
    );
  }

  public getDoctors(): Observable<any> {
    return this.http.get(
      `${environment.apiurl}doctors/get-lists`
    );
  }

  public submitTimeSlot(params: any) {
    return this.http.post<any>(
      `${environment.apiurl}doctors/add-timeslot`,
      params
    );
  }
}
