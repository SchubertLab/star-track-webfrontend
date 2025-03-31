/* tslint:disable:no-unused-variable */
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { ToolbarComponent } from '../../../../core/components/toolbar/toolbar.component';
import { SharedModule } from '../../../../shared/shared.module';
import { EditedUserProfileComponent } from './EditedUserProfile.component';


describe('EditedUserProfileComponent', () => {

  let component: EditedUserProfileComponent;
  let fixture: ComponentFixture<EditedUserProfileComponent>;

  beforeEach(async(() => {
    const courseServiceSpy = jasmine.createSpyObj('id', [
      1,
    ]);
    TestBed.configureTestingModule({

      imports: [
        HttpClientTestingModule,
        SharedModule,
        RouterTestingModule,
      ],
      declarations: [EditedUserProfileComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {},
        },
        ToolbarComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(EditedUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

/*   it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.currentUser.id).toBe(1)
  }); */
});
