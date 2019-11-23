import { NgModule } from "@angular/core";
import { MaterialModule } from "../material/material.module";
import { HttpClientModule } from "@angular/common/http";

const coreModules = [MaterialModule, HttpClientModule];

@NgModule({
  imports: [coreModules],
  exports: [coreModules]
})
export class CoreModule {}
