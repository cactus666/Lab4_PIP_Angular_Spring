import { Component } from '@angular/core';
     
@Component({
    selector: 'auth-app',
    template: `<div class="auth">
                    Enter your data
                    <div class="input">
                        <label>Username</label>
                        <input type="text" [(ngModel)]="login">
                    </div>
                    <div class="input">
                        <label>Password</label>
                        <input type="password" [(ngModel)]="password">
                    </div>
                    <div class="input">
                        <input type="submit" value="Login">
                    </div>
              </div>`,
    styleUrls: ['./css/app.auth.css']
})
  
     

export class AuthComponent {
    login="";
    password="";


}