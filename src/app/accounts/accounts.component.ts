import { CardComponent } from '../card/card.component';
import { Component,  OnInit } from '@angular/core';
import { GetLoginStatusService } from '../_messages/getloginstatus.service';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {
  bLoggedIn = false;
  userName$: string = '';
  subscription: Subscription;

  constructor(private glsservice: GetLoginStatusService) { }

  ngOnInit() {
    if (localStorage.getItem('userName')) {
      // if have a userName, then have already logged in
      this.bLoggedIn = true;

      this.userName$ = localStorage.getItem('userFullName');
    }

    this.subscription = this.glsservice.getMessage().subscribe(
      message => {
        if (message.loginStatus === 'LoggedIn') {
          this.bLoggedIn = true;
          this.userName$ = localStorage.getItem('userFullName');
        } else {
          this.bLoggedIn = false;
          localStorage.clear();
        }

        // this.cdRef.detectChanges();
      }

  );
  }

}
