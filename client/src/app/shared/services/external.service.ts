import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { _isNullOrEmpty, _log } from "./constantes";

@Injectable({
  providedIn: "root",
})
export class ExternalService {
  private _perfil: string;
  private _sideBarOpen: boolean;
  menu: any[];
  public get sideBarOpen(): boolean {
    return this._sideBarOpen || false;
  }
  public set sideBarOpen(value: boolean) {
    this._sideBarOpen = value;
  }
  public get Perfil(): string {
    return this._perfil || "";
  }
  public set Perfil(value: string) {
    this._perfil = value;
  }

  private _token: string;
  public get token(): string {
    return this._token;
  }
  public set token(value: string) {
    this._token = value;
  }

  headers: HttpHeaders;
  constructor(
    public httpClient: HttpClient,
    public snackBar: MatSnackBar,
    @Inject("LOCALSTORAGE") private localStorage: any
  ) {
    this.headers = new HttpHeaders();
    this.headers = this.headers.set("Content-Type", "application/json");
  }

  public httpGet(metodo: string, cnpj: string = ""): Observable<any> {
    let headers = this.getHeaders();
    if (cnpj !== "") headers = this.getHeaders("cnpj", cnpj);

    return this.httpClient.get(environment.url + metodo, { headers: headers });
  }

  public httpPost(
    metodo: string,
    body: any,
    cnpj: string = ""
  ): Observable<any> {
    let headers = this.getHeaders();
    if (cnpj !== "") headers = this.getHeaders("cnpj", cnpj);

    return this.httpClient.post(
      environment.url + metodo,
      JSON.stringify(body),
      { headers: headers }
    );
  }

  public httpPut(
    metodo: string,
    body: any,
    cnpj: string = ""
  ): Observable<any> {
    let headers = this.getHeaders();
    if (cnpj !== "") headers = this.getHeaders("cnpj", cnpj);

    return this.httpClient.put(environment.url + metodo, JSON.stringify(body), {
      headers: headers,
    });
  }

  public httpDelete(metodo: string, cnpj: string = ""): Observable<any> {
    let headers = this.getHeaders();
    if (cnpj !== "") headers = this.getHeaders("cnpj", cnpj);
    return this.httpClient.delete(environment.url + metodo, {
      headers: headers,
    });
  }

  private getLocalStorage(chave: string): any {
    return localStorage.getItem(chave);
  }
  private setLocalStorage(chave: string, value: any): void {
    localStorage.setItem(chave, value);
  }

  public setStorageObject(chave: string, valor: any): any {
    this.localStorage.setItem(chave, JSON.stringify(valor));
  }

  public getStorageObject(chave: string): any {
    return this.localStorage.getItem(chave);
  }
  private removeStorage(chave: string): any {
    this.localStorage.removeItem(chave);
  }

  getHeaders(chave: string = "", valor: string = ""): HttpHeaders {
    if (!this.headers) this.headers = new HttpHeaders();

    if (!this.headers.has("Content-Type"))
      this.headers = this.headers.set("Content-Type", "application/json");

    if (!this.headers.has("Environment")) {
      if (environment.production)
        this.headers = this.headers.set("Environment", "P");
      else if (environment.hmr)
        this.headers = this.headers.set("Environment", "H");
      else this.headers = this.headers.set("Environment", "D");
    }

    if (chave !== "") {
      if (!this.headers.has(chave)) {
        this.headers = this.headers.set(chave, valor);
        _log("add header ", chave, valor);
      } else if (this.headers.get(chave) !== valor) {
        this.headers = this.headers.set(chave, valor);
        _log("update header ", chave, valor, this.headers);
      }
    }

    // _console("getHeaders", this.headers);
    return this.headers;
  }

  public findInvalidControls(formGroup: FormGroup): any[] {
    const invalid = [];
    const controls = formGroup.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        invalid.push(name);
      }
    }
    if (invalid.length > 0) {
      let campos = "";
      invalid.forEach((element) => {
        campos += (campos === "" ? "" : "; ") + element;
      });
      this.snackBar.open(
        "Os sequintes campos são obrigatórios: " + campos,
        "Atenção",
        { duration: 5000 }
      );
    }
    return invalid;
  }
}
