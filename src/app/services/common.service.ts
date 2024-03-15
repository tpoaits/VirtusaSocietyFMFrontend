import { Injectable, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { addResident } from '../models/addResident';
import { SignalService } from './signal.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService extends SignalService {
  Url = 'http://localhost:3000/Residents/';

  editRes = signal<addResident>({
    flatNo: '',
    name: '',
    mobile: 0,
    rent: 0,
    advance: 0,
    date: ''
  });

  // Get Residents
  getResidents(): Observable<addResident[]> {
    return this.http.get<addResident[]>(this.Url).pipe(tap(this.setResources));
  }

  // Post Resident
  addResident(_add: addResident): Observable<addResident> {
    return this.http
      .post<addResident>(this.Url, _add)
      .pipe(tap(this.upsertResource));
  }

  // Edit
  editResident(resData: string) {
    this.editRes.set(this.resources().find((item: addResident) => item.flatNo == resData) as addResident);
  }
}
