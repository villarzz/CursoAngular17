import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeBidingComponent } from './attribute-biding.component';

describe('AttributeBidingComponent', () => {
  let component: AttributeBidingComponent;
  let fixture: ComponentFixture<AttributeBidingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AttributeBidingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AttributeBidingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
