import { Component, OnInit } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  dynamicValues = [];

  data = [
    {
      keys: "eru8ur83r",
      source: { tier: "Tier one", timestamp: "1920:3949:3949" }
    }
  ];

  ngOnInit() {}

  x(param) {
    this.dynamicValues = [];
    return this.getValueFromObject(param);
  }
  getValueFromObject(dataObj) {
    for (const prop in dataObj) {
      if (typeof dataObj[prop] === "object") {
        this.getValueFromObject(dataObj[prop]);
      } else {
        this.dynamicValues.push(prop + " : " + dataObj[prop]);
      }
    }
    return this.dynamicValues;
  }
}
