import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Course } from '../../models';
import { CoursesService } from '../../services';

@Component({
  selector: 'app-course',
  templateUrl: './course.page.html',
  styleUrls: ['./course.page.scss'],
})
export class CoursePage implements OnInit {
  course: Course = null;

  constructor(private activatedRoute: ActivatedRoute,
              private coursesServices: CoursesService,
              private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe(queryParamMap => {
      if (!queryParamMap.has('courseId')) {
        this.router.navigate(['home']);
        return;
      }

      const courseId: string = queryParamMap.get('courseId');
      this.course = this.coursesServices.getCourseById(courseId);

    });
  }

}
