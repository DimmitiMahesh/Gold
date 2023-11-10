import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiggbossComponent } from './biggboss.component';

describe('BiggbossComponent', () => {
  let component: BiggbossComponent;
  let fixture: ComponentFixture<BiggbossComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BiggbossComponent]
    });
    fixture = TestBed.createComponent(BiggbossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
