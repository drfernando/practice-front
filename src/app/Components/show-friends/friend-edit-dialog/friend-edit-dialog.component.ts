import { Friend } from './../../../@Core/models/friend.model';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MyFriendsService } from 'src/app/@Core/services/my-friends.service';

@Component({
  selector: 'app-friend-edit-dialog',
  templateUrl: './friend-edit-dialog.component.html',
  styleUrls: ['./friend-edit-dialog.component.sass'],
})
export class FriendEditDialogComponent implements OnInit {
  friend: Friend;
  oldFriend: Friend;

  constructor(
    public dialogRef: MatDialogRef<FriendEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Friend,
    private myFriendService: MyFriendsService
  ) {
    this.oldFriend = this.friend = this.data;
  }

  ngOnInit(): void {}

  onNoClick() {
    this.myFriendService.updateFriend(this.friend).subscribe(() => {
      this.dialogRef.close();
    });
  }
}
