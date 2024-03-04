import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Model, SurveyModel } from "survey-core";
import * as Survey from 'survey-core';
import { SurveyModule } from 'survey-angular-ui';
//import * as Survey from 'survey-angular-ui';
//import { json } from "./json";
//import { themeJson } from "./theme";
import "./app.component.css";
import "survey-core/defaultV2.min.css";

const surveyJson = {
  title: "Begriffsverständnis in der Informationsvisualisierung",
  description: "\n",
  logo: "https://api.surveyjs.io/private/Surveys/files?name=eec41128-7c5c-40c7-bd6a-47ef1be0ba73",
  logoPosition: "right",
  pages: [
   { name: "page1",
    elements: [
     {
      type: "html",
      name: "question3",
      html: "<h6>Herzlich willkommen!</h6><br>\nMein Name ist <b>Annika Hoffmann</b>. Im Rahmen meiner Masterarbeit führe ich eine Umfrage zum Thema <b>„Begriffsverständnis in der Informationsvisualisierung“</b> durch. Diese Masterarbeit ist Teil des Studienganges <b>Angewandte Informatik</b> mit Schwerpunkt Medieninformatik an der <b>HTW Dresden</b> und wird durch das Team der <b>Technischen Visualistik</b> betreut.<br>\n<br>\nDie Umfrage wird voraussichtlich <b>10-15 min</b> in Anspruch nehmen.<br><br>\nBei Fragen oder Anmerkungen kontaktieren Sie mich gerne unter folgender E-Mailadresse:<br>\ns84352@htw-dresden.de\n"
     }
    ]
   },
   {
    name: "page2",
    elements: [
     {
      type: "html",
      name: "question4",
      html: "<h6>Datenschutz- und Einwilligungserklärung</h6><br>\nDurch die Teilnahme an dieser Umfrage erklären Sie sich damit einverstanden, dass Ihre Daten gemäß dieser Datenschutz- und Einwilligungserklärung verwendet werden dürfen.<br>\n<br>1. Die Teilnahme ist freiwillig und Sie haben das Recht, Ihre Einwilligung jederzeit zu widerrufen.<br><br>\n2. Innerhalb der Umfrage werden keine Kontaktdaten oder Namen, aber allgemeine personenbezogene Daten (Alter, Geschlecht, Beschäftigungsstatus) abgefragt. Diese dienen zur weiterführenden Auswertung und Interpretation der Ergebnisse.<br><br>\n3. Alle Angaben werden selbstverständlich vertraulich behandelt und ausschließlich für interne Zwecke verwendet. Sie werden nur für den Zeitraum gespeichert, der zur Erfüllung dieser Zwecke erforderlich ist und im Anschluss auf sichere Weise vernichtet. <br><br>\nZur Ausübung Ihrer Rechte (Auskunft, Korrektur, Löschung, Widerruf, etc.) oder Fragen zur Umfrage können Sie mich unter s84352@htw-dresden.de erreichen."
     },
     {
      type: "radiogroup",
      name: "question5",
      title: "Datenschutzerklärung",
      hideNumber: true,
      isRequired: true,
      requiredErrorText: "Bitte stimmen Sie der Datenschutzerklärung zu, um fortzufahren.",
      validators: [
       {
        type: "expression",
        text: "Bitte stimmen Sie der Datenschutzerklärung zu, um fortzufahren.",
        "expression": "{question5} = 'Item 3'"
       }
      ],
      choices: [
       {
        value: "Item 2",
        text: "Ablehnen"
       },
       {
        value: "Item 3",
        text: "Annehmen"
       }
      ]
     }
    ]
   },
   {
    name: "page3",
    elements: [
     {
      type: "html",
      name: "question6",
      html: "<h6>Demographische Daten</h6><br>\nBitte geben Sie die im Folgenden genannten demographischen Informationen an. Diese sind hilfreich, um die Umfrageergebnisse besser analysieren zu können.\n"
     },
     {
      type: "text",
      name: "question7",
      title: "Alter",
      hideNumber: true,
      isRequired: true,
      inputType: "number",
      min: 1,
      step: 1
     },
     {
      type: "radiogroup",
      name: "question8",
      title: "Geschlecht",
      hideNumber: true,
      isRequired: true,
      choices: [
       {
        value: "Item 1",
        text: "männlich"
       },
       {
        value: "Item 2",
        text: "weiblich"
       },
       {
        value: "Item 3",
        text: "divers"
       }
      ]
     },
     {
      type: "radiogroup",
      name: "question9",
      title: "Tätigkeit",
      hideNumber: true,
      isRequired: true,
      choices: [
       {
        value: "Item 1",
        text: "Student:in"
       },
       {
        value: "Item 2",
        text: "Auszubildende:r"
       },
       {
        value: "Item 4",
        text: "Schüler:in"
       },
       {
        value: "Item 3",
        text: "Berufstätig"
       },
       {
        value: "Item 5",
        text: "Arbeitssuchend"
       }
      ],
      showOtherItem: true,
      noneText: "Keine der oben genannten",
      otherText: "Sonstige Tätigkeit:"
     },
     {
      type: "matrix",
      name: "question21",
      title: "Wie hoch ist Ihr Interesse zum Thema Umwelt?",
      hideNumber: true,
      isRequired: true,
      columns: [
       "hohes Interesse",
       "Interesse",
       "neutral",
       "kein Interesse",
       "Desinteresse"
      ],
      rows: [
       "Interessegrad"
      ]
     }
    ]
   },
   {
    name: "page4",
    elements: [
     {
      type: "html",
      name: "question10",
      html: "<h6>Studienablauf - Teil 1</h6><br>\nIm Folgenden werden Ihnen verschiedene <b>Diagramme und beschreibende Adjektive</b> gezeigt.<br>\nZunächst wird Ihnen<b> 3s</b> lang ein <b>Diagramm</b> gezeigt. Nach Ablauf der Zeit werden 16 Adjektive aufgelistet. Wählen Sie bitte innerhalb von <b>10s</b> die <b>Begriffe</b> aus, die das zuvor dargestellte Diagramm Ihrer Meinung nach am besten beschreiben.<br>\nDie Anzahl der gewählten Wörter spielt dabei keine Rolle - es gibt keine Mindest- oder Maximalanzahl auszuwählender Wörter."
     },
     {
      type: "checkbox",
      name: "question14",
      title: "Folgende Begriffe werden zur Auswahl stehen:",
      hideNumber: true,
      "choices": [
       {
        value: "Item 1",
        text: "dick"
       },
       {
        value: "Item 2",
        text: "dünn"
       },
       {
        value: "Item 3",
        text: "symmetrisch"
       },
       {
        value: "Item 4",
        text: "asymmetrisch"
       },
       {
        value: "Item 5",
        text: "bunt"
       },
       {
        value: "Item 6",
        text: "unbunt"
       },
       {
        value: "Item 7",
        text: "komplex"
       },
       {
        value: "Item 8",
        text: "einfach"
       },
       {
        value: "Item 9",
        text: "eckig"
       },
       {
        value: "Item 10",
        text: "rund"
       },
       {
        value: "Item 11",
        text: "harmonisch"
       },
       {
        value: "Item 12",
        text: "chaotisch"
       },
       {
        value: "Item 13",
        text: "aktiv"
       },
       {
        value: "Item 14",
        text: "passiv"
       },
       {
        value: "Item 15",
        text: "klein"
       },
       {
        value: "Item 16",
        text: "groß"
       }
      ]
     }
    ]
   },
   {
    name: "page5",
    elements: [
     {
      type: "html",
      name: "question13",
      html: "Mit Klick auf <b>„Weiter“</b> beginnt die Studie und das erste Diagramm wird gezeigt."
     }
    ]
   },
   {
    name: "page6",
    elements: [
     {
      type: "file",
      name: "question2",
      title: "Diagramm"
     }
    ]
   },
   {
    name: "page7",
    elements: [
     {
      type: "checkbox",
      name: "question1",
      title: "Mit welchen Begriffen lässt sich das Diagramm beschreiben?",
      choices: [
       {
        value: "Item 1",
        text: "dick"
       },
       {
        value: "Item 2",
        text: "dünn"
       },
       {
        value: "Item 3",
        text: "symmetrisch"
       },
       {
        value: "Item 4",
        text: "asymmetrisch"
       },
       {
        value: "Item 5",
        text: "bunt"
       },
       {
        value: "Item 6",
        text: "unbunt"
       },
       {
        value: "Item 7",
        text: "komplex"
       },
       {
        value: "Item 8",
        text: "einfach"
       },
       {
        value: "Item 9",
        text: "eckig"
       },
       {
        value: "Item 10",
        text: "rund"
       },
       {
        value: "Item 11",
        text: "harmonisch"
       },
       {
        value: "Item 12",
        text: "chaotisch"
       },
       {
        value: "Item 13",
        text: "aktiv"
       },
       {
        value: "Item 14",
        text: "passiv"
       },
       {
        value: "Item 15",
        text: "klein"
       },
       {
        value: "Item 16",
        text: "groß"
       }
      ]
     }
    ]
   },
   {
    name: "page8",
    elements: [
     {
      type: "html",
      name: "question15",
      html: "<h6>Bereit für die nächste Aufgabe?</h6><br>\nMit Klick auf <b>„Weiter“</b> wird das nächste Diagramm gezeigt. Im Anschluss sind wieder die passendsten Begriffe zu wählen."
     }
    ]
   },
   {
    name: "page9",
    elements: [
     {
      type: "file",
      name: "question16",
      title: "Diagramm"
     }
    ]
   },
   {
    name: "page10",
    elements: [
     {
      type: "checkbox",
      name: "question17",
      title: "Mit welchen Begriffen lässt sich das Diagramm beschreiben?",
      "choices": [
       {
        value: "Item 1",
        text: "dick"
       },
       {
        value: "Item 2",
        text: "dünn"
       },
       {
        value: "Item 3",
        text: "symmetrisch"
       },
       {
        value: "Item 4",
        text: "asymmetrisch"
       },
       {
        value: "Item 5",
        text: "bunt"
       },
       {
        value: "Item 6",
        text: "unbunt"
       },
       {
        value: "Item 7",
        text: "komplex"
       },
       {
        value: "Item 8",
        text: "einfach"
       },
       {
        value: "Item 9",
        text: "eckig"
       },
       {
        value: "Item 10",
        text: "rund"
       },
       {
        value: "Item 11",
        text: "harmonisch"
       },
       {
        value: "Item 12",
        text: "chaotisch"
       },
       {
        value: "Item 13",
        text: "aktiv"
       },
       {
        value: "Item 14",
        text: "passiv"
       },
       {
        value: "Item 15",
        text: "klein"
       },
       {
        value: "Item 16",
        text: "groß"
       }
      ]
     }
    ]
   },
   {
    name: "page11",
    elements: [
     {
      type: "html",
      name: "question18",
      html: "<h6>Studienablauf - Teil 2</h6><br>\nNun werden Ihnen die Diagramme erneut gezeigt. <b>Bewerten</b> Sie diese bitte anhand der <b>vorgegebenen Kriterien</b>. Bei dieser Aufgabe gibt es <b>keine Zeitbeschränkung</b>."
     }
    ]
   },
   {
    name: "page12",
    elements: [
     {
      type: "file",
      name: "question20",
      title: "Diagramm"
     },
     {
      type: "matrix",
      name: "question19",
      title: "Inwieweit stimmen Sie zu, dass sich das Diagramm mit folgenden Worten beschreiben lässt?",
      "columns": [
       {
        value: "Column 1",
        text: "1 - stimme überhaupt nicht zu"
       },
       {
        value: "Column 2",
        text: "2"
       },
       {
        value: "Column 3",
        text: "3"
       },
       {
        value: "Column 4",
        text: "4"
       },
       {
        value: "Column 5",
        text: "5"
       },
       {
        value: "Column 6",
        text: "6"
       },
       {
        value: "Column 7",
        text: "7 - stimme voll und ganz zu"
       }
      ],
      "rows": [
       {
        value: "Row 1",
        text: "erfreulich"
       },
       {
        value: "Row 2",
        text: "sympathisch"
       },
       {
        value: "Row 3",
        text: "angenehm"
       },
       {
        value: "Row 4",
        text: "nett"
       },
       {
        value: "Row 5",
        text: "ansprechend"
       }
      ]
     }
    ]
   },
   {
    name: "page13",
    elements: [
     {
      type: "html",
      name: "question12",
      html: "<h6>Vielen Dank für Ihre Teilnahme!</h6><br>\nHerzlichen Dank, dass Sie sich die Zeit genommen haben, an dieser Studie teilzunehmen.<br>\nBei weiteren Fragen oder Anmerkungen, zögern Sie nicht, mich unter folgender E-Mailadresse zu kontaktieren:<br>\ns84352@htw-dresden.de"
     }
    ]
   }
  ],
  showProgressBar: "bottom",
  firstPageIsStarted: true,
  //maxTimeToFinish: 25,
  //maxTimeToFinishPage: 10,
  //showTimerPanel: "top"
 }

@Component({
  selector: 'app-root',
  //selector: "component-survey",
  standalone: true,
  imports: [RouterOutlet, SurveyModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  surveyModel: Model | undefined;
  title = 'survey_ma_s84352';

  ngOnInit(): void {
    const survey = new Model(surveyJson);
    //survey.applyTheme(themeJson);
    survey.onComplete.add((sender, options) => {
      console.log(JSON.stringify(sender.data, null, 3));
    });
    this.surveyModel = survey;
  }

  pageChange(pageChange: SurveyModel) {
    
  }
}

