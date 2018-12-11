import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatMenuModule, MatToolbarModule,
  MatIconModule, MatCardModule, MatFormFieldModule,
  MatDialogModule, MatInputModule, MatListModule, MatSidenavModule,
  MatSliderModule, MatDatepickerModule, MatNativeDateModule,
  MatSelectModule, MatSnackBarModule, MatTabsModule,
  MatChipsModule, MatCheckboxModule, MatAutocompleteModule,
  MatStepperModule, MatExpansionModule, MatTableModule
} from '@angular/material';
import { routing } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { ChefInterceptor } from './services/interceptor';

import { AppComponent } from './app.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { SearchComponent } from './search/search.component';
import { ChefsComponent } from './chef/chefs.component';
import { ChefComponent } from './chef/chef.component';
import { ChefDetailsComponent } from './chef/chef-details.component';
import { SearchResultsComponent } from './search/search-results.component';
import { ChefMenuComponent } from './menu/chef-menu.component';
import { ChefReviewsComponent } from './reviews/chef-reviews.component';
import { OrderComponent } from './orders/order.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegisterCustomerComponent } from './register/register-customer.component';
import { RegisterChefComponent } from './register/register-chef.component';
import { RegisterUserComponent } from './register/register-user.component';
import { AccountComponent } from './account/account.component';
import { ChefAccountComponent } from './account/chef-account.component';
import { CustomerAccountComponent } from './account/customer-account.component';
import { ChefSpecialitiesComponent } from './menu/chef-specialities.component';
import { ChefPreferencesComponent } from './chef/chef-preferences.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MenuItemEditComponent } from './menu-item-edit/menu-item-edit.component';
import { ChefCommentsComponent } from './chef/chef-comments/chef-comments.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { AddressComponent } from './address/address.component';
import { ConfirmationComponent } from './check-out/confirmation.component';
import { ChefOrdersComponent } from './account/chef-orders/chef-orders.component';
import { OrdersComponent } from './account/orders.component';
import { CustomerOrdersComponent } from './account/customer-orders/customer-orders.component';
import { BatchOrdersComponent } from './batch-orders/batch-orders.component';
import { CdkTableModule } from '@angular/cdk/table';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { ConverseComponent } from './conversations/converse.component';
import { SignalRModule } from 'ng2-signalr';
import { SignalRConfiguration } from 'ng2-signalr';
import { settings } from './settings/settings';
import { LoginOrRegisterComponent } from './login-or-register/login-or-register.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ChefsComponent,
    ChefComponent,
    ChefDetailsComponent,
    SearchResultsComponent,
    ChefMenuComponent,
    ChefReviewsComponent,
    OrderComponent,
    CartComponent,
    LoginComponent,
    RegisterComponent,
    RegisterCustomerComponent,
    RegisterChefComponent,
    RegisterUserComponent,
    AccountComponent,
    ChefAccountComponent,
    CustomerAccountComponent,
    ChefSpecialitiesComponent,
    ChefPreferencesComponent,
    MenuItemEditComponent,
    ChefCommentsComponent,
    CheckOutComponent,
    AddressComponent,
    ConfirmationComponent,
    ChefOrdersComponent,
    OrdersComponent,
    CustomerOrdersComponent,
    BatchOrdersComponent,
    StarRatingComponent,
    ConverseComponent,
    LoginOrRegisterComponent
  ],
  imports: [
    BrowserModule,
    routing,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatListModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatSliderModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSnackBarModule,
    MatTabsModule,
    MatChipsModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatStepperModule,
    MatExpansionModule,
    MatTableModule,
    CdkTableModule,
    HttpClientModule,
    SignalRModule.forRoot(createConfig)
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ChefInterceptor, multi: true
  }, SignalRConfiguration],
  bootstrap: [AppComponent],
  entryComponents: [SearchComponent, OrderComponent, MenuItemEditComponent, ConverseComponent, LoginOrRegisterComponent]
})
export class AppModule { }

export function createConfig(): SignalRConfiguration {
  const c = new SignalRConfiguration();
  c.hubName = 'notificationHub';
  c.url = settings.chefService;
  c.logging = true;

  // >= v5.0.0
  c.executeEventsInZone = true; // optional, default is true
  c.executeErrorsInZone = false; // optional, default is false
  c.executeStatusChangeInZone = true; // optional, default is true
  return c;
}
