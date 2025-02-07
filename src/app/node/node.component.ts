import {
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  ViewRef,
} from '@angular/core';
import {
  NodeSection,
  NodeSectionComponent,
} from '../node-section/node-section.component';
import { PositionSyncService } from '../position-sync.service';

export interface NodeData {
  nodeId: string;
  sections: NodeSection[];
}

@Component({
  selector: 'app-node',
  imports: [NodeSectionComponent],
  templateUrl: './node.component.html',
  styleUrl: './node.component.scss',
})
export class NodeComponent {
  @Input() nodeData!: NodeData;

  @HostBinding('attr.style') transform: any;

  constructor(
    private elem: ElementRef<HTMLDivElement>,
    private $positionSync: PositionSyncService
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.$positionSync.dragBroadcast.subscribe((res) => {
      if (res == this.nodeData.nodeId) {
        this.recalculatePosition();
      }
    });
  }

  recalculatePosition() {
    console.log(this.elem.nativeElement.style.transform);
  }
}
