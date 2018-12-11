import { ChefDetailsComponent } from './chef/chef-details.component';
import { SearchResultsComponent } from './search/search-results.component';
import { CartComponent } from './cart/cart.component';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RegisterChefComponent } from './register/register-chef.component';
import { RegisterCustomerComponent } from './register/register-customer.component';
import { AccountComponent } from './account/account.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { ConfirmationComponent } from './check-out/confirmation.component';
import { OrdersComponent } from './account/orders.component';

const routes = [
    { path: "chefDetails/:chefId/:chefName/:chefCity/:chefState", component: ChefDetailsComponent },
    { path: "searchResults/:what/:where", component: SearchResultsComponent },
    { path: "cart", component: CartComponent },
    { path: "checkOut", component: CheckOutComponent },
    { path: "register", component: RegisterComponent },
    { path: "login", component: LoginComponent },
    { path: "login/:messageId", component: LoginComponent },
    { path: "register/chef", component: RegisterChefComponent },
    { path: "register/customer", component: RegisterCustomerComponent },
    { path: "account", component: AccountComponent },
    { path: "account/orders", component: OrdersComponent },
    { path: "confirmation/:confirmationNbr", component: ConfirmationComponent }
];

export const routing = RouterModule.forRoot(routes);