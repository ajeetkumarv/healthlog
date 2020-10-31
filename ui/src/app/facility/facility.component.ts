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
  facility = new Facility();
	submitted = false;

  constructor(private facilityService: FacilityService, private router: Router) {}

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    console.log('reloadData() method called');
    this.facilities = this.facilityService.getFacilities();
  }

  save() {
    console.log('save() method called');

    console.log('>>> Received:' + this.facility.address + ' ' + this.facility.name + ' ' + this.facility.phone)

		this.facilityService.createFacility(this.facility)
		.subscribe(data => console.log(data), error => console.log(error));
		this.facility = new Facility();
		this.gotoFacilityList();
	}
	
	onSubmit() {
    console.log('onSubmit() method called');
		this.submitted = true;
		this.save();
	}

  gotoFacilityList() {
		this.router.navigate(['/facility'])
	}

}
