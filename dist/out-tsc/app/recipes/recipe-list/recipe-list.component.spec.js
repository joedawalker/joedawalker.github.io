import { async, TestBed } from '@angular/core/testing';
import { RecipeListComponent } from './recipe-list.component';
describe('RecipeListComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [RecipeListComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(RecipeListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/josephwalker/Documents/BYUI/CIT301C/recipe-book/src/app/recipes/recipe-list/recipe-list.component.spec.js.map