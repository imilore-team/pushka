import axios from "axios";

export const getDisks = () => {
  return axios.get('https://api.imilore.tech/data/get_all_disks')
    .then(({ data }) => {
      return data;
    })
}