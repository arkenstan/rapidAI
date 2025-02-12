import {
  AfterViewInit,
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  ViewRef,
} from '@angular/core';
import {
  NodeSection,
  NodeSectionComponent,
} from '../node-section/node-section.component';
import { PositionSyncService } from '../position-sync.service';

export interface NodeData {
  nodeId: string;
  position: { x: number; y: number };
  sections: NodeSection[];
}

@Component({
  selector: 'app-node',
  imports: [NodeSectionComponent],
  templateUrl: './node.component.html',
  styleUrl: './node.component.scss',
})
export class NodeComponent implements OnInit, AfterViewInit {
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
      if (res[this.nodeData.nodeId]) {
        console.log(this.nodeData.nodeId, res[this.nodeData.nodeId]);
      }
    });
  }

  ngAfterViewInit(): void {
    console.log('Here');
    this.elem.nativeElement.style.transform = `translate3d(${this.nodeData.position.x}px, ${this.nodeData.position.y}px, 0px)`;
  }

  recalculatePosition() {
    // console.log(this.elem.nativeElement.style.transform);
  }
}
