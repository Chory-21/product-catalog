import { Routes } from '@angular/router';
import { AuthComponent } from './component/auth/auth.component';
import { ProductComponent } from './component/product/product.component';

export const routes: Routes = [
    {path: '', component: AuthComponent},
    {path: 'catalog', component: ProductComponent}
];
