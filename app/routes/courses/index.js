import AuthenticatedRoute from '../authenticated';
import RouteMixin from 'ember-cli-pagination/remote/route-mixin';

var CoursesIndexRoute = AuthenticatedRoute.extend(RouteMixin, {
  model: function(params) {
    return this.findPaged('course', params);
  }
});

export default CoursesIndexRoute;
