import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  public entrar() {
    this.router.navigateByUrl("/dashboard-professor");
  }
  public entrarFacebook() {
    this.router.navigateByUrl("/dashboard-professor");
  }
  public entrarGoogle() {
    this.router.navigateByUrl("/dashboard-professor");
  }

}
