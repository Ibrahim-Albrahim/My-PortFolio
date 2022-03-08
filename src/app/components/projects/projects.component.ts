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

    const cellsToShow = () => {
      if (window.innerWidth < 700){this.cellToShow = 1;}
      else if (window.innerWidth < 1050){this.cellToShow = 2;}
      else if (window.innerWidth < 1450){this.cellToShow = 3;}
      else if (window.innerWidth < 1500){this.cellToShow = 4;}
    }

    this.getProjects();
    cellsToShow()
    window.onresize = () => cellsToShow();
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
