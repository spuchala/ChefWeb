import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-menu-item-edit',
  templateUrl: './menu-item-edit.component.html',
  styleUrls: ['./menu-item-edit.component.css'],
  providers: [MenuService]
})
export class MenuItemEditComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<MenuItemEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private _menuService: MenuService,
    private _snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
