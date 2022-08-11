import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './user/services/user.service';
import { BlogComponent } from './blog/blog.component';
import { BookComponent } from './book/book.component';
import { BlogListComponent } from './blog/pages/blog-list/blog-list.component';
import { BlogItemComponent } from './blog/components/blog-item/blog-item.component';
import { BookListComponent } from './book/pages/book-list/book-list.component';
import { BookItemComponent } from './book/components/book-item/book-item.component';

@NgModule({
  declarations: [AppComponent, BlogComponent, BookComponent, BlogListComponent, BlogItemComponent, BookListComponent, BookItemComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
