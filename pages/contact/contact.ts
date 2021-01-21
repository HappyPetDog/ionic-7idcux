import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

@Component({
  selector: "page-contact",
  templateUrl: "contact.html",
  styleUrls: ['contact.css']

})

export class ContactPage {
  gender: string;
  activity_level: string;
  dciMessage: string;
  height: number;
  weight: number;
  age: number;
  bmr: number;
  dci: number;

  constructor(public navCtrl: NavController) {}
  calculateDCI() {
    if (
      this.age >= 18 &&
      this.gender == "m" &&
      this.activity_level == "sedentary"
    ) {
      this.bmr = 10 * this.weight + 6.25 * this.height - 5 * this.age + 5;
      this.dci = this.bmr * 1.2;
      this.dci = parseFloat(this.dci.toFixed(0));
      this.dciMessage = "Your Daily Calorie Intake is: ";
    } else if (
      this.age >= 18 &&
      this.gender == "f" &&
      this.activity_level == "sedentary"
    ) {
      this.bmr = 10 * this.weight + 6.25 * this.height - 5 * this.age - 161;
      this.dci = this.bmr * 1.2;
      this.dci = parseFloat(this.dci.toFixed(0));
      this.dciMessage = "Your Daily Calorie Intake is: ";
    } else if (
      this.age >= 18 &&
      this.gender == "m" &&
      this.activity_level == "slightly_active"
    ) {
      this.bmr = 10 * this.weight + 6.25 * this.height - 5 * this.age + 5;
      this.dci = this.bmr * 1.4;
      this.dci = parseFloat(this.dci.toFixed(0));
      this.dciMessage = "Your Daily Calorie Intake is: ";
    } else if (
      this.age >= 18 &&
      this.gender == "f" &&
      this.activity_level == "slightly_active"
    ) {
      this.bmr = 10 * this.weight + 6.25 * this.height - 5 * this.age - 161;
      this.dci = this.bmr * 1.4;
      this.dci = parseFloat(this.dci.toFixed(0));
      this.dciMessage = "Your Daily Calorie Intake is: ";
    } else if (
      this.age >= 18 &&
      this.gender == "m" &&
      this.activity_level == "moderately_active"
    ) {
      this.bmr = 10 * this.weight + 6.25 * this.height - 5 * this.age + 5;
      this.dci = this.bmr * 1.6;
      this.dci = parseFloat(this.dci.toFixed(0));
      this.dciMessage = "Your Daily Calorie Intake is: ";
    } else if (
      this.age >= 18 &&
      this.gender == "f" &&
      this.activity_level == "moderately_active"
    ) {
      this.bmr = 10 * this.weight + 6.25 * this.height - 5 * this.age - 161;
      this.dci = this.bmr * 1.6;
      this.dci = parseFloat(this.dci.toFixed(0));
      this.dciMessage = "Your Daily Calorie Intake is: ";
    } else if (
      this.age >= 18 &&
      this.gender == "m" &&
      this.activity_level == "very_active"
    ) {
      this.bmr = 10 * this.weight + 6.25 * this.height - 5 * this.age + 5;
      this.dci = this.bmr * 1.75;
      this.dci = parseFloat(this.dci.toFixed(0));
      this.dciMessage = "Your Daily Calorie Intake is: ";
    } else if (
      this.age >= 18 &&
      this.gender == "f" &&
      this.activity_level == "very_active"
    ) {
      this.bmr = 10 * this.weight + 6.25 * this.height - 5 * this.age - 161;
      this.dci = this.bmr * 1.75;
      this.dci = parseFloat(this.dci.toFixed(0));
      this.dciMessage = "Your Daily Calorie Intake is: ";
    } else if (
      this.age >= 18 &&
      this.gender == "m" &&
      this.activity_level == "extra_active"
    ) {
      this.bmr = 10 * this.weight + 6.25 * this.height - 5 * this.age + 5;
      this.dci = this.bmr * 2.0;
      this.dci = parseFloat(this.dci.toFixed(0));
      this.dciMessage = "Your Daily Calorie Intake is: ";
    } else if (
      this.age >= 18 &&
      this.gender == "f" &&
      this.activity_level == "extra_active"
    ) {
      this.bmr = 10 * this.weight + 6.25 * this.height - 5 * this.age - 161;
      this.dci = this.bmr * 2.0;
      this.dci = parseFloat(this.dci.toFixed(0));
      this.dciMessage = "Your Daily Calorie Intake is: ";
    } else if (
      this.age >= 18 &&
      this.gender == "m" &&
      this.activity_level == "professional"
    ) {
      this.bmr = 10 * this.weight + 6.25 * this.height - 5 * this.age + 5;
      this.dci = this.bmr * 2.3;
      this.dci = parseFloat(this.dci.toFixed(0));
      this.dciMessage = "Your Daily Calorie Intake is: ";
    } else if (
      this.age >= 18 &&
      this.gender == "f" &&
      this.activity_level == "professional"
    ) {
      this.bmr = 10 * this.weight + 6.25 * this.height - 5 * this.age - 161;
      this.dci = this.bmr * 2.3;
      this.dci = parseFloat(this.dci.toFixed(0));
      this.dciMessage = "Your Daily Calorie Intake is: ";
    } else {
      this.dciMessage =
        "This Daily Calorie Intake Calculator is only for 18 years old and above.";
      this.dci = 0;
    }
  }
}
