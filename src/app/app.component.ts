import { AfterViewInit, Component, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';

import * as ReactDOM  from 'react-dom';

import * as React from 'react';

import MyReactComponent from './myReactComponent';

@Component({
  selector: 'app-root',
  template: '<div [id]="rootId"></div>',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges, AfterViewInit, OnDestroy{
  title = 'my-app';

  public rootId = 'rootId'

  ngOnChanges(changes: SimpleChanges){
    this.render();
  }

  ngAfterViewInit() {
    this.render();
  }
  ngOnDestroy() {
   
  }
  private render (){
    ReactDOM.render(React.createElement(MyReactComponent ), document.getElementById(this.rootId))
  }
}

