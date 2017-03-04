import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {CartComponent} from "./cart.component";
import {Router} from "@angular/router";

let routerStub;

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async(() => {
    routerStub = {
      navigate: jasmine.createSpy('navigate')
    };
    TestBed
      .configureTestingModule({
        declarations: [CartComponent],
        providers: [{provide: Router, useValue: routerStub}],
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
