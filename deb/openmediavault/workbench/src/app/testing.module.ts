import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgModule } from '@angular/core';
import { MATERIAL_SANITY_CHECKS } from '@angular/material/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

@NgModule({
  imports: [HttpClientTestingModule, NoopAnimationsModule, RouterTestingModule],
  exports: [RouterTestingModule],
  providers: [
    // Disable sanity checks to prevent warning messages in unit tests.
    // https://github.com/thymikee/jest-preset-angular/issues/83
    // https://github.com/angular/components/pull/4178
    { provide: MATERIAL_SANITY_CHECKS, useValue: false }
  ]
})
export class TestingModule {}
