import { async, TestBed } from '@angular/core/testing';
import { RecipeItemComponent } from './recipe-item.component';
describe('RecipeItemComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [RecipeItemComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(RecipeItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/josephwalker/Documents/BYUI/CIT301C/recipe-book/src/app/recipes/recipe-item.component.spec.js.map