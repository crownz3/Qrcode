import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GoogleSigninService } from '../google-signin.service';
import { DashboardFooterComponent } from '../Dialogs/dashboard-footer/dashboard-footer.component';
import { MatDialog } from '@angular/material/dialog';

declare let jsFile:any 


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  encapsulation: ViewEncapsulation.Emulated,

})


export class AdminComponent implements OnInit {
  oAuthService: any;
  val = "pop"
  showLocations= false;
  constructor(private  googleApi: GoogleSigninService,public dialog: MatDialog) { }

  ngOnInit(): void {
    new jsFile()
  }



  logOut() {
    this.googleApi.signOut();
  }


  load(){


  }

  show(){
    this.showLocations = false ? this.showLocations === true : this.showLocations === false
  }

  hide(){
    this.showLocations = false
  }

  footerDialog(){
    const dialogRef = this.dialog.open(DashboardFooterComponent, {
    });
  
    dialogRef.afterOpened().subscribe(res => {
      console.log('The EditForm is opened');
    })
    }

}
