import { Component, inject } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { take } from 'rxjs';
import { Router } from '@angular/router';
import { addResident } from '../../models/addResident';

@Component({
  selector: 'app-all-residents',
  standalone: true,
  imports: [NgxPaginationModule],
  templateUrl: './all-residents.component.html',
  styleUrl: './all-residents.component.scss'
})
export class AllResidentsComponent {
  p: string | number | undefined;
  common = inject(CommonService);
  route = inject(Router);

  get data() {
    return this.common.resources;
  }

  constructor() {
    this.common.getResidents().pipe(take(1)).subscribe();
  }

  resEdit(resData: string) {
    this.route.navigateByUrl('home/addResident');
    this.common.editResident(resData);
  }

  resDel(flatNo: number) {

  }

}
