import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";

import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { AgGridTableComponent } from "./ag-grid-table/ag-grid-table.component";

import { AgGridModule } from "ag-grid-angular";
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [AppComponent, AgGridTableComponent, FormComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, AgGridModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
