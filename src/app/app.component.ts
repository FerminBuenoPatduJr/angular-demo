import { Component } from '@angular/core';
import { UserService } from './user/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showBlog = true;
  title = 'angular-demo';

  constructor(private userService: UserService) {
    console.log(this.userService.user);
  }

  hide() {
    this.showBlog = false;
  }
  show() {
    this.showBlog = true;
  }
}
