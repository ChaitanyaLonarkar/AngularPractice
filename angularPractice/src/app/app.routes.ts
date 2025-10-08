import { Routes } from '@angular/router';
import { Pipestesting } from './component/pipestesting/pipestesting';
import { NewParent } from './component/new-parent/new-parent';
import { NewChild } from './component/new-child/new-child';

export const routes: Routes = [
    {
        path: 'pipe',
        component:Pipestesting
    },
    {
        path: 'parent',
        component:NewParent,
        children:[
            {
                path:'newchild/:name',
                component:NewChild
            }
        ]
    }
];
