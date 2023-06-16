import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './copmonents/content/content.component';
import { EditPostComponent } from './copmonents/edit-post/edit-post.component';
import { HomeComponent } from './copmonents/home/home.component';
import { LoginComponent } from './copmonents/login/login.component';
import { ShowPostComponent } from './copmonents/show-post/show-post.component';
import { AuthGuard } from './guards/auth.guard';
import { NewsDetailComponent } from './news/news-detail/news-detail.component';
import { PostsComponent } from './news/posts/posts.component';
import { AddPageComponent } from './pages/add-page/add-page.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {path: 'admin', component: AuthPageComponent,canActivate:[AuthGuard], children: [
    {path: '', canActivateChild: [AuthGuard],children: [
      {path: 'posts', component: PostsComponent},
      {path: 'add', component: AddPageComponent},
      {path: 'news-details/:id', component: ShowPostComponent},
      {path: 'edit-post/:id', component: EditPostComponent},
    ]}
  ]},
  {path: 'latest', component: ContentComponent},
  {path: 'news-detail/:id', component: NewsDetailComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'main', component: HomeComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
