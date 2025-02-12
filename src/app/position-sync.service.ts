import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface NodePositionSync {
  initial: { x: number; y: number };
  current: { x: number; y: number };
}

@Injectable({
  providedIn: 'root',
})
export class PositionSyncService {
  dragBroadcast: Subject<Record<string, NodePositionSync>> = new Subject();

  nodes: Record<string, NodePositionSync> = {};

  constructor() {}

  syncPositions() {
    this.dragBroadcast.next(this.nodes);
  }

  addNode(nodeId: string, x?: number, y?: number) {
    if (!this.nodes[nodeId]) {
      this.nodes[nodeId] = { initial: { x: 0, y: 0 }, current: { x: 0, y: 0 } };
    }

    if (this.nodes[nodeId] && x && y) {
      this.nodes[nodeId].initial = { x, y };
    }
    this.syncPositions();
  }

  positionChange(nodeId: string, x: number, y: number) {
    if (this.nodes[nodeId]) {
      this.nodes[nodeId].current.x = this.nodes[nodeId].initial.x + x;
      this.nodes[nodeId].current.y = this.nodes[nodeId].initial.y + y;
    }
    this.syncPositions();
  }

  positionCommit(nodeId: string, x: number, y: number) {
    if (this.nodes[nodeId]) {
      this.nodes[nodeId].initial.x = this.nodes[nodeId].current.x;
      this.nodes[nodeId].initial.y = this.nodes[nodeId].current.y;
    }
    this.syncPositions();
  }
}
