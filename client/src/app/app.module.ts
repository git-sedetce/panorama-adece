import { BrowserModule } from "@angular/platform-browser";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DefaultModule } from "./layouts/default/default.module";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatTabsModule } from "@angular/material/tabs";
// import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule, MatExpansionModule, MatCheckboxModule, MatIconModule, MatSnackBarModule, MatProgressBarModule, MatDividerModule } from '@angular/material';
import { ExternalService } from "./shared/services/external.service";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";
import { OraculoDirectivesModule } from "./shared/directives/oraculo-directives";
import { MyPipesModule } from "./shared/pipes/pipes.module";
import { MaterialModulos } from "./material-modulos.module";
import { DlgMensagemModule } from "./shared/components/dlg-mensagem/dlg-mensagem.module";
import { AccessComponent } from "./modules/access/access.component";
import { DashboardService } from "./modules/dashboard.service";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatDividerModule } from "@angular/material/divider";

@NgModule({
  declarations: [AppComponent, AccessComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    OraculoDirectivesModule,
    MyPipesModule,
    MaterialModulos,
    MatFormFieldModule,
    MatSelectModule,
    MatSnackBarModule,
    MatInputModule,
    MatButtonModule,
    MatTabsModule,
    MatDialogModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatIconModule,
    DlgMensagemModule,
    MatProgressBarModule,
    MatDividerModule,
  ],
  exports: [OraculoDirectivesModule, MyPipesModule],
  entryComponents: [AccessComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    ExternalService,
    DashboardService,
    // { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    // { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: "LOCALSTORAGE", useFactory: getLocalStorage },
    { provide: MAT_DIALOG_DATA, useValue: [] },
    { provide: MatDialogRef, useValue: {} },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function getLocalStorage(): any {
  return typeof window !== "undefined" ? window.localStorage : null;
}
