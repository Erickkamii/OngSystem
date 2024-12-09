import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupOngComponent } from './signup-ong.component';

describe('SignupOngComponent', () => {
  let component: SignupOngComponent;
  let fixture: ComponentFixture<SignupOngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignupOngComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupOngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
