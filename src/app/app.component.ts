import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  CdkDragEnd,
  CdkDragMove,
  DragDropModule,
} from '@angular/cdk/drag-drop';
import { NodeComponent, NodeData } from './node/node.component';
import { PositionSyncService } from './position-sync.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DragDropModule, NodeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'rapidAI';
  nodes: NodeData[] = [
    {
      nodeId: 'Node1',
      position: {
        x: 0,
        y: 0,
      },
      sections: [
        {
          label: 'Section 1',
          hasInput: false,
          hasOutput: true,
          sectionId: 'section1',
        },
      ],
    },

    {
      nodeId: 'Node2',
      position: {
        x: 0,
        y: 0,
      },
      sections: [
        {
          label: 'Section Node 2',
          hasInput: true,
          hasOutput: false,
          sectionId: 'section1',
        },
      ],
    },
  ];

  constructor(private $positionSync: PositionSyncService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    for (const node of this.nodes) {
      this.$positionSync.addNode(node.nodeId, 0, 0);
    }
  }

  positionChange(data: CdkDragMove<any>, nodeId: string) {
    console.log(data);
    this.$positionSync.positionChange(nodeId, data.distance.x, data.distance.y);
  }

  positionEnd(data: CdkDragEnd<any>, nodeId: string) {
    console.log('END', data);
    this.$positionSync.positionCommit(nodeId, data.distance.x, data.distance.y);
    // console.log('DRAG END', nodeId, data);
  }
}
