import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebList } from './web-list';

describe('WebList', () => {
  let component: WebList;
  let fixture: ComponentFixture<WebList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
