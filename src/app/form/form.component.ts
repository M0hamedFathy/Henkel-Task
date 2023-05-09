import { Component, OnInit } from "@angular/core";
import { Title } from "../title.model";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { map } from "rxjs/operators";
import { TitleService } from "../title.service";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"],
  providers: [TitleService],
})
export class FormComponent implements OnInit {
  // Array of title objects
  titles: Title[] = [];

  // Form group instance
  form: FormGroup;

  // Constructor with title service injected
  constructor(private titleService: TitleService) {
    this.form = new FormGroup({
      title: new FormControl("", [
        Validators.required,
        this.validTitleSelection,
      ]),
      firstName: new FormControl("", [
        Validators.required,
        Validators.minLength(2),
      ]),
      lastName: new FormControl("", [
        Validators.required,
        Validators.minLength(2),
      ]),
      terms: new FormControl(false, Validators.requiredTrue),
    });
  }

  ngOnInit(): void {
    this._getTitles();
  }

  /**
   * Fetches titles from the title service and subscribes to the returned observable.
   * @private
   *
   * @param {void}
   * @returns {void}
   */
  private _getTitles() {
    this.titleService
      .getTitles()
      .pipe(
        // Filter and sort the titles
        map((titles) =>
          titles
            .filter((title) => title.name !== "!")
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((title, index) => {
              title.isDefault = index === 0;
              return title;
            })
        )
      )
      .subscribe((titles) => {
        // Update the titles array with the fetched titles
        this.titles = titles;
        const selectedValue = this.titles.filter((title) => title.isDefault)[0]
          .name;
        this.form.controls["title"].patchValue(selectedValue);
      });
  }

  /**
   * Validates the title selection in the dropdown.
   * @public
   *
   * @param {FormControl} control - The form control to validate.
   * @returns {object} - An object containing an error key if the validation fails.
   */
  validTitleSelection(control: FormControl): { [key: string]: boolean } | null {
    if (control.value === "" || control.value == null) {
      return { invalidSelection: true };
    }
    return null;
  }
}
