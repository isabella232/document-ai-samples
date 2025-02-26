/**
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint new-cap: ["error", { "capIsNew": false }]*/

import { Component } from "@angular/core";
import { DataSharingServiceService } from "./data-sharing-service.service";
import { Router } from "@angular/router";

declare var backendURL: string;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
/**
 * AppComponent sets title and backendURL
 */
export class AppComponent {
  title = "Document AI Modular App";
  sharingClient = new DataSharingServiceService();
  public static backendURL = "";
}
