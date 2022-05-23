import { AfterContentChecked, Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ExternalService } from "src/app/shared/services/external.service";

@Component({
  selector: "app-novo-caged",
  templateUrl: "./monitor-mercado.component.html",
  styleUrls: ["./monitor-mercado.component.scss"],
})
export class BIEmpreendeComponent implements OnInit {
  biurl: any;
  urlid: number;
  menu: any[];

  constructor(private route: ActivatedRoute, public services: ExternalService) {
    // this.biurl = '';
    // this.urlid = this.route.snapshot.params.id;
    // this.menu = this.services.menu;
    // this.biurl = this.menu.find(x => x.id == this.urlid);
    // document.getElementById['frameReplace'].src = this.biurl.url;
    //console.log('menu', this.menu, this.biurl, this.urlid);
    // fetch('assets/menu.json')
    //   .then(r => r.json())
    //   .then(rr => {
    //     this.menu = rr;
    //     console.log('menu', this.menu, 'biurl', this.biurl);
    //     this.biurl = this.menu.find(x => x.id == this.urlid);
    //     console.log('menu', this.menu, this.biurl, this.urlid);
    //   });
    //console.log('urlid', this.urlid);
  }

  ngOnInit() {
    // this.biurl = '';
    // this.urlid = this.route.snapshot.params.id;
    // this.menu = this.services.menu;
    //this.biurl = this.menu.find(x => x.id == this.urlid);
    // document.getElementById['frameReplace'].src = this.biurl.url;
    // console.log('menu', this.menu, this.biurl, this.urlid);
    // this.menu = this.services.menu;
    // this.biurl = this.menu.find(x => x.id == this.urlid);
    // document.getElementById['frameReplace'].src = this.biurl.url;
    // console.log('menu', this.menu, this.biurl, this.urlid);
  }
}
