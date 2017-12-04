import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import 'prismjs';
import 'prismjs/components/prism-python';

@Component({
  selector: 'app-analysis-page',
  templateUrl: './analysis-page.component.html',
  styleUrls: ['./analysis-page.component.css']
})
export class AnalysisPageComponent implements OnInit, OnDestroy {

  id: string;
  private sub: any;

  loaded: boolean = false;

  data;
  code: string;
  description: string;

  step: string = 'result';

  analyses: Array<{
    image: string,
    name: string,
    id: string,
    data: string,
    code: string,
    result: {
      image: string,
      description: string
    }
  }>;
  selectedAnalysis: {
    image: string,
    name: string,
    id: string,
    data: string,
    code: string,
    result: {
      image: string,
      description: string
    }
  };

  constructor(private route: ActivatedRoute,
    private el: ElementRef,
    private http: Http) {

  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];

      /**
     * Get all the analyses
     */
      this.http
        .get('./assets/analyses/analyses.json')
        .map((res: Response) => res.json()).subscribe(
        (res) => {
          this.analyses = res;

          for (let i = 0; i < this.analyses.length; i++) {
            if (this.analyses[i].id == this.id) {
              this.selectedAnalysis = this.analyses[i];
              this.loaded = true;
              break;
            }
          }
        },
        (error) => console.log(error)
        );

      /**
       * Get the analysis data
       */
      this.http
        .get('./assets/analyses-data/' + this.id + '.csv')
        .map((res: Response) => res.text()).subscribe(
        (res: string) => {
          this.displayTable(res);

        },
        (error) => console.log(error)
        );

      /**
       * Get the analysis code
       */
      this.http
        .get('./assets/analyses-code/' + this.id + '.py')
        .map((res: Response) => res.text()).subscribe(
        (res: string) => {
          this.code = res;

        },
        (error) => console.log(error)
        );

      /**
      * Get the analysis result description
      */
      this.http
        .get('./assets/analyses-result/description/' + this.id + '.txt')
        .map((res: Response) => res.text()).subscribe(
        (res: string) => {
          this.description = res;

        },
        (error) => console.log(error)
        );

    });

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  displayTable(allText) {
    // split content based on new line
    var allTextLines = allText.split("\n");
    var headers = allTextLines[0].split(',');
    var lines = [];

    for (var i = 0; i < allTextLines.length; i++) {
      // split content based on comma
      var data = allTextLines[i].split(',');
      if (data.length == headers.length) {
        var tarr = [];
        for (var j = 0; j < headers.length; j++) {
          i < 11 ? tarr.push(data[j]) : tarr.push('...');
        }
        lines.push(tarr);
      }

      if (i == 11) {
        break;
      }
    }
    this.data = lines;
  };

  isNumber(text: string) {
    return parseFloat(text);
  }

  isValidDate(dateString: string) {
    var minDate = new Date('1970-01-01 00:00:01');
    var maxDate = new Date('2100-01-01 00:00:01');
    var date = new Date(dateString);
    return date > minDate && date < maxDate;
  }

  reload() {
    this.id = null;
    this.sub = null;
    this.code = null;
    this.data = null;

    this.ngOnInit();
  }

}
