import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map, catchError } from 'rxjs';
import { Friend } from '../models/friend.model';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  constructor(private socket: Socket) {
    socket.connect()
   }
   

  //Envia mensaje via socket al back
  sendMessage(msg: string) {
    this.socket.emit('message', msg);
  }

   //Recibe mensaje via socket desde el back
  getMessage() {
    return this.socket.fromEvent('friend_update').pipe(map((data:any) => {         
      return JSON.parse(data);
    }),catchError((err:any) =>{
      throw err
    }));
  }
}
