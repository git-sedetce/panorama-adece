import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-access",
  templateUrl: "./access.component.html",
  styleUrls: ["./access.component.scss"],
})
export class AccessComponent implements OnInit {
  Perfil: string;
  password: string;
  constructor(
    public dialogRef: MatDialogRef<AccessComponent>,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.Perfil = "";
    this.password = "";
  }

  ngOnInit(): void {}

  onNoClick(): void {
    //console.log('Perfil', this.Perfil);
    if (this.Perfil === "Secretário" && this.password === "09ca0d509560") {
      this.dialogRef.close(this.Perfil);
    } else if (
      this.Perfil === "Técnico Sedet" &&
      this.password === "75f33e6eebce"
    ) {
      this.dialogRef.close(this.Perfil);
    } else if (
      this.Perfil === "H2V Sedet" &&
      this.password === "EquipeH2v22!"
    ) {
      this.dialogRef.close(this.Perfil);
    } else if (
      this.Perfil === "Técnico Adece" &&
      this.password === "fa0b9fff1084"
    ) {
      this.dialogRef.close(this.Perfil);
    } else if (
      this.Perfil === "Presidência" &&
      this.password === "6985d3b9419c"
    ) {
      this.dialogRef.close(this.Perfil);
    } else if (this.Perfil === "Público" && this.password === "123456") {
      this.dialogRef.close(this.Perfil);
    } else {
      this.snackBar.open(
        "A senha digitada não corresponde ao perfil selecionado",
        "Algo deu errado",
        { duration: 5000 }
      );
    }
  }
}
