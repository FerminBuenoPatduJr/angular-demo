import { Injectable } from '@angular/core';
import {of, BehaviorSubject, Observable} from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: string = 'example';

  constructor() {}

  getUsers(): string[] {
    return ['John', 'Jane', 'Joe'];
  }
}
