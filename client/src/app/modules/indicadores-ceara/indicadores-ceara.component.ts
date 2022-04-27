import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { loggar } from "src/app/shared/services/constantes";

@Component({
  selector: "app-novo-caged",
  templateUrl: "./indicadores-ceara.component.html",
  styleUrls: ["./indicadores-ceara.component.scss"],
})
export class IndicadoresCearaComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {}
}
