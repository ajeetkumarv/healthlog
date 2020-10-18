import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrBookComponent } from './addr-book.component';

describe('AddrBookComponent', () => {
  let component: AddrBookComponent;
  let fixture: ComponentFixture<AddrBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddrBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddrBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
