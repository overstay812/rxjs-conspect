import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StreamComponent } from './components/stream/stream.component';
import { SubjectComponent } from './components/subject/subject.component';
import { OperatorComponent } from './components/operator/operator.component';

@NgModule({
  declarations: [AppComponent, StreamComponent, SubjectComponent, OperatorComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
