import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './auth/auth.guard';



import { AppComponent } from './app.component';
import { generalMachiningComponent } from './generalMachining/generalMachining.component';
import { DailyInfoComponent } from './generalMachining/daily-info/daily-info.component';
import { setupSheetsComponent } from './setupSheets/setupSheets.component';
import { toolReOrderComponent } from './toolReOrder/toolReOrder.component';
import { RouterModule, Routes } from '@angular/router';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SawComponent } from './saw/saw.component';
import { ButtonBarGenMachComponent } from './button-bar-gen-mach/button-bar-gen-mach.component';
import { DeburringComponent } from './deburring/deburring.component';
import { Cat50leadwellsComponent } from './cat50leadwells/cat50leadwells.component';
import { Cat40leadwellComponent } from './cat40leadwell/cat40leadwell.component';
import { CinciMillComponent } from './cinci-mill/cinci-mill.component';
import { DoosanComponent } from './doosan/doosan.component';
import { LeadwellLatheComponent } from './leadwell-lathe/leadwell-lathe.component';
import { MoriLatheComponent } from './mori-lathe/mori-lathe.component';
import { CylinderKingComponent } from './cylinder-king/cylinder-king.component';
import { RodHoneComponent } from './rod-hone/rod-hone.component';
import { PartsWashingComponent } from './parts-washing/parts-washing.component';
import { LoginHeaderComponent } from './login-header/login-header.component';
import { MainTemplateComponent } from './main-template/main-template.component';
import { LoginMainComponent } from './login-main/login-main.component';
import { AssemblyComponent } from './assembly/assembly.component';
import { EngineeringComponent } from './engineering/engineering.component';
import { HeaderComponent } from './header/header.component';
import { ENGCompressorFundamentalsComponent } from './eng-compressor-fundamentals/eng-compressor-fundamentals.component';
import { ENGCompressorFundamentalsIndexAdvancedRecipCompressorInfoComponent } from './eng-compressor-fundamentals-index-advanced-recip-compressor-info/eng-compressor-fundamentals-index-advanced-recip-compressor-info.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotauthComponent } from './forgotauth/forgotauth.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { GdAndTComponent } from './gd-and-t/gd-and-t.component';
import { MeasuringToolsComponent } from './measuring-tools/measuring-tools.component';
import { ScrollTopbtnComponent } from './scroll-topbtn/scroll-topbtn.component';
import { GeneralMachiningInfoComponent } from './general-machining-info/general-machining-info.component';
import { DailyMaintanceComponent } from './daily-maintance/daily-maintance.component';
import { BackBtnComponent } from './back-btn/back-btn.component';
import { ExamplePdfViewerComponent } from './example-pdf-viewer/example-pdf-viewer.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';




const appRoutes: Routes =[
{path: '', component: LoginMainComponent},
{path: 'header', component:HeaderComponent},
// {path: 'signup', component:SignupComponent},
{path: 'forgotauth', component: ForgotauthComponent},
{path: 'userprofile', component: UserprofileComponent, canActivate: [AuthGuard]}, 
{path: 'setupsheets', component: setupSheetsComponent, canActivate: [AuthGuard]},
{path: 'toolreorder', component: toolReOrderComponent, canActivate: [AuthGuard]},
{path: 'generalmachining', component: generalMachiningComponent, canActivate: [AuthGuard], children: [
  {path: 'daily-info', component: DailyInfoComponent, canActivate: [AuthGuard]},
]},
//{path: 'generalmachining/daily-info', component: DailyInfoComponent, canActivate: [AuthGuard]},
{path: 'generalmachining/daily-maintance', component: DailyMaintanceComponent, canActivate: [AuthGuard]},
{path: 'generalmachining/general-machining-info', component: GeneralMachiningInfoComponent, canActivate: [AuthGuard]},
{path: 'generalmachining/saw', component: SawComponent, canActivate: [AuthGuard]},
{path: 'generalmachining/deburring', component: DeburringComponent, canActivate: [AuthGuard]},
{path: 'generalmachining/partswashing', component: PartsWashingComponent, canActivate: [AuthGuard]},
{path: 'generalmachining/cat50leadwells', component: Cat50leadwellsComponent, canActivate: [AuthGuard]},
{path: 'generalmachining/cat40leadwell', component: Cat40leadwellComponent, canActivate: [AuthGuard]},
{path: 'generalmachining/cinci', component:CinciMillComponent, canActivate: [AuthGuard]},
{path: 'generalmachining/doosan', component: DoosanComponent, canActivate: [AuthGuard]},
{path: 'generalmachining/leadwell-lathe', component:LeadwellLatheComponent, canActivate: [AuthGuard]},
{path: 'generalmachining/moriseiki', component: MoriLatheComponent, canActivate: [AuthGuard]},
{path: 'generalmachining/cylinderking', component: CylinderKingComponent, canActivate: [AuthGuard]},
{path: 'generalmachining/rodhone', component: RodHoneComponent, canActivate: [AuthGuard]},
{path: 'generalmachining/gd-and-t', component: GdAndTComponent, canActivate: [AuthGuard]},
{path: 'generalmachining/measuring-tools', component: MeasuringToolsComponent, canActivate: [AuthGuard]},
{path: 'assembly', component: AssemblyComponent, canActivate: [AuthGuard]},
{path: 'engineering', component: EngineeringComponent, canActivate: [AuthGuard]},
{path: 'engineering/compressor-fundamentals-index', component: ENGCompressorFundamentalsComponent, canActivate: [AuthGuard]},
{path: 'engineering/compressor-fundamentals-index/Advanced_Recip_Compressor_Info', component:ENGCompressorFundamentalsIndexAdvancedRecipCompressorInfoComponent, canActivate: [AuthGuard]},
{path: 'view-users', component: ViewUsersComponent, canActivate: [AuthGuard]},

];


@NgModule({
  declarations: [
    AppComponent,
    generalMachiningComponent,
    setupSheetsComponent,
    toolReOrderComponent,
    UserprofileComponent,
    NavbarComponent,
    SawComponent,
    ButtonBarGenMachComponent,
    DeburringComponent,
    Cat50leadwellsComponent,
    Cat40leadwellComponent,
    CinciMillComponent,
    DoosanComponent,
    LeadwellLatheComponent,
    MoriLatheComponent,
    CylinderKingComponent,
    RodHoneComponent,
    PartsWashingComponent,
    LoginHeaderComponent,
    MainTemplateComponent,
    LoginMainComponent,
    AssemblyComponent,
    EngineeringComponent,
    HeaderComponent,
    ENGCompressorFundamentalsComponent,
    ENGCompressorFundamentalsIndexAdvancedRecipCompressorInfoComponent,
    SignupComponent,
    ForgotauthComponent,
    LoadingSpinnerComponent,
    ViewUsersComponent,
    GdAndTComponent,
    MeasuringToolsComponent,
    ScrollTopbtnComponent,
    GeneralMachiningInfoComponent,
    DailyInfoComponent,
    DailyMaintanceComponent,
    BackBtnComponent,
    ExamplePdfViewerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxExtendedPdfViewerModule
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
