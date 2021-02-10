import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pr-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  // link git
  myGit: string = 'https://github.com/bcnActivaRepositorio/ngAgenda';

// binding
linkOne:   string = 'diary';
linkTwo:   string = "contact";
linkThree: string = 'http://bulma.io';
linkFour : string ="https://github.com/BulmaTemplates/bulma-templates";
linkDan:   string = "https://github.com/dansup";
link3w:    string = "https://www.w3schools.com/angular";
linkMany:  string = "https://github.com/BulmaTemplates/bulma-templates/graphs/contributors";
linkMy:    string = "https://theclick36.com";
linkMit:   string = "http://opensource.org/licenses/mit-license.php";
linkHelp:  string = "https://medium.com/tech-insights/how-to-deploy-angular-apps-to-github-pages-gh-pages-896c4e10f9b4";


// copyright year
myYear: number | any = () =>new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
    this.burguerMe();
  }

  // The following code is based off a toggle menu by @Bradcomp
// source: https://gist.github.com/Bradcomp/a9ef2ef322a8e8017443b626208999c1
burguerMe() {
  var burger: any | Element | null = document.querySelector('.burger');
  var menu: any = document.querySelector('#'+burger.dataset.target);
  burger.addEventListener('click', function() {
      burger.classList.toggle('is-active');
      menu.classList.toggle('is-active');
  });
};

}
