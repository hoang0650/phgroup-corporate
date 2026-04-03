import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NewsComponent } from './components/news/news.component';
import { NewsDetailComponent } from './components/news-detail/news-detail.component';
import { NewsAdminComponent } from './components/news-admin/news-admin.component';
import { NewsFormComponent } from './components/news-form/news-form.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'news', component: NewsComponent },
  { path: 'news/:id', component: NewsDetailComponent },
  { path: 'admin/login', component: LoginComponent },
  { path: 'admin/news', component: NewsAdminComponent, canActivate: [AuthGuard] },
  { path: 'admin/news/new', component: NewsFormComponent, canActivate: [AuthGuard] },
  { path: 'admin/news/edit/:id', component: NewsFormComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
