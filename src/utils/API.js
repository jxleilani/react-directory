import axios from 'axios';

export default function getUsers(){
  return axios.get('https://randomuser.me/api/?results=10&nat=us&seed=foobar');
}
