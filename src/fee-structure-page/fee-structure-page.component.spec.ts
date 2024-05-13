import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeStructurePageComponent } from './fee-structure-page.component';

describe('FeeStructurePageComponent', () => {
  let component: FeeStructurePageComponent;
  let fixture: ComponentFixture<FeeStructurePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeeStructurePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeeStructurePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
