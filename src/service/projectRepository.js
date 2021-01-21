import repository from './repository';

const resource = '/project/';
export default {
  list() {
    return repository.get(`${resource}`);
  }
};
