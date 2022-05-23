import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DefaultComponent } from "./layouts/default/default.component";
import { BIEducacaoComponent } from "./modules/bi-adece/bi-adece.component";
import { BIEmpreendeComponent } from "./modules/bi-empreende/bi-empreende.component";
import { CearaCrediComponent } from "./modules/cearacredi/cearacredi.component";
import { CoeficienteOperacionalComponent } from "./modules/coeficiente-operacional/coeficiente-operacional.component";
import { DashboardComponent } from "./modules/dashboard/dashboard.component";
import { EmpresasAtivasFdiComponent } from "./modules/empresas-ativas-fdi/eafdi.component"
import { EmpresasEmpregoCeComponent } from "./modules/empresas-emprego-ce/ee-ce.component"
import { EmpresasRegistradasCearaComponent } from "./modules/empresas-registradas-ceara/erce.component"
import { FDIFinanceiroComponent } from "./modules/fdi-financeiro/fdi-financeiro.component";
import { H2VerdeComponent } from "./modules/h2-verde/h2-verde.component"
import { ImoveisAdeceComponent } from "./modules/imoveis-adece/imoveis-adece.component";
import { IndicadoresCearaComponent } from "./modules/indicadores-ceara/indicadores-ceara.component";
import { IndicadoresFinanceirosVinculadasComponent } from "./modules/indicadores-financeiro-vinculadas/idv.component";
import { IndicadoresFinanceirosEmpresasIncentivadasComponent } from "./modules/indicadores-financeiros-empresas-incentivadas/ifei.component";
import { IndicadoresRiscoVinculadasComponent } from "./modules/indicadores-risco-vinculadas/irv.component";
import { MSESComponent } from "./modules/monitor-socio-economico-sedet/mses.component";
import { NCagedComponent } from "./modules/novo-caged/ncaged.component";
import { PostsComponent } from "./modules/posts/posts.component";

const routes: Routes = [
  {
    path: "",
    component: DefaultComponent,
    children: [
      { path: "", component: DashboardComponent },
      { path: "rmebfdi", component: PostsComponent },
      {
        path: "ifei",
        component: IndicadoresFinanceirosEmpresasIncentivadasComponent,
      },
      { path: "ifv", component: IndicadoresFinanceirosVinculadasComponent },
      { path: "fdif", component: FDIFinanceiroComponent },
      {
        path: "h2v",
        data: {
          url: "https://app.powerbi.com/view?r=eyJrIjoiNDU4ZjFmZjQtMjZiMy00NzYzLWFhZjAtOGFjOWNkMTU0OGQ4IiwidCI6ImEwMGM5YWY1LWNlYzktNDM1Zi1iYWIzLTcxNWJhNjQ3M2JiNSJ9&pageName=ReportSectione10a0dedbd6d9a0d9ca7",
        },
        component: H2VerdeComponent,
      },
      { path: "mses", component: MSESComponent },
      { path: "ncaged", component: NCagedComponent },
      {
        path: "coeficiente-operacional",
        component: CoeficienteOperacionalComponent,
      },
      { path: "cearacredi", component: CearaCrediComponent },
      {
        path: "indicadoresCeara",
        data: {
          url: "https://app.powerbi.com/view?r=eyJrIjoiZTY4OWZjOTEtYTM0ZS00NjFkLWI0N2QtMzM1Zjg2YWQ3OGZmIiwidCI6ImEwMGM5YWY1LWNlYzktNDM1Zi1iYWIzLTcxNWJhNjQ3M2JiNSJ9",
        },
        component: IndicadoresCearaComponent,
      },
      {
        path: "imoveisAdece",
        data: {
          url: "https://app.powerbi.com/view?r=eyJrIjoiZTRmZDVjNWMtMDMzOS00M2FjLWE2ZTYtYWFlOTMwZDBjOTYwIiwidCI6ImEwMGM5YWY1LWNlYzktNDM1Zi1iYWIzLTcxNWJhNjQ3M2JiNSJ9",
        },
        component: ImoveisAdeceComponent,
      },
      {
        path: "bi-empreende",
        data: {
          url: "https://app.powerbi.com/view?r=eyJrIjoiNDU5ODU4NWItNWQ1Ny00ZDIwLTlhYTYtZWFkZDhhZDE3NTMwIiwidCI6ImEwMGM5YWY1LWNlYzktNDM1Zi1iYWIzLTcxNWJhNjQ3M2JiNSJ9",
        },
        component: BIEmpreendeComponent,
      },
      {
        path: "bi-adece",
        data: {
          url: "https://app.powerbi.com/view?r=eyJrIjoiMGYzYTg2NjUtOGU2Zi00OWI2LWJjNTAtYzNlZDNiY2I0NmNjIiwidCI6ImEwMGM5YWY1LWNlYzktNDM1Zi1iYWIzLTcxNWJhNjQ3M2JiNSJ9",
        },
        component: BIEducacaoComponent,
      },
      {
        path: "erce",
        data: {
          url: "https://app.powerbi.com/view?r=eyJrIjoiNzUxOWYzYjYtMjVmYS00YjBmLTljMDAtMzZjNTgwMWVhNDg0IiwidCI6ImEwMGM5YWY1LWNlYzktNDM1Zi1iYWIzLTcxNWJhNjQ3M2JiNSJ9",
        },
        component: EmpresasRegistradasCearaComponent,
      },
      {
        path: "irv",
        data: {
          url: "https://app.powerbi.com/view?r=eyJrIjoiMGIyZWIyNzctMWIzNy00NDY1LTg0MDUtYmJkM2VkNzdiZjc4IiwidCI6ImEwMGM5YWY1LWNlYzktNDM1Zi1iYWIzLTcxNWJhNjQ3M2JiNSJ9&pageName=ReportSection41149308f403803643aa",
        },
        component: IndicadoresRiscoVinculadasComponent,
      },
      {
        path: "ee-ce",
        data: {
          url: "https://app.powerbi.com/view?r=eyJrIjoiYmFkYTRhMmUtZjQwMy00YmE5LThkZmQtNzdlZWNlMjJkMzI2IiwidCI6ImEwMGM5YWY1LWNlYzktNDM1Zi1iYWIzLTcxNWJhNjQ3M2JiNSJ9&pageName=ReportSection",
        },
        component: EmpresasEmpregoCeComponent,
      },
      {
        path: "eafdi",
        data: {
          url: "https://app.powerbi.com/view?r=eyJrIjoiNjNhMTQyNDktYzFkMy00ZGY1LTlmNjYtNDRhYzI2Mjc5OTRlIiwidCI6ImEwMGM5YWY1LWNlYzktNDM1Zi1iYWIzLTcxNWJhNjQ3M2JiNSJ9&pageName=ReportSection",
        },
        component: EmpresasAtivasFdiComponent,
      },
    ],
  },
];
/**
 * data: { schema: "Corporativo", tipo: "" },
 */

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
