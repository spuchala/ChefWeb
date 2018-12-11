import { Injectable } from '@angular/core';
import { SignalRConnection } from '../../../node_modules/ng2-signalr';

@Injectable({
  providedIn: 'root'
})

export class NotificationService {
  public connection: SignalRConnection;
  constructor() { }
}
