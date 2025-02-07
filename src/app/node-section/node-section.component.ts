import { Component, HostListener, Input, Output } from '@angular/core';

export interface NodeSection {
  sectionId: string;
  label: string;
  hasInput: boolean;
  hasOutput: boolean;
}

@Component({
  selector: 'app-node-section',
  imports: [],
  templateUrl: './node-section.component.html',
  styleUrl: './node-section.component.scss',
})
export class NodeSectionComponent {
  @Input() data!: NodeSection;

  // @Input() parentPosition: any;
}
