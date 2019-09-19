import UserRepository from "./userRepository";
import RouteRepository from "./routeRepository";
import SegmentRepository from "./segmentRepository";
import SubSegmentRepository from "./subSegmentRepository";
import UtilRepository from "./utilRepository";

// eslint-disable-next-line import/prefer-default-export
export const RepositoryFactory = {
  user: UserRepository,
  route: RouteRepository,
  segment: SegmentRepository,
  subSegment: SubSegmentRepository,
  util: UtilRepository
};
