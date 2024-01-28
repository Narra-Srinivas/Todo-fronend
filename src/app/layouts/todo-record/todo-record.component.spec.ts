import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoRecordComponent } from './todo-record.component';


describe('TodoRecordComponent', () => {
  let component: TodoRecordComponent;
  let fixture: ComponentFixture<TodoRecordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoRecordComponent]
    });
    fixture = TestBed.createComponent(TodoRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
