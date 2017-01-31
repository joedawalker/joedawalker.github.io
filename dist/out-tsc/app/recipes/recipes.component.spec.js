import { async, TestBed } from '@angular/core/testing';
import { RecipesComponent } from './recipes.component';
describe('RecipesComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [RecipesComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(RecipesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/josephwalker/Documents/BYUI/CIT301C/recipe-book/src/app/recipes/recipes.component.spec.js.map