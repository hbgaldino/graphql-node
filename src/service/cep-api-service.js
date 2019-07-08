import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://viacep.com.br/ws/'
});


export const findCEP = async (cep) => {
  console.log(`findCep: ${cep}`);
  const resp = await instance.get(`${cep}/json/`);
  const data = resp.data;

  return data;
}