import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeSectionComponent } from './node-section.component';

describe('NodeSectionComponent', () => {
  let component: NodeSectionComponent;
  let fixture: ComponentFixture<NodeSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NodeSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NodeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
