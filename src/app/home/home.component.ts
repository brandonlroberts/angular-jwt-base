import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //registerMode = false;
  model: any = {}

  constructor(public accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
  }


  login() {
    this.accountService.login(this.model).subscribe(response => {
      this.router.navigateByUrl('/main');
    })
  }

  // logout() {
  //   this.accountService.logout();
  //   this.model.username = "";
  //   this.model.password = "";
  //   this.router.navigateByUrl('/')
  // }

}
