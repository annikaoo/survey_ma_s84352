import { Component, OnInit, AfterViewInit  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Model, SurveyModel } from "survey-core";
import * as Survey from 'survey-core';
import { SurveyModule } from 'survey-angular-ui';
//import * as Survey from 'survey-angular-ui';
//import { json } from "./json";
//import { themeJson } from "./theme";
import "./app.component.css";
import "survey-core/defaultV2.min.css";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


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
      html: "<h6>Datenschutz- und Einwilligungserklärung</h6><br>\nDurch die Teilnahme an dieser Umfrage erklären Sie sich damit einverstanden, dass Ihre Daten gemäß dieser Datenschutz- und Einwilligungserklärung verwendet werden dürfen.<br>\n<br>1. Die Teilnahme ist freiwillig und Sie haben das Recht, Ihre Einwilligung jederzeit zu widerrufen.<br><br>\n2. Die Teilnahme ist anonym. Es werden keine Kontaktdaten oder Namen, sondern lediglich allgemeine personenbezogene Daten (Alter, Geschlecht, Beschäftigungsstatus) abgefragt, welche nicht auf Sie zurückführbar sind. Diese dienen zur weiterführenden Auswertung und Interpretation der Ergebnisse.<br><br>\n3. Alle Angaben werden selbstverständlich vertraulich behandelt und ausschließlich für interne Zwecke verwendet. Sie werden nur für den Zeitraum gespeichert, der zur Erfüllung dieser Zwecke erforderlich ist und im Anschluss auf sichere Weise vernichtet. <br><br>\nZur Ausübung Ihrer Rechte (Auskunft, Korrektur, Löschung, Widerruf, etc.) oder Fragen zur Umfrage können Sie mich unter s84352@htw-dresden.de erreichen."
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
     "rows": [
      "Interessegrad"
     ]
    }
   ],
  },
  {
    name: "page4",
    elements: [
     {
      type: "html",
      name: "question10",
      html: "<h6>Studienablauf - Teil 1</h6><br>\nIm Folgenden werden Ihnen verschiedene <b>Diagramme und beschreibende Adjektive</b> gezeigt.<br>\nZunächst wird Ihnen<b> 3s</b> lang ein <b>Diagramm</b> gezeigt. Nach Ablauf der Zeit werden 16 Adjektive aufgelistet. Entscheiden Sie innerhalb von <b>10s</b> ganz intuitiv, welche <b>Begriffe</b>, das zuvor dargestellte Diagramm Ihrer Meinung nach am besten beschreiben.<br>\nEs gibt keine Mindest- oder Maximalanzahl auszuwählender Wörter, versuchen Sie jedoch bitte <b>mindestens ein Adjektiv</b> zu wählen."
     },
     {
      type: "html",
      name: "question10_2",
      html: "<br><b>Folgende Begriffe werden zur Auswahl stehen:</b>"
     },
     {
      type: "html",
      name: "questionTest",
      html: `
      <div>
      <section  style="display: block; margin-bottom: 10px; margin-left: 87px;">
            <label for="frage11">dick</label>
            <input type="checkbox" id="f10_dick" name="f10_dick" value="dick" />
            <input type="checkbox" id="f10_dünn" name="f10_dünn" value="dünn" />
            <label for="frage12">dünn</label>
         </section>
         
         <section style="display: block; margin-bottom: 10px; margin-left: 20px;">
            <label for="frage21">symmetrisch</label>
            <input type="checkbox" id="f10_symm" name="f10_symm" value="symmetrisch" />
            <input type="checkbox" id="f10_asymm" name="f10_asymm" value="asymmetrisch" />
            <label for="frage22">asymmetrisch</label>
         </section>

         <section style="display: block; margin-bottom: 10px; margin-left: 81px;">
            <label for="frage21">bunt</label>
            <input type="checkbox" id="f10_bunt" name="f10_bunt" value="bunt" />
            <input type="checkbox" id="f10_unbunt" name="f10_unbunt" value="unbunt" />
            <label for="frage22">unbunt</label>
         </section>

         <section style="display: block; margin-bottom: 10px; margin-left: 52px;">
            <label for="frage21">komplex</label>
            <input type="checkbox" id="f10_komplex" name="f10_komplex" value="komplex" />
            <input type="checkbox" id="f10_einfach" name="f10_einfach" value="einfach" />
            <label for="frage22">einfach</label>
         </section>

         <section style="display: block; margin-bottom: 10px; margin-left: 78px;">
            <label for="frage21">eckig</label>
            <input type="checkbox" id="f10_eckig" name="f10_eckig" value="eckig" />
            <input type="checkbox" id="f10_rund" name="f10_rund" value="rund" />
            <label for="frage22">rund</label>
         </section>

         <section style="display: block; margin-bottom: 10px; margin-left: 27px;">
            <label for="frage21">harmonisch</label>
            <input type="checkbox" id="f10_harm" name="f10_harm" value="harmonisch" />
            <input type="checkbox" id="f10_chaot" name="f10_chaot" value="chaotisch" />
            <label for="frage22">chaotisch</label>
         </section>

         <section style="display: block; margin-bottom: 10px; margin-left: 81px;">
            <label for="frage21">aktiv</label>
            <input type="checkbox" id="f10_aktiv" name="f10_aktiv" value="aktiv" />
            <input type="checkbox" id="f10_passiv" name="f10_passiv" value="passiv" />
            <label for="frage22">passiv</label>
         </section>

         <section style="display: block; margin-bottom: 10px; margin-left: 81px;">
            <label for="frage21">klein</label>
            <input type="checkbox" id="f10_klein" name="f10_klein" value="klein" />
            <input type="checkbox" id="f10_groß" name="f10_groß" value="groß" />
            <label for="frage22">groß</label>
         </section>
      </div>
        `
     }
    ],
    //navigationButtonsVisibility: "hide"
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
   },   //Diagramm 1
   {
    name: "page6",
    elements: [
      {
         type: "html",
         name: "question_img1",
         html: `<img class="img1" src="../../assets/diagram1.png">`
      },
     /*{
      type: "image",
      name: "question2",
      imageLink: "../../assets/diagram1.png",
      //imageLink: "https://api.surveyjs.io/private/Surveys/files?name=24074100-7805-4083-ad2f-075d7139615f",
      imageFit: "cover",
      imageHeight: "auto",
      imageWidth: "70%"
     },*/
     /*{
      type: "html",
      name: "timer",
      html: `<div id="timerText" class="timerclass">
         {{timerText}}
      </div>`
     } */
    ]
   },
   {
    name: "page7",
    elements: [
      {
      type: "html",
      name: "question_d1_1",
      html: "<b>1. Mit welchen Begriffen lässt sich das Diagramm beschreiben?</b>"
      },
      {
      type: "html",
      name: "question_d1_2",
      html: `
      <div>
      <section  style="display: block; margin-bottom: 10px; margin-left: 87px;">
            <label for="frage11">dick</label>
            <input type="checkbox" id="d1_dick" name="d1_dick" value="dick" />
            <input type="checkbox" id="d1_dünn" name="d1_dünn" value="dünn" />
            <label for="frage12">dünn</label>
         </section>
         
         <section style="display: block; margin-bottom: 10px; margin-left: 20px;">
            <label for="frage21">symmetrisch</label>
            <input type="checkbox" id="d1_symm" name="d1_symm" value="symmetrisch" />
            <input type="checkbox" id="d1_asymm" name="d1_asymm" value="asymmetrisch" />
            <label for="frage22">asymmetrisch</label>
         </section>

         <section style="display: block; margin-bottom: 10px; margin-left: 81px;">
            <label for="frage21">bunt</label>
            <input type="checkbox" id="d1_bunt" name="d1_bunt" value="bunt" />
            <input type="checkbox" id="d1_unbunt" name="d1_unbunt" value="unbunt" />
            <label for="frage22">unbunt</label>
         </section>

         <section style="display: block; margin-bottom: 10px; margin-left: 52px;">
            <label for="frage21">komplex</label>
            <input type="checkbox" id="d1_komplex" name="d1_komplex" value="komplex" />
            <input type="checkbox" id="d1_einfach" name="d1_einfach" value="einfach" />
            <label for="frage22">einfach</label>
         </section>

         <section style="display: block; margin-bottom: 10px; margin-left: 78px;">
            <label for="frage21">eckig</label>
            <input type="checkbox" id="d1_eckig" name="d1_eckig" value="eckig" />
            <input type="checkbox" id="d1_rund" name="d1_rund" value="rund" />
            <label for="frage22">rund</label>
         </section>

         <section style="display: block; margin-bottom: 10px; margin-left: 27px;">
            <label for="frage21">harmonisch</label>
            <input type="checkbox" id="d1_harm" name="d1_harm" value="harmonisch" />
            <input type="checkbox" id="d1_chaot" name="d1_chaot" value="chaotisch" />
            <label for="frage22">chaotisch</label>
         </section>

         <section style="display: block; margin-bottom: 10px; margin-left: 81px;">
            <label for="frage21">aktiv</label>
            <input type="checkbox" id="d1_aktiv" name="d1_aktiv" value="aktiv" />
            <input type="checkbox" id="d1_passiv" name="d1_passiv" value="passiv" />
            <label for="frage22">passiv</label>
         </section>

         <section style="display: block; margin-bottom: 10px; margin-left: 81px;">
            <label for="frage21">klein</label>
            <input type="checkbox" id="d1_klein" name="d1_klein" value="klein" />
            <input type="checkbox" id="d1_groß" name="d1_groß" value="groß" />
            <label for="frage22">groß</label>
         </section>
      </div>
        `
     }
    ]
   },   //Diagramm 2
   {
    name: "page8",
    elements: [
     {
      type: "html",
      name: "question15",
      html: "<h6>Bereit für die nächste Aufgabe?</h6>Mit Klick auf <b>„Weiter“</b> wird das nächste Diagramm gezeigt. Im Anschluss sind wieder die passendsten Begriffe zu wählen."
     }
    ]
   },
   {
    name: "page9",
    elements: [
      {
         type: "html",
         name: "question_img2",
         html: `<img class="img2" src="../../assets/diagram2.png">`
      }
    ]
   },
   {
    name: "page10",
    elements: [
      {
        type: "html",
        name: "question_d2_1",
        html: "<b>2. Mit welchen Begriffen lässt sich das Diagramm beschreiben?</b>"
        },
        {
        type: "html",
        name: "question_d2_2",
        html: `
        <div>
        <section  style="display: block; margin-bottom: 10px; margin-left: 87px;">
              <label for="frage11">dick</label>
              <input type="checkbox" id="d2_dick" name="d2_dick" value="dick" />
              <input type="checkbox" id="d2_dünn" name="d2_dünn" value="dünn" />
              <label for="frage12">dünn</label>
           </section>
           
           <section style="display: block; margin-bottom: 10px; margin-left: 20px;">
              <label for="frage21">symmetrisch</label>
              <input type="checkbox" id="d2_symm" name="d2_symm" value="symmetrisch" />
              <input type="checkbox" id="d2_asymm" name="d2_asymm" value="asymmetrisch" />
              <label for="frage22">asymmetrisch</label>
           </section>
  
           <section style="display: block; margin-bottom: 10px; margin-left: 81px;">
              <label for="frage21">bunt</label>
              <input type="checkbox" id="d2_bunt" name="d2_bunt" value="bunt" />
              <input type="checkbox" id="d2_unbunt" name="d2_unbunt" value="unbunt" />
              <label for="frage22">unbunt</label>
           </section>
  
           <section style="display: block; margin-bottom: 10px; margin-left: 52px;">
              <label for="frage21">komplex</label>
              <input type="checkbox" id="d2_komplex" name="d2_komplex" value="komplex" />
              <input type="checkbox" id="d2_einfach" name="d2_einfach" value="einfach" />
              <label for="frage22">einfach</label>
           </section>
  
           <section style="display: block; margin-bottom: 10px; margin-left: 78px;">
              <label for="frage21">eckig</label>
              <input type="checkbox" id="d2_eckig" name="d2_eckig" value="eckig" />
              <input type="checkbox" id="d2_rund" name="d2_rund" value="rund" />
              <label for="frage22">rund</label>
           </section>
  
           <section style="display: block; margin-bottom: 10px; margin-left: 27px;">
              <label for="frage21">harmonisch</label>
              <input type="checkbox" id="d2_harm" name="d2_harm" value="harmonisch" />
              <input type="checkbox" id="d2_chaot" name="d2_chaot" value="chaotisch" />
              <label for="frage22">chaotisch</label>
           </section>
  
           <section style="display: block; margin-bottom: 10px; margin-left: 81px;">
              <label for="frage21">aktiv</label>
              <input type="checkbox" id="d2_aktiv" name="d2_aktiv" value="aktiv" />
              <input type="checkbox" id="d2_passiv" name="d2_passiv" value="passiv" />
              <label for="frage22">passiv</label>
           </section>
  
           <section style="display: block; margin-bottom: 10px; margin-left: 81px;">
              <label for="frage21">klein</label>
              <input type="checkbox" id="d2_klein" name="d2_klein" value="klein" />
              <input type="checkbox" id="d2_groß" name="d2_groß" value="groß" />
              <label for="frage22">groß</label>
           </section>
        </div>
          `
       }
    ]
   },   //Diagramm 3
   {
    name: "page11",
    elements: [
     {
      type: "html",
      name: "question15",
      html: "<h6>Bereit für die nächste Aufgabe?</h6>Mit Klick auf <b>„Weiter“</b> wird das nächste Diagramm gezeigt. Im Anschluss sind wieder die passendsten Begriffe zu wählen."
     }
    ]
   },
   {
    name: "page12",
    elements: [
      {
         type: "html",
         name: "question_img3",
         html: `<img class="img3" src="../../assets/diagram3.png">`
      }
    ]
   },
   {
    name: "page13",
    elements: [
      {
        type: "html",
        name: "question_d3_1",
        html: "<b>3. Mit welchen Begriffen lässt sich das Diagramm beschreiben?</b>"
        },
        {
        type: "html",
        name: "question_d3_2",
        html: `
        <div>
        <section  style="display: block; margin-bottom: 10px; margin-left: 87px;">
              <label for="frage11">dick</label>
              <input type="checkbox" id="d3_dick" name="d3_dick" value="dick" />
              <input type="checkbox" id="d3_dünn" name="d3_dünn" value="dünn" />
              <label for="frage12">dünn</label>
           </section>
           
           <section style="display: block; margin-bottom: 10px; margin-left: 20px;">
              <label for="frage21">symmetrisch</label>
              <input type="checkbox" id="d3_symm" name="d3_symm" value="symmetrisch" />
              <input type="checkbox" id="d3_asymm" name="d3_asymm" value="asymmetrisch" />
              <label for="frage22">asymmetrisch</label>
           </section>
  
           <section style="display: block; margin-bottom: 10px; margin-left: 81px;">
              <label for="frage21">bunt</label>
              <input type="checkbox" id="d3_bunt" name="d3_bunt" value="bunt" />
              <input type="checkbox" id="d3_unbunt" name="d3_unbunt" value="unbunt" />
              <label for="frage22">unbunt</label>
           </section>
  
           <section style="display: block; margin-bottom: 10px; margin-left: 52px;">
              <label for="frage21">komplex</label>
              <input type="checkbox" id="d3_komplex" name="d3_komplex" value="komplex" />
              <input type="checkbox" id="d3_einfach" name="d3_einfach" value="einfach" />
              <label for="frage22">einfach</label>
           </section>
  
           <section style="display: block; margin-bottom: 10px; margin-left: 78px;">
              <label for="frage21">eckig</label>
              <input type="checkbox" id="d3_eckig" name="d3_eckig" value="eckig" />
              <input type="checkbox" id="d3_rund" name="d3_rund" value="rund" />
              <label for="frage22">rund</label>
           </section>
  
           <section style="display: block; margin-bottom: 10px; margin-left: 27px;">
              <label for="frage21">harmonisch</label>
              <input type="checkbox" id="d3_harm" name="d3_harm" value="harmonisch" />
              <input type="checkbox" id="d3_chaot" name="d3_chaot" value="chaotisch" />
              <label for="frage22">chaotisch</label>
           </section>
  
           <section style="display: block; margin-bottom: 10px; margin-left: 81px;">
              <label for="frage21">aktiv</label>
              <input type="checkbox" id="d3_aktiv" name="d3_aktiv" value="aktiv" />
              <input type="checkbox" id="d3_passiv" name="d3_passiv" value="passiv" />
              <label for="frage22">passiv</label>
           </section>
  
           <section style="display: block; margin-bottom: 10px; margin-left: 81px;">
              <label for="frage21">klein</label>
              <input type="checkbox" id="d3_klein" name="d3_klein" value="klein" />
              <input type="checkbox" id="d3_groß" name="d3_groß" value="groß" />
              <label for="frage22">groß</label>
           </section>
        </div>
          `
       }
    ]
   },   //Diagramm 4
   {
    name: "page14",
    elements: [
     {
      type: "html",
      name: "question15",
      html: "<h6>Bereit für die nächste Aufgabe?</h6>Mit Klick auf <b>„Weiter“</b> wird das nächste Diagramm gezeigt. Im Anschluss sind wieder die passendsten Begriffe zu wählen."
     }
    ]
   },
   {
    name: "page15",
    elements: [
      {
         type: "html",
         name: "question_img4",
         html: `<img class="img4" src="../../assets/diagram4.png">`
      }
    ]
   },
   {
    name: "page16",
    elements: [
      {
        type: "html",
        name: "question_d4_1",
        html: "<b>4. Mit welchen Begriffen lässt sich das Diagramm beschreiben?</b>"
        },
        {
        type: "html",
        name: "question_d4_2",
        html: `
        <div>
        <section  style="display: block; margin-bottom: 10px; margin-left: 87px;">
              <label for="frage11">dick</label>
              <input type="checkbox" id="d4_dick" name="d4_dick" value="dick" />
              <input type="checkbox" id="d4_dünn" name="d4_dünn" value="dünn" />
              <label for="frage12">dünn</label>
           </section>
           
           <section style="display: block; margin-bottom: 10px; margin-left: 20px;">
              <label for="frage21">symmetrisch</label>
              <input type="checkbox" id="d4_symm" name="d4_symm" value="symmetrisch" />
              <input type="checkbox" id="d4_asymm" name="d4_asymm" value="asymmetrisch" />
              <label for="frage22">asymmetrisch</label>
           </section>
  
           <section style="display: block; margin-bottom: 10px; margin-left: 81px;">
              <label for="frage21">bunt</label>
              <input type="checkbox" id="d4_bunt" name="d4_bunt" value="bunt" />
              <input type="checkbox" id="d4_unbunt" name="d4_unbunt" value="unbunt" />
              <label for="frage22">unbunt</label>
           </section>
  
           <section style="display: block; margin-bottom: 10px; margin-left: 52px;">
              <label for="frage21">komplex</label>
              <input type="checkbox" id="d4_komplex" name="d4_komplex" value="komplex" />
              <input type="checkbox" id="d4_einfach" name="d4_einfach" value="einfach" />
              <label for="frage22">einfach</label>
           </section>
  
           <section style="display: block; margin-bottom: 10px; margin-left: 78px;">
              <label for="frage21">eckig</label>
              <input type="checkbox" id="d4_eckig" name="d4_eckig" value="eckig" />
              <input type="checkbox" id="d4_rund" name="d4_rund" value="rund" />
              <label for="frage22">rund</label>
           </section>
  
           <section style="display: block; margin-bottom: 10px; margin-left: 27px;">
              <label for="frage21">harmonisch</label>
              <input type="checkbox" id="d4_harm" name="d4_harm" value="harmonisch" />
              <input type="checkbox" id="d4_chaot" name="d4_chaot" value="chaotisch" />
              <label for="frage22">chaotisch</label>
           </section>
  
           <section style="display: block; margin-bottom: 10px; margin-left: 81px;">
              <label for="frage21">aktiv</label>
              <input type="checkbox" id="d4_aktiv" name="d4_aktiv" value="aktiv" />
              <input type="checkbox" id="d4_passiv" name="d4_passiv" value="passiv" />
              <label for="frage22">passiv</label>
           </section>
  
           <section style="display: block; margin-bottom: 10px; margin-left: 81px;">
              <label for="frage21">klein</label>
              <input type="checkbox" id="d4_klein" name="d4_klein" value="klein" />
              <input type="checkbox" id="d4_groß" name="d4_groß" value="groß" />
              <label for="frage22">groß</label>
           </section>
        </div>
          `
       }
    ]
   },   //Diagramm 5
   {
    name: "page17",
    elements: [
     {
      type: "html",
      name: "question15",
      html: "<h6>Bereit für die nächste Aufgabe?</h6>Mit Klick auf <b>„Weiter“</b> wird das nächste Diagramm gezeigt. Im Anschluss sind wieder die passendsten Begriffe zu wählen."
     }
    ]
   },
   {
    name: "page18",
    elements: [
      {
         type: "html",
         name: "question_img5",
         html: `<img class="img5" src="../../assets/diagram5.png">`
      }
    ]
   },
   {
    name: "page19",
    elements: [
      {
        type: "html",
        name: "question_d5_1",
        html: "<b>5. Mit welchen Begriffen lässt sich das Diagramm beschreiben?</b>"
        },
        {
        type: "html",
        name: "question_d5_2",
        html: `
        <div>
        <section  style="display: block; margin-bottom: 10px; margin-left: 87px;">
              <label for="frage11">dick</label>
              <input type="checkbox" id="d5_dick" name="d5_dick" value="dick" />
              <input type="checkbox" id="d5_dünn" name="d5_dünn" value="dünn" />
              <label for="frage12">dünn</label>
           </section>
           
           <section style="display: block; margin-bottom: 10px; margin-left: 20px;">
              <label for="frage21">symmetrisch</label>
              <input type="checkbox" id="d5_symm" name="d5_symm" value="symmetrisch" />
              <input type="checkbox" id="d5_asymm" name="d5_asymm" value="asymmetrisch" />
              <label for="frage22">asymmetrisch</label>
           </section>
  
           <section style="display: block; margin-bottom: 10px; margin-left: 81px;">
              <label for="frage21">bunt</label>
              <input type="checkbox" id="d5_bunt" name="d5_bunt" value="bunt" />
              <input type="checkbox" id="d5_unbunt" name="d5_unbunt" value="unbunt" />
              <label for="frage22">unbunt</label>
           </section>
  
           <section style="display: block; margin-bottom: 10px; margin-left: 52px;">
              <label for="frage21">komplex</label>
              <input type="checkbox" id="d5_komplex" name="d5_komplex" value="komplex" />
              <input type="checkbox" id="d5_einfach" name="d5_einfach" value="einfach" />
              <label for="frage22">einfach</label>
           </section>
  
           <section style="display: block; margin-bottom: 10px; margin-left: 78px;">
              <label for="frage21">eckig</label>
              <input type="checkbox" id="d5_eckig" name="d5_eckig" value="eckig" />
              <input type="checkbox" id="d5_rund" name="d5_rund" value="rund" />
              <label for="frage22">rund</label>
           </section>
  
           <section style="display: block; margin-bottom: 10px; margin-left: 27px;">
              <label for="frage21">harmonisch</label>
              <input type="checkbox" id="d5_harm" name="d5_harm" value="harmonisch" />
              <input type="checkbox" id="d5_chaot" name="d5_chaot" value="chaotisch" />
              <label for="frage22">chaotisch</label>
           </section>
  
           <section style="display: block; margin-bottom: 10px; margin-left: 81px;">
              <label for="frage21">aktiv</label>
              <input type="checkbox" id="d5_aktiv" name="d5_aktiv" value="aktiv" />
              <input type="checkbox" id="d5_passiv" name="d5_passiv" value="passiv" />
              <label for="frage22">passiv</label>
           </section>
  
           <section style="display: block; margin-bottom: 10px; margin-left: 81px;">
              <label for="frage21">klein</label>
              <input type="checkbox" id="d5_klein" name="d5_klein" value="klein" />
              <input type="checkbox" id="d5_groß" name="d5_groß" value="groß" />
              <label for="frage22">groß</label>
           </section>
        </div>
          `
       }
    ]
   },   //Diagramm 6
   {
    name: "page20",
    elements: [
     {
      type: "html",
      name: "question15",
      html: "<h6>Bereit für die nächste Aufgabe?</h6>Mit Klick auf <b>„Weiter“</b> wird das nächste Diagramm gezeigt. Im Anschluss sind wieder die passendsten Begriffe zu wählen."
     }
    ]
   },
   {
    name: "page21",
    elements: [
      {
         type: "html",
         name: "question_img6",
         html: `<img class="img6" src="../../assets/diagram6.png">`
      }
    ]
   },
   {
    name: "page22",
    elements: [
      {
        type: "html",
        name: "question_d6_1",
        html: "<b>6. Mit welchen Begriffen lässt sich das Diagramm beschreiben?</b>"
        },
        {
        type: "html",
        name: "question_d6_2",
        html: `
        <div>
        <section  style="display: block; margin-bottom: 10px; margin-left: 87px;">
              <label for="frage11">dick</label>
              <input type="checkbox" id="d6_dick" name="d6_dick" value="dick" />
              <input type="checkbox" id="d6_dünn" name="d6_dünn" value="dünn" />
              <label for="frage12">dünn</label>
           </section>
           
           <section style="display: block; margin-bottom: 10px; margin-left: 20px;">
              <label for="frage21">symmetrisch</label>
              <input type="checkbox" id="d6_symm" name="d6_symm" value="symmetrisch" />
              <input type="checkbox" id="d6_asymm" name="d6_asymm" value="asymmetrisch" />
              <label for="frage22">asymmetrisch</label>
           </section>
  
           <section style="display: block; margin-bottom: 10px; margin-left: 81px;">
              <label for="frage21">bunt</label>
              <input type="checkbox" id="d6_bunt" name="d6_bunt" value="bunt" />
              <input type="checkbox" id="d6_unbunt" name="d6_unbunt" value="unbunt" />
              <label for="frage22">unbunt</label>
           </section>
  
           <section style="display: block; margin-bottom: 10px; margin-left: 52px;">
              <label for="frage21">komplex</label>
              <input type="checkbox" id="d6_komplex" name="d6_komplex" value="komplex" />
              <input type="checkbox" id="d6_einfach" name="d6_einfach" value="einfach" />
              <label for="frage22">einfach</label>
           </section>
  
           <section style="display: block; margin-bottom: 10px; margin-left: 78px;">
              <label for="frage21">eckig</label>
              <input type="checkbox" id="d6_eckig" name="d6_eckig" value="eckig" />
              <input type="checkbox" id="d6_rund" name="d6_rund" value="rund" />
              <label for="frage22">rund</label>
           </section>
  
           <section style="display: block; margin-bottom: 10px; margin-left: 27px;">
              <label for="frage21">harmonisch</label>
              <input type="checkbox" id="d6_harm" name="d6_harm" value="harmonisch" />
              <input type="checkbox" id="d6_chaot" name="d6_chaot" value="chaotisch" />
              <label for="frage22">chaotisch</label>
           </section>
  
           <section style="display: block; margin-bottom: 10px; margin-left: 81px;">
              <label for="frage21">aktiv</label>
              <input type="checkbox" id="d6_aktiv" name="d6_aktiv" value="aktiv" />
              <input type="checkbox" id="d6_passiv" name="d6_passiv" value="passiv" />
              <label for="frage22">passiv</label>
           </section>
  
           <section style="display: block; margin-bottom: 10px; margin-left: 81px;">
              <label for="frage21">klein</label>
              <input type="checkbox" id="d6_klein" name="d6_klein" value="klein" />
              <input type="checkbox" id="d6_groß" name="d6_groß" value="groß" />
              <label for="frage22">groß</label>
           </section>
        </div>
          `
       }
    ]
   },   //Diagramm 7
   {
    name: "page23",
    elements: [
     {
      type: "html",
      name: "question15",
      html: "<h6>Bereit für die nächste Aufgabe?</h6>Mit Klick auf <b>„Weiter“</b> wird das nächste Diagramm gezeigt. Im Anschluss sind wieder die passendsten Begriffe zu wählen."
     }
    ]
   },
   {
    name: "page24",
    elements: [
      {
         type: "html",
         name: "question_img7",
         html: `<img class="img7" src="../../assets/diagram7.png">`
      }
    ]
   },
   {
    name: "page25",
    elements: [
      {
        type: "html",
        name: "question_d7_1",
        html: "<b>7. Mit welchen Begriffen lässt sich das Diagramm beschreiben?</b>"
        },
        {
        type: "html",
        name: "question_d7_2",
        html: `
        <div>
        <section  style="display: block; margin-bottom: 10px; margin-left: 87px;">
              <label for="frage11">dick</label>
              <input type="checkbox" id="d7_dick" name="d7_dick" value="dick" />
              <input type="checkbox" id="d7_dünn" name="d7_dünn" value="dünn" />
              <label for="frage12">dünn</label>
           </section>
           
           <section style="display: block; margin-bottom: 10px; margin-left: 20px;">
              <label for="frage21">symmetrisch</label>
              <input type="checkbox" id="d7_symm" name="d7_symm" value="symmetrisch" />
              <input type="checkbox" id="d7_asymm" name="d7_asymm" value="asymmetrisch" />
              <label for="frage22">asymmetrisch</label>
           </section>
  
           <section style="display: block; margin-bottom: 10px; margin-left: 81px;">
              <label for="frage21">bunt</label>
              <input type="checkbox" id="d7_bunt" name="d7_bunt" value="bunt" />
              <input type="checkbox" id="d7_unbunt" name="d7_unbunt" value="unbunt" />
              <label for="frage22">unbunt</label>
           </section>
  
           <section style="display: block; margin-bottom: 10px; margin-left: 52px;">
              <label for="frage21">komplex</label>
              <input type="checkbox" id="d7_komplex" name="d7_komplex" value="komplex" />
              <input type="checkbox" id="d7_einfach" name="d7_einfach" value="einfach" />
              <label for="frage22">einfach</label>
           </section>
  
           <section style="display: block; margin-bottom: 10px; margin-left: 78px;">
              <label for="frage21">eckig</label>
              <input type="checkbox" id="d7_eckig" name="d7_eckig" value="eckig" />
              <input type="checkbox" id="d7_rund" name="d7_rund" value="rund" />
              <label for="frage22">rund</label>
           </section>
  
           <section style="display: block; margin-bottom: 10px; margin-left: 27px;">
              <label for="frage21">harmonisch</label>
              <input type="checkbox" id="d7_harm" name="d7_harm" value="harmonisch" />
              <input type="checkbox" id="d7_chaot" name="d7_chaot" value="chaotisch" />
              <label for="frage22">chaotisch</label>
           </section>
  
           <section style="display: block; margin-bottom: 10px; margin-left: 81px;">
              <label for="frage21">aktiv</label>
              <input type="checkbox" id="d7_aktiv" name="d7_aktiv" value="aktiv" />
              <input type="checkbox" id="d7_passiv" name="d7_passiv" value="passiv" />
              <label for="frage22">passiv</label>
           </section>
  
           <section style="display: block; margin-bottom: 10px; margin-left: 81px;">
              <label for="frage21">klein</label>
              <input type="checkbox" id="d7_klein" name="d7_klein" value="klein" />
              <input type="checkbox" id="d7_groß" name="d7_groß" value="groß" />
              <label for="frage22">groß</label>
           </section>
        </div>
          `
       }
    ]
   },   //Diagramm 8
   {
    name: "page26",
    elements: [
     {
      type: "html",
      name: "question15",
      html: "<h6>Bereit für die nächste Aufgabe?</h6>Mit Klick auf <b>„Weiter“</b> wird das nächste Diagramm gezeigt. Im Anschluss sind wieder die passendsten Begriffe zu wählen."
     }
    ]
   },
   {
    name: "page27",
    elements: [
      {
         type: "html",
         name: "question_img8",
         html: `<img class="img8" src="../../assets/diagram8.png">`
      }
    ]
   },
   {
    name: "page28",
    elements: [
      {
        type: "html",
        name: "question_d8_1",
        html: "<b>8. Mit welchen Begriffen lässt sich das Diagramm beschreiben?</b>"
        },
        {
        type: "html",
        name: "question_d8_2",
        html: `
        <div>
        <section  style="display: block; margin-bottom: 10px; margin-left: 87px;">
              <label for="frage11">dick</label>
              <input type="checkbox" id="d8_dick" name="d8_dick" value="dick" />
              <input type="checkbox" id="d8_dünn" name="d8_dünn" value="dünn" />
              <label for="frage12">dünn</label>
           </section>
           
           <section style="display: block; margin-bottom: 10px; margin-left: 20px;">
              <label for="frage21">symmetrisch</label>
              <input type="checkbox" id="d8_symm" name="d8_symm" value="symmetrisch" />
              <input type="checkbox" id="d8_asymm" name="d8_asymm" value="asymmetrisch" />
              <label for="frage22">asymmetrisch</label>
           </section>
  
           <section style="display: block; margin-bottom: 10px; margin-left: 81px;">
              <label for="frage21">bunt</label>
              <input type="checkbox" id="d8_bunt" name="d8_bunt" value="bunt" />
              <input type="checkbox" id="d8_unbunt" name="d8_unbunt" value="unbunt" />
              <label for="frage22">unbunt</label>
           </section>
  
           <section style="display: block; margin-bottom: 10px; margin-left: 52px;">
              <label for="frage21">komplex</label>
              <input type="checkbox" id="d8_komplex" name="d8_komplex" value="komplex" />
              <input type="checkbox" id="d8_einfach" name="d8_einfach" value="einfach" />
              <label for="frage22">einfach</label>
           </section>
  
           <section style="display: block; margin-bottom: 10px; margin-left: 78px;">
              <label for="frage21">eckig</label>
              <input type="checkbox" id="d8_eckig" name="d8_eckig" value="eckig" />
              <input type="checkbox" id="d8_rund" name="d8_rund" value="rund" />
              <label for="frage22">rund</label>
           </section>
  
           <section style="display: block; margin-bottom: 10px; margin-left: 27px;">
              <label for="frage21">harmonisch</label>
              <input type="checkbox" id="d8_harm" name="d8_harm" value="harmonisch" />
              <input type="checkbox" id="d8_chaot" name="d8_chaot" value="chaotisch" />
              <label for="frage22">chaotisch</label>
           </section>
  
           <section style="display: block; margin-bottom: 10px; margin-left: 81px;">
              <label for="frage21">aktiv</label>
              <input type="checkbox" id="d8_aktiv" name="d8_aktiv" value="aktiv" />
              <input type="checkbox" id="d8_passiv" name="d8_passiv" value="passiv" />
              <label for="frage22">passiv</label>
           </section>
  
           <section style="display: block; margin-bottom: 10px; margin-left: 81px;">
              <label for="frage21">klein</label>
              <input type="checkbox" id="d8_klein" name="d8_klein" value="klein" />
              <input type="checkbox" id="d8_groß" name="d8_groß" value="groß" />
              <label for="frage22">groß</label>
           </section>
        </div>
          `
       }
    ]
   },   //Diagramm 9
   {
    name: "page29",
    elements: [
     {
      type: "html",
      name: "question15",
      html: "<h6>Bereit für die nächste Aufgabe?</h6>Mit Klick auf <b>„Weiter“</b> wird das nächste Diagramm gezeigt. Im Anschluss sind wieder die passendsten Begriffe zu wählen."
     }
    ]
   },
   {
    name: "page30",
    elements: [
      {
         type: "html",
         name: "question_img9",
         html: `<img class="img9" src="../../assets/diagram9.png">`
      }
    ]
   },
   {
    name: "page31",
    elements: [
      {
        type: "html",
        name: "question_d9_1",
        html: "<b>9. Mit welchen Begriffen lässt sich das Diagramm beschreiben?</b>"
        },
        {
        type: "html",
        name: "question_d9_2",
        html: `
        <div>
        <section  style="display: block; margin-bottom: 10px; margin-left: 87px;">
              <label for="frage11">dick</label>
              <input type="checkbox" id="d9_dick" name="d9_dick" value="dick" />
              <input type="checkbox" id="d9_dünn" name="d9_dünn" value="dünn" />
              <label for="frage12">dünn</label>
           </section>
           
           <section style="display: block; margin-bottom: 10px; margin-left: 20px;">
              <label for="frage21">symmetrisch</label>
              <input type="checkbox" id="d9_symm" name="d9_symm" value="symmetrisch" />
              <input type="checkbox" id="d9_asymm" name="d9_asymm" value="asymmetrisch" />
              <label for="frage22">asymmetrisch</label>
           </section>
  
           <section style="display: block; margin-bottom: 10px; margin-left: 81px;">
              <label for="frage21">bunt</label>
              <input type="checkbox" id="d9_bunt" name="d9_bunt" value="bunt" />
              <input type="checkbox" id="d9_unbunt" name="d9_unbunt" value="unbunt" />
              <label for="frage22">unbunt</label>
           </section>
  
           <section style="display: block; margin-bottom: 10px; margin-left: 52px;">
              <label for="frage21">komplex</label>
              <input type="checkbox" id="d9_komplex" name="d9_komplex" value="komplex" />
              <input type="checkbox" id="d9_einfach" name="d9_einfach" value="einfach" />
              <label for="frage22">einfach</label>
           </section>
  
           <section style="display: block; margin-bottom: 10px; margin-left: 78px;">
              <label for="frage21">eckig</label>
              <input type="checkbox" id="d9_eckig" name="d9_eckig" value="eckig" />
              <input type="checkbox" id="d9_rund" name="d9_rund" value="rund" />
              <label for="frage22">rund</label>
           </section>
  
           <section style="display: block; margin-bottom: 10px; margin-left: 27px;">
              <label for="frage21">harmonisch</label>
              <input type="checkbox" id="d9_harm" name="d9_harm" value="harmonisch" />
              <input type="checkbox" id="d9_chaot" name="d9_chaot" value="chaotisch" />
              <label for="frage22">chaotisch</label>
           </section>
  
           <section style="display: block; margin-bottom: 10px; margin-left: 81px;">
              <label for="frage21">aktiv</label>
              <input type="checkbox" id="d9_aktiv" name="d9_aktiv" value="aktiv" />
              <input type="checkbox" id="d9_passiv" name="d9_passiv" value="passiv" />
              <label for="frage22">passiv</label>
           </section>
  
           <section style="display: block; margin-bottom: 10px; margin-left: 81px;">
              <label for="frage21">klein</label>
              <input type="checkbox" id="d9_klein" name="d9_klein" value="klein" />
              <input type="checkbox" id="d9_groß" name="d9_groß" value="groß" />
              <label for="frage22">groß</label>
           </section>
        </div>
          `
       }
    ]
   },   //Diagramm 10
   {
    name: "page32",
    elements: [
     {
      type: "html",
      name: "question15",
      html: "<h6>Bereit für die nächste Aufgabe?</h6>Mit Klick auf <b>„Weiter“</b> wird das nächste Diagramm gezeigt. Im Anschluss sind wieder die passendsten Begriffe zu wählen."
     }
    ]
   },
   {
    name: "page33",
    elements: [
      {
         type: "html",
         name: "question_img10",
         html: `<img class="img10" src="../../assets/diagram10.png">`
      }
    ]
   },
   {
    name: "page34",
    elements: [
      {
        type: "html",
        name: "question_d10_1",
        html: "<b>10. Mit welchen Begriffen lässt sich das Diagramm beschreiben?</b>"
        },
        {
        type: "html",
        name: "question_d10_2",
        html: `
        <div>
        <section  style="display: block; margin-bottom: 10px; margin-left: 87px;">
              <label for="frage11">dick</label>
              <input type="checkbox" id="d10_dick" name="d10_dick" value="dick" />
              <input type="checkbox" id="d10_dünn" name="d10_dünn" value="dünn" />
              <label for="frage12">dünn</label>
           </section>
           
           <section style="display: block; margin-bottom: 10px; margin-left: 20px;">
              <label for="frage21">symmetrisch</label>
              <input type="checkbox" id="d10_symm" name="d10_symm" value="symmetrisch" />
              <input type="checkbox" id="d10_asymm" name="d10_asymm" value="asymmetrisch" />
              <label for="frage22">asymmetrisch</label>
           </section>
  
           <section style="display: block; margin-bottom: 10px; margin-left: 81px;">
              <label for="frage21">bunt</label>
              <input type="checkbox" id="d10_bunt" name="d10_bunt" value="bunt" />
              <input type="checkbox" id="d10_unbunt" name="d10_unbunt" value="unbunt" />
              <label for="frage22">unbunt</label>
           </section>
  
           <section style="display: block; margin-bottom: 10px; margin-left: 52px;">
              <label for="frage21">komplex</label>
              <input type="checkbox" id="d10_komplex" name="d10_komplex" value="komplex" />
              <input type="checkbox" id="d10_einfach" name="d10_einfach" value="einfach" />
              <label for="frage22">einfach</label>
           </section>
  
           <section style="display: block; margin-bottom: 10px; margin-left: 78px;">
              <label for="frage21">eckig</label>
              <input type="checkbox" id="d10_eckig" name="d10_eckig" value="eckig" />
              <input type="checkbox" id="d10_rund" name="d10_rund" value="rund" />
              <label for="frage22">rund</label>
           </section>
  
           <section style="display: block; margin-bottom: 10px; margin-left: 27px;">
              <label for="frage21">harmonisch</label>
              <input type="checkbox" id="d10_harm" name="d10_harm" value="harmonisch" />
              <input type="checkbox" id="d10_chaot" name="d10_chaot" value="chaotisch" />
              <label for="frage22">chaotisch</label>
           </section>
  
           <section style="display: block; margin-bottom: 10px; margin-left: 81px;">
              <label for="frage21">aktiv</label>
              <input type="checkbox" id="d10_aktiv" name="d10_aktiv" value="aktiv" />
              <input type="checkbox" id="d10_passiv" name="d10_passiv" value="passiv" />
              <label for="frage22">passiv</label>
           </section>
  
           <section style="display: block; margin-bottom: 10px; margin-left: 81px;">
              <label for="frage21">klein</label>
              <input type="checkbox" id="d10_klein" name="d10_klein" value="klein" />
              <input type="checkbox" id="d10_groß" name="d10_groß" value="groß" />
              <label for="frage22">groß</label>
           </section>
        </div>
          `
       }
    ]
   },   //Anfang Teil 2 der Studie
   {
    name: "page35",
    elements: [
     {
      type: "html",
      name: "question18",
      html: "<h6>Studienablauf - Teil 2</h6><br>\nNun werden Ihnen die Diagramme erneut gezeigt. <b>Bewerten</b> Sie diese bitte anhand der <b>vorgegebenen Kriterien</b>. Bei dieser Aufgabe gibt es <b>keine Zeitbeschränkung</b>."
     }
    ]
   },   //Bewertung Diagramm 1

   {
    name: "page36",
    elements: [
      {
         type: "html",
         name: "question_img1_2",
         html: `<img class="img1" src="../../assets/diagram1.png">`
      },
     {
      type: "matrix",
      name: "question20",
      title: "Inwieweit stimmen Sie zu, dass sich das Diagramm mit folgenden Worten beschreiben lässt?",
      isRequired: true,
      requiredErrorText: "Wählen Sie bitte für jede Eigenschaft einen Wert.",
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
      ],
      isAllRowRequired: true
     }
    ]
   },   //Bewertung Diagramm 2
   {
    name: "page37",
    elements: [
      {
         type: "html",
         name: "question_img2_2",
         html: `<img class="img2" src="../../assets/diagram2.png">`
      },
     {
      type: "matrix",
      name: "question22",
      title: "Inwieweit stimmen Sie zu, dass sich das Diagramm mit folgenden Worten beschreiben lässt?",
      isRequired: true,
      requiredErrorText: "Wählen Sie bitte für jede Eigenschaft einen Wert.",
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
      ],
      isAllRowRequired: true
     }
    ]
   },   //Bewertung Diagramm 3
   {
    name: "page38",
    elements: [
      {
         type: "html",
         name: "question_img3_2",
         html: `<img class="img3" src="../../assets/diagram3.png">`
      },
     {
      type: "matrix",
      name: "question24",
      title: "Inwieweit stimmen Sie zu, dass sich das Diagramm mit folgenden Worten beschreiben lässt?",
      isRequired: true,
      requiredErrorText: "Wählen Sie bitte für jede Eigenschaft einen Wert.",
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
      ],
      isAllRowRequired: true
     }
    ]
   },   //Bewertung Diagramm 4
   {
    name: "page38",
    elements: [
      {
         type: "html",
         name: "question_img4_2",
         html: `<img class="img4" src="../../assets/diagram4.png">`
      },
     {
      type: "matrix",
      name: "question26",
      title: "Inwieweit stimmen Sie zu, dass sich das Diagramm mit folgenden Worten beschreiben lässt?",
      isRequired: true,
      requiredErrorText: "Wählen Sie bitte für jede Eigenschaft einen Wert.",
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
      ],
      isAllRowRequired: true
     }
    ]
   },   //Bewertung Diagramm 5
   {
    name: "page39",
    elements: [
      {
         type: "html",
         name: "question_img5_2",
         html: `<img class="img5" src="../../assets/diagram5.png">`
      },
     {
      type: "matrix",
      name: "question28",
      title: "Inwieweit stimmen Sie zu, dass sich das Diagramm mit folgenden Worten beschreiben lässt?",
      isRequired: true,
      requiredErrorText: "Wählen Sie bitte für jede Eigenschaft einen Wert.",
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
      ],
      isAllRowRequired: true
     }
    ]
   },   //Bewertung Diagramm 6
   {
    name: "page40",
    elements: [
      {
         type: "html",
         name: "question_img6_2",
         html: `<img class="img6" src="../../assets/diagram6.png">`
      },
     {
      type: "matrix",
      name: "question30",
      title: "Inwieweit stimmen Sie zu, dass sich das Diagramm mit folgenden Worten beschreiben lässt?",
      isRequired: true,
      requiredErrorText: "Wählen Sie bitte für jede Eigenschaft einen Wert.",
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
      ],
      isAllRowRequired: true
     }
    ]
   },   //Bewrtung Diagramm 7
   {
    name: "page41",
    elements: [
      {
         type: "html",
         name: "question_img7_2",
         html: `<img class="img7" src="../../assets/diagram7.png">`
      },
     {
      type: "matrix",
      name: "question32",
      title: "Inwieweit stimmen Sie zu, dass sich das Diagramm mit folgenden Worten beschreiben lässt?",
      isRequired: true,
      requiredErrorText: "Wählen Sie bitte für jede Eigenschaft einen Wert.",
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
      ],
      isAllRowRequired: true
     }
    ]
   },   //Bewertung Diagramm 8
   {
    name: "page42",
    elements: [
      {
         type: "html",
         name: "question_img8_2",
         html: `<img class="img8" src="../../assets/diagram8.png">`
      },
     {
      type: "matrix",
      name: "question34",
      title: "Inwieweit stimmen Sie zu, dass sich das Diagramm mit folgenden Worten beschreiben lässt?",
      isRequired: true,
      requiredErrorText: "Wählen Sie bitte für jede Eigenschaft einen Wert.",
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
      ],
      isAllRowRequired: true
     }
    ]
   },   //Bewertung Diagramm 9
   {
    name: "page43",
    elements: [
      {
         type: "html",
         name: "question_img9_2",
         html: `<img class="img9" src="../../assets/diagram9.png">`
      },
     {
      type: "matrix",
      name: "question36",
      title: "Inwieweit stimmen Sie zu, dass sich das Diagramm mit folgenden Worten beschreiben lässt?",
      isRequired: true,
      requiredErrorText: "Wählen Sie bitte für jede Eigenschaft einen Wert.",
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
      ],
      isAllRowRequired: true
     }
    ]
   },   //Bewertung Diagramm 10
   {
    name: "page44",
    elements: [
      {
         type: "html",
         name: "question_img10_2",
         html: `<img class="img10" src="../../assets/diagram10.png">`
      },
     {
      type: "matrix",
      name: "question38",
      title: "Inwieweit stimmen Sie zu, dass sich das Diagramm mit folgenden Worten beschreiben lässt?",
      isRequired: true,
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
      ],
      isAllRowRequired: true
     }
    ]
   },
   {
    name: "page45",
    elements: [
     {
      type: "html",
      name: "question39",
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
  imports: [RouterOutlet, SurveyModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
}
)

export class AppComponent implements OnInit, AfterViewInit {
  surveyModel: Model | undefined;
  title = 'survey_ma_s84352';
  timerText: string = "3";

  //constructor(private cdr: ChangeDetectorRef) {} 

   showTimer: boolean = false;

  ngOnInit(): void {
    const survey = new Model(surveyJson);
    //survey.applyTheme(themeJson);
    survey.onComplete.add((sender, options) => {
      console.log(JSON.stringify(sender.data, null, 3));
    });
    this.surveyModel = survey;
    
    survey.onCurrentPageChanged.add( (sender, options) => {
      console.log(survey.currentPage.name);

      /*if((survey.currentPage.name === 'page6') || (survey.currentPage.name === 'page9')) {
         if (this.runTimer(3)) {
            survey.nextPage();
         }
      }*/
      if((survey.currentPage.name === 'page6') || (survey.currentPage.name === 'page9')) {
            this.runTimer(3, () => {   
            survey.nextPage();
         });
      }
      else if ((survey.currentPage.name === 'page7') || (survey.currentPage.name === 'page10')) {
         this.runTimer(10, () => {
            survey.nextPage();
         });
      }
      /*else if ((survey.currentPage.name === 'page7') || (survey.currentPage.name === 'page10')) {
         this.timerText = "10";
         this.showTimer = true;
         let secondsLeft = 10;
         const timerInterval = setInterval(() => {
            secondsLeft--;
            if(secondsLeft<=0) {
               clearInterval(timerInterval);
               console.log("timer finish");
               survey.nextPage();
            } else {
               this.timerText = `${secondsLeft}`;
            }
           }, 1000);
      }*/
      else {
         this.showTimer = false;
      }
    });
  }
  
  runTimer(secondsLeft: number, callback: () => void): void {
   this.timerText = secondsLeft.toString();
   this.showTimer = true;
   
   const timerInterval = setInterval(() => {
       secondsLeft--;
       if (secondsLeft <= 0) {
           clearInterval(timerInterval);
           console.log("timer finish");
           callback(); // Hier wird die nächste Seite aufgerufen, wenn die Zeit abgelaufen ist
       } else {
           this.timerText = `${secondsLeft}`;
       }
   }, 1000);
}

  /*runTimer(secondsLeft: number): boolean {
   this.timerText = secondsLeft.toString();
   this.showTimer = true;
   let finished = false;
   const timerInterval = setInterval(() => {
      secondsLeft--;
      if(secondsLeft<=0) {
         clearInterval(timerInterval);
         console.log("timer finish");
         finished = true;
      } else {
         this.timerText = `${secondsLeft}`;
         finished = false;
      }
     }, 1000);
   return finished;
  }*/

  ngAfterViewInit(): void {
     
  }

  /*runTimer() {

  }*/

  /*pageChange(pageChange: SurveyModel, event: Survey.CurrentPageChangedEvent) {
    //setTimeout(pageChange.doComplete(), 3000);
    setTimeout(nextPage(), 3000);
    Survey.nextPage();

  }

  survey.onCurrentPageChanging.add(function (_, options)) {
    setTimeout(survey.onCurrentPageChanging = options.newCurrentPage);
  }
  surveyJson.startTimer(3000);*/
  
}

/*surveyJson.onCurrentPageChanged.add((sender, options)) => {
  
  }

function nextPage(): () => void {
  throw new Error('Function not implemented.');
}*/

