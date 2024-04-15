import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleBidingComponent } from './style-biding.component';

describe('StyleBidingComponent', () => {
  let component: StyleBidingComponent;
  let fixture: ComponentFixture<StyleBidingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StyleBidingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StyleBidingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
