import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCardModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from './app.component';
import { CardComponent } from './dashboard/card/card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FakeApiService } from './fake-api.service';
import { HelloComponent } from './hello.component';
import { ButtonDirective } from './dashboard/card/button.diretive';
import { LoadingMessageComponent } from './dashboard/loading-message/loading-message.component';



@NgModule({
  imports:      [ 
    BrowserModule,  
    MatButtonModule, 
    MatCardModule,
    HttpClientModule,
    FlexLayoutModule, 
    MatProgressSpinnerModule,
    InMemoryWebApiModule.forRoot(FakeApiService, {delay: 5000}) 
  ],
  declarations: [ 
    AppComponent, 
    HelloComponent, 
    DashboardComponent, 
    CardComponent,
    ButtonDirective,
    LoadingMessageComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
