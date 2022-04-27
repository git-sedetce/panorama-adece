import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { loggar } from "src/app/shared/services/constantes";

@Component({
  selector: "app-novo-caged",
  templateUrl: "./imoveis-adece.component.html",
  styleUrls: ["./imoveis-adece.component.scss"],
})
export class ImoveisAdeceComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {}
}
