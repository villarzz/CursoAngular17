import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoDirectiveComponent } from './no-directive.component';

describe('NoDirectiveComponent', () => {
  let component: NoDirectiveComponent;
  let fixture: ComponentFixture<NoDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoDirectiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
