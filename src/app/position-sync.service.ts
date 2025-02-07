import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PositionSyncService {
  dragBroadcast: Subject<string> = new Subject();

  constructor() {}
}
