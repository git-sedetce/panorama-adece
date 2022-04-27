import { _log } from "./shared/services/constantes";
import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { ExternalService } from "./shared/services/external.service";
import { MatDialog } from "@angular/material";
import { AccessComponent } from "./modules/access/access.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "BI - Panorama SEDET";
  numeroChamador: string;
  numeroChamado: string;
  ramalId: string;
  operador: string;
  user: any;
  userId: any;
  userName: any;
  userNick: any;
  avatar: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private service: ExternalService
  ) {
    this.service.Perfil = "";
  }

  ngOnInit() {
    //console.log('perfil', this.service.Perfil);
    //if (this.service.Perfil === null) {
    //  this.openDialog();
    //} else
    //  this.router.navigate(['fdif']);
  }

  GetParam(name): string {
    //console.log('url', window.location.href);
    const results = new RegExp("[\\?&]" + name + "=([^&#]*)").exec(
      window.location.href
    );
    if (!results) {
      return "";
    }
    return results[1] || "";
  }
}

export interface UserData {
  id: number;
  nome: string;
  matricula: string;
  ramal: string;
}
