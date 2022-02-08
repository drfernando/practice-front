import { FriendEditDialogComponent } from './friend-edit-dialog/friend-edit-dialog.component';
import { Friend } from './../../@Core/models/friend.model';
import { MyFriendsService } from './../../@Core/services/my-friends.service';
import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/@Core/services/socket.service';
import { MatDialog } from '@angular/material/dialog';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-show-friends',
  templateUrl: './show-friends.component.html',
  styleUrls: ['./show-friends.component.sass']
})
export class ShowFriendsComponent implements OnInit {

  friends: Friend[]|null = null;

  constructor(private myFriendService:MyFriendsService, private socketService: SocketService,public dialog: MatDialog,private _service: NotificationsService) { }

  displayedColumns: string[] = ['name', 'gender', 'tools'];

  ngOnInit(): void {
    this.myFriendService.getFriends().subscribe(friends => {
      this.friends = friends;
      console.log(friends);
    })  
    this.socketService.getMessage().subscribe((change:any)=>{
      console.log(change)
      this._service.success(
        'Amigo Modificado',
        "Nombre: " + change.name + "<br>" + "Genero: " + change.gender,
        {
            timeOut: 5000,
            showProgressBar: true,
            pauseOnHover: false,
            clickToClose: false,
            maxLength: 10
        }
    )
      this.onFriendChangeHandler(change);
    })  
  }
  onFriendChangeHandler(change: Friend) {
    console.log(change);
    this.friends?.map(friend=>{
      if(friend.id === change.id){
        this.friends![this.friends!.indexOf(friend)] = change
      }
    })
  }


  edit(friend:Friend): void {
    this.dialog.open(FriendEditDialogComponent, {
      width: '250px',
      data: friend,
    });
  }

}
