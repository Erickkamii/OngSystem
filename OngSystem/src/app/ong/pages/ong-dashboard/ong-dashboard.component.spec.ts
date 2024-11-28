import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OngDashboardComponent } from './ong-dashboard.component';

describe('OngDashboardComponent', () => {
  let component: OngDashboardComponent;
  let fixture: ComponentFixture<OngDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OngDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OngDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
