import { findCEP } from '../service/cep-api-service';

const CepResolver = {
  Query: {
    findCEP: (source, { cep }, { dataSources }) => findCEP(cep)
  }
}

export default CepResolver;