import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Address } from '../Address';
import { AddressService } from '../service/address.service';

@Component({
  selector: 'addr-book',
  templateUrl: './addr-book.component.html',
  styleUrls: ['./addr-book.component.css']
})
export class AddrBookComponent implements OnInit {

  addresses: Observable<Address[]>;

  constructor(private addressService: AddressService, private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.addresses = this.addressService.getAddresses();
  }

}
