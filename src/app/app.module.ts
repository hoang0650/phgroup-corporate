import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NewsComponent } from './components/news/news.component';
import { NewsDetailComponent } from './components/news-detail/news-detail.component';
import { NewsAdminComponent } from './components/news-admin/news-admin.component';
import { NewsFormComponent } from './components/news-form/news-form.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    NewsComponent,
    NewsDetailComponent,
    NewsAdminComponent,
    NewsFormComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
