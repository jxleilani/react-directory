import axios from 'axios';

// export default {
//   getUsers: function() {
//     return axios.get('https://randomuser.me/api/');
//   }
// };

export function getUsers(){
  return axios.get('https://randomuser.me/api/');
}

