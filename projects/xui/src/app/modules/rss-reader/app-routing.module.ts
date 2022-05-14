import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FeedComponent} from './feed/feed.component';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
    {
        path: ':id',
        component: FeedComponent
    },
    {
        path: '',
        component: HomeComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
