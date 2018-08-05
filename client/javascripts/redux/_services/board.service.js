import axios from "axios";

export const boardService = {
  getBoard,
  getBoards,
  createBoard,
  updateBoard,
  deleteBoard
};

function getBoard(slug, options) {
  return axios.get(API_BASE + "/boards/" + slug,
    {params: { ...options }});
}

function getBoards(options) {
  return axios.get(API_BASE + "/boards", {params: { ...options }});
}

function createBoard(boardParams) {
  return axios.post(API_BASE + '/boards',
                    boardParams)
}

function updateBoard(boardParams) {
  return axios.put(API_BASE + '/boards/' + boardParams.slug,
                    boardParams)
}

function deleteBoard(slug) {
  return axios.delete(API_BASE + '/boards/' + slug)
}
