import { Component, OnInit } from '@angular/core';
import { listMaterials, listMotionGraphics, listProjects } from '../../content/constants';

@Component({
  selector: 'app-projects-home',
  templateUrl: './projects-home.component.html',
  styleUrls: ['./projects-home.component.scss']
})
export class ProjectsHomeComponent implements OnInit {

  public listProjects = listProjects;
  public listMaterials = listMaterials;
  public listMotionGraphics = listMotionGraphics;

  constructor() { }

  ngOnInit(): void {
  }

}
