import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component'

export const AppRouting: Routes = [
    {
        path: "",
        component: LayoutComponent,
        children: [
            {
                path: "",
                redirectTo: "unicode",
                pathMatch: "full"
            },
            {
                path: "unicode",                
                loadChildren: "./pages/unicode/unicode.module#UnicodeModule",
            }
        ]
    }
]