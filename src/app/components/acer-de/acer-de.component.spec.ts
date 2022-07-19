import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcerDeComponent } from './acer-de.component';

describe('AcerDeComponent', () => {
  let component: AcerDeComponent;
  let fixture: ComponentFixture<AcerDeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcerDeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcerDeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
