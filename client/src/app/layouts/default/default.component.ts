import { Component, OnInit } from "@angular/core";
import { ExternalService } from "src/app/shared/services/external.service";

@Component({
  selector: "app-default",
  templateUrl: "./default.component.html",
  styleUrls: ["./default.component.scss"],
})
export class DefaultComponent implements OnInit {
  sideBarOpen: boolean;

  constructor(public service: ExternalService) {
    this.service.sideBarOpen = false;
  }

  ngOnInit() {}

  sideBarToggler() {
    this.service.sideBarOpen = !this.service.sideBarOpen;
  }
}
