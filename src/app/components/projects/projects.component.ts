import { Component, OnInit } from '@angular/core';
import { Project } from '../../project';
import { ProjectService } from '../../project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[]=[];
  error = '';
  success = '';
  cellToShow = 4;

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.getProjects();
    if (window.innerWidth < 600){this.cellToShow = 1;}
    if (window.innerWidth > 600){this.cellToShow = 4;}
    window.onresize = () => {
      if (window.innerWidth < 600){this.cellToShow = 1;};
      if (window.innerWidth > 600){this.cellToShow = 4;};
    }
  }
 
  getProjects(): void{
    this.projectService.getAll()
    .subscribe( (data: Project[]) => {
        this.projects = data;
        this.success = 'successful retrieval of the list';
      }
      ,
      (err) => {
        console.log(err);
        this.error = err;
      }
    );
  }

  splitLanguages(languages:string){
    let langs = languages.split(",");
    let langsArray: any[]=[]
    langs.forEach(l => langsArray.push(l))
    return langsArray;
  }

  splitLinks(links:string){
    let langs = links.split(",");
    let linksArray: any[]=[]
    langs.forEach(l => linksArray.push(l))
    return linksArray;
  }

}
