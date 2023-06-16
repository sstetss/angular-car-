import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './copmonents/list/list.component';
import { AddPageComponent } from './pages/add-page/add-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { LoginComponent } from './copmonents/login/login.component';
import { AddPostComponent } from './copmonents/add-post/add-post.component';
import { AdminComponent } from './copmonents/admin/admin.component';
import { AuthComponent } from './copmonents/auth/auth.component';
import { ContentComponent } from './copmonents/content/content.component';
import { FooterComponent } from './copmonents/footer/footer.component';
import { HeaderComponent } from './copmonents/header/header.component';
import { HomeComponent } from './copmonents/home/home.component';
import { LayotComponent } from './copmonents/layot/layot.component';
import { NewsLayotComponent } from './news/news-layot/news-layot.component';
import { NewsListComponent } from './news/news-list/news-list.component';
import { PostsComponent } from './news/posts/posts.component';
import { NewsDetailComponent } from './news/news-detail/news-detail.component';
import { ShowPostComponent } from './copmonents/show-post/show-post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditPostComponent } from './copmonents/edit-post/edit-post.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddPageComponent,
    HomePageComponent,
    AuthPageComponent,
    LoginComponent,
    AddPostComponent,
    AdminComponent,
    AuthComponent,
    ContentComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    LayotComponent,
    NewsLayotComponent,
    NewsListComponent,
    PostsComponent,
    NewsDetailComponent,
    ShowPostComponent,
    EditPostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
