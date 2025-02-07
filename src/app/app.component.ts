import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NodeComponent, NodeData } from './node/node.component';
import { PositionSyncService } from './position-sync.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DragDropModule, NodeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'rapidAI';
  nodes: NodeData[] = [
    {
      nodeId: 'Node1',
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

  positionChange(data: any, nodeId: string) {
    console.log(data);
    this.$positionSync.dragBroadcast.next(nodeId);
  }
}
