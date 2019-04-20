import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TaskNewComponent } from './restful-task/task-new/task-new.component';
import { TaskListComponent } from './restful-task/task-list/task-list.component';
import { TaskDetailsComponent } from './restful-task/task-details/task-details.component';
// import { HttpService } from './http.service';
// import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TaskNewComponent,
    TaskListComponent,
    TaskDetailsComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
