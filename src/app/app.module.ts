import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Imports commented out for brevity
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostsService } from './posts/posts.service';
// Imports commented out for brevity
// Define the routes
const ROUTES = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: '*',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent // Posts Component injected here
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES) // Add routes to the app
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }