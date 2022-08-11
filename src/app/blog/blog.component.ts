import { getLocaleDayNames } from '@angular/common';
import { UserService } from '../user/services/user.service';
import {
  AfterViewInit,
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit, AfterViewInit, OnDestroy {
  name = 'John Doe';
  title = 'My book';
  // sum = 0;
  @ViewChild('div') div: any;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    console.log('on init');
    console.log(this.div);
  }

  ngAfterViewInit(): void {
    console.log('after view');
    console.log(this.div);
    console.log(this.userService.getUsers());
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('Destroy');
  }

  // getName(): string {
  //   return 'Jane Doe';
  // }

  // getSum(x: number, y: number): void {
  //   this.sum = x + y;
  // }
  getUsers(): string[] {
    return ['John', ' Jane ', ' Joe'];
  }
}
