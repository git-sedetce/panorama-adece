import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DefaultComponent } from "./layouts/default/default.component";
import { BIEducacaoComponent } from "./modules/bi-adece/bi-adece.component";
import { BIEmpreendeComponent } from "./modules/monitor-mercado/monitor-mercado.component";
import { CearaCrediComponent } from "./modules/cearacredi/cearacredi.component";
import { CoeficienteOperacionalComponent } from "./modules/noticias/noticias.component";
import { DashboardComponent } from "./modules/dashboard/dashboard.component";
import { EmpresasAtivasFdiComponent } from "./modules/imoveis/imoveis.component"
import { EmpresasEmpregoCeComponent } from "./modules/mapps-adece/mapps-adece.component"
import { EmpresasRegistradasCearaComponent } from "./modules/economia-cearense/economia-cearense.component"
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
      { path: "irv", component: IndicadoresRiscoVinculadasComponent },
      { path: "bi-adece", component: BIEducacaoComponent },
      { path: "fdif", component: FDIFinanceiroComponent },
      {
        path: "h2v",
        data: {
          url: "https://app.powerbi.com/view?r=eyJrIjoiMzAxOWFkYWUtZWVmYy00NGZlLWE0OWEtMmNkMWU2OGY1ZWI5IiwidCI6IjgwMDM1N2UwLTg5ZTctNDk4Yi04Mzg1LTczOGUxOTMyNmZkNyJ9&pageName=ReportSectionc8c7e81ac25e3b6e00ee",
        },
        component: H2VerdeComponent,
      },
      { path: "mses", component: MSESComponent },
      { path: "ncaged", component: NCagedComponent },
      {
        path: "noticias",
        component: CoeficienteOperacionalComponent,
      },
      { path: "cearacredi", component: CearaCrediComponent },
      {
        path: "indicadoresCeara", component: IndicadoresCearaComponent,
      },
      {
        path: "imoveisAdece",
        data: {
          url: "https://app.powerbi.com/view?r=eyJrIjoiZTRmZDVjNWMtMDMzOS00M2FjLWE2ZTYtYWFlOTMwZDBjOTYwIiwidCI6ImEwMGM5YWY1LWNlYzktNDM1Zi1iYWIzLTcxNWJhNjQ3M2JiNSJ9",
        },
        component: ImoveisAdeceComponent,
      },
      {
        path: "monitor-mercado",
        data: {
          url: "https://app.powerbi.com/view?r=eyJrIjoiNDU5ODU4NWItNWQ1Ny00ZDIwLTlhYTYtZWFkZDhhZDE3NTMwIiwidCI6ImEwMGM5YWY1LWNlYzktNDM1Zi1iYWIzLTcxNWJhNjQ3M2JiNSJ9",
        },
        component: BIEmpreendeComponent,
      },
      
      {
        path: "economia-cearense",
        data: {
          url: "https://app.powerbi.com/view?r=eyJrIjoiNzUxOWYzYjYtMjVmYS00YjBmLTljMDAtMzZjNTgwMWVhNDg0IiwidCI6ImEwMGM5YWY1LWNlYzktNDM1Zi1iYWIzLTcxNWJhNjQ3M2JiNSJ9",
        },
        component: EmpresasRegistradasCearaComponent,
      },      
      {
        path: "mapps-adece",
        data: {
          url: "https://app.powerbi.com/view?r=eyJrIjoiYmFkYTRhMmUtZjQwMy00YmE5LThkZmQtNzdlZWNlMjJkMzI2IiwidCI6ImEwMGM5YWY1LWNlYzktNDM1Zi1iYWIzLTcxNWJhNjQ3M2JiNSJ9&pageName=ReportSection",
        },
        component: EmpresasEmpregoCeComponent,
      },
      {
        path: "imoveis",
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
