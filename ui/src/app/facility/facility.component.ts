import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Facility } from 'src/app/Facility';
import { FacilityService } from '../service/facility.service';

@Component({
  selector: 'facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {

  facilities : Observable<Facility[]>

  constructor(private facilityService: FacilityService, private router: Router) {}

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.facilities = this.facilityService.getFacilities();
  }

}
