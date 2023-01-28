import axios from "axios";

export const getDisk = (id) => {
  return axios.get('https://api.imilore.tech/data/get_disk', {
    params: {
      id
    }
  }).then(({ data }) => {
    return data;
  })
}