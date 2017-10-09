import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouterLink } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

//import { HighlightJsModule, HighlightJsService } from 'angular2-highlight-js';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2StickyModule } from 'ng2-sticky';
import { Ng2HandySyntaxHighlighterModule } from 'ng2-handy-syntax-highlighter';

import { HomePageComponent } from '../pages/home-page/home-page.component';
import { GalleryItemComponent } from '../components/gallery-item/gallery-item.component';
import { InvolvePageComponent } from '../pages/involve-page/involve-page.component';
import { AnalysisPageComponent } from '../pages/analysis-page/analysis-page.component';
import { AboutPageComponent } from '../pages/about-page/about-page.component';
import { LivePageComponent } from '../pages/live-page/live-page.component';
import { BlogPageComponent } from '../pages/blog-page/blog-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'get-involved', component: InvolvePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'blog', component: BlogPageComponent },
  { path: 'live', component: LivePageComponent },
  { path: 'analysis/:id', component: AnalysisPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    GalleryItemComponent,
    InvolvePageComponent,
    AnalysisPageComponent,
    AboutPageComponent,
    LivePageComponent,
    BlogPageComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    Ng2StickyModule,
    RouterModule.forRoot(routes),
    HttpModule,
    Ng2HandySyntaxHighlighterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
