import axios from "axios";

export const postService = {
  getBoards,
};

function getBoards(options) {
  return axios.get(API_PATH + "/boards", {params: { ...options }});
}
