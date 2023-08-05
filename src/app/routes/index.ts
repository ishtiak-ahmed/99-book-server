import express, { Router } from 'express';

import { UserRoutes } from '../modules/user/user.route';
import { BookRoutes } from '../modules/book/book.route';
import { AuthRoutes } from '../modules/auth/auth.route';
import { ReviewRoutes } from '../modules/review/review.route';
import { FeatureRoutes } from '../modules/feature/feature.route';

const router = express.Router();

type IRoute = {
  path: string;
  route: Router;
}

const moduleRoutes:IRoute[] = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/books',
    route: BookRoutes
  },
  {
    path: '/feature',
    route: FeatureRoutes
  },
  {
    path: '/review',
    route: ReviewRoutes
  },
  {
    path: '/auth',
    route: AuthRoutes
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
