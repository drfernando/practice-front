import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendEditDialogComponent } from './friend-edit-dialog.component';

describe('FriendEditDialogComponent', () => {
  let component: FriendEditDialogComponent;
  let fixture: ComponentFixture<FriendEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendEditDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
