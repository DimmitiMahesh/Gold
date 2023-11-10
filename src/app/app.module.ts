import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GeneratorComponent } from './generator/generator.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { TrendingComponent } from './trending/trending.component';
import { SportsComponent } from './sports/sports.component';
import { PoliticsComponent } from './politics/politics.component';
import { BiggbossComponent } from './biggboss/biggboss.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { RouterModule,Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies', component: MoviesComponent }, // Use 'component' with a lowercase "c"
  { path: 'trending', component: TrendingComponent }, // Use 'component' with a lowercase "c"
  { path: 'politics', component: PoliticsComponent },
  { path: 'biggboss', component: BiggbossComponent },
  { path: 'reviews', component: ReviewsComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GeneratorComponent,
    HomeComponent,
    MoviesComponent,
    TrendingComponent,
    SportsComponent,
    PoliticsComponent,
    BiggbossComponent,
    ReviewsComponent,
   
    
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    FormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatSelectModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes) ,
    MatIconModule,
    MatGridListModule,
    FlexLayoutModule
    
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
