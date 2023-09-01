import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShearedModule } from '../sheared/sheared.module';
import { MaterialModule } from '../material/material.module';
import { NgChartsModule } from 'ng2-charts';

import { MainAppComponent } from './main-app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AlawiComponent } from './alawi/alawi.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { DashboardCardsComponent } from './dashboard-cards/dashboard-cards.component';
import { ChartsComponent } from './charts/charts.component';
import { QuickTransactionsComponent } from './quick-transactions/quick-transactions.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { FinancialGoalsComponent } from './financial-goals/financial-goals.component';
import { CreateProductFormComponent } from './alawi/create-product-form/create-product-form.component';
import { FundProductFormComponent } from './alawi/fund-product-form/fund-product-form.component';
import { ProductsComponent } from './alawi/products/products.component';
import { SavingsComponent } from './savings/savings.component';
import { CreateSavingsComponent } from './savings/create-savings/create-savings.component';
import { SavingsListComponent } from './savings/savings-list/savings-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    MainAppComponent,
    DashboardComponent,
    AlawiComponent,
    TransactionsComponent,
    DashboardCardsComponent,
    ChartsComponent,
    QuickTransactionsComponent,
    TransactionHistoryComponent,
    FinancialGoalsComponent,
    CreateProductFormComponent,
    FundProductFormComponent,
    ProductsComponent,
    SavingsComponent,
    CreateSavingsComponent,
    SavingsListComponent
  ],
  imports: [
    CommonModule,
    ShearedModule,
    MaterialModule,
    FormsModule,
    AppRoutingModule,
    NgChartsModule,
    FlexLayoutModule
  ]
})
export class MainAppModule { }
