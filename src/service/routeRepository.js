import repository from './repository';

const routeResource = '/route/';

export default {
  get(routeId) {
    return repository.get(`${routeResource}${routeId}`);
  },
  list(msisdn, projectId) {
    return repository.get(`${routeResource}`, { params: { msisdn, project_id: projectId } });
  },
  create(route) {
    return repository.post(`${routeResource}`, { route });
  },
  update(route) {
    return repository.put(`${routeResource}`, { route });
  },
  delete(routeId) {
    return repository.delete(`${routeResource}${routeId}`);
  }
};
