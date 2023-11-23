import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimItemComponent } from './claim-item.component';

describe('ClaimItemComponent', () => {
  let component: ClaimItemComponent;
  let fixture: ComponentFixture<ClaimItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClaimItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClaimItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
