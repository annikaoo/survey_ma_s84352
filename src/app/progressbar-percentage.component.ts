import { Component, Input } from "@angular/core";
import { AngularComponentFactory } from "survey-angular-ui";
import { SurveyModel, Serializer } from "survey-core";

Serializer.addProperty("survey", "progressTitle");

@Component({
    // tslint:disable-next-line:component-selector
    selector: "sv-ng-progress-buttons",
    templateUrl: "./progressbar-percentage.component.html",
    styleUrls: ["./progressbar-percentage.component.css"]
})
export class PercentageProgressBarComponent {
    @Input() model!: SurveyModel;
    get title() {
        return this.model["progressTitle"];
    }
    get value() {
        return this.model.progressValue + "%";
    }
}

AngularComponentFactory.Instance.registerComponent(
    "sv-progressbar-percentage",
    PercentageProgressBarComponent
);