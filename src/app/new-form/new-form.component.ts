import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  copyArrayItem,
  moveItemInArray,
} from "@angular/cdk/drag-drop";
import { MatDialog } from "@angular/material/dialog";
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.css']
})
export class NewFormComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  components: any[] = [
    {
      tittle: "Text",
      type: "input-text",
      inputType: "text",
      label: "text",
    },
    {
      tittle: "Password",
      type: "input-password",
      inputType: "password",
      label: "password",
    },
    {
      tittle: "Number",
      type: "input-number",
      inputType: "number",
      label: "number",
    },
    {
      tittle: "Check Box",
      type: "input-check",
      inputType: "checkBox",
      label: "check-box",
      displayText: "Check box",
    },
    {
      tittle: "Button",
      type: "input-button",
      inputType: "button",
      label: "button",
    },
  ];

  form: any[] = [];
  button = this.components[4];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  remove(index: any) {
    let val = this.form.indexOf(index);
    console.log(val);
    this.form.splice(val, 1);
  }

  type(html: any) {
    if (
      html.inputType === "text" ||
      html.inputType === "password" ||
      html.inputType === "number" ||
      html.inputType === "checkBox"
    ) {
      return (
        '<input type="' +
        this.components[html].inputType +
        '" placeholder= "' +
        this.components[html].label +
        '"/>'
      );
    } else {
      return (
        '<button type="' +
        this.components[html].inputType +
        '"> "' +
        this.components[html].label +
        '"</button>'
      );
    }
  }

  edit(index: any) {
    const ref = this.dialog.open(DialogComponent, {
      width: "500px",
      data: {
        label: index.label,
      },
    });
    ref.afterClosed().subscribe((result) => {
      index.label = result;
      this.form.splice(index.label, result)
      console.log(result);
      console.log("The dialog was closed");
    });
  }

  ngOnInit(): void {
  }

}