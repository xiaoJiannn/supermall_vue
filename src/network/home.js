import { request } from "./request.js";

export function getHomeData() {
  return request({
    url: "/home/multidata",
  });
}

export function getHomeProducts(type, page) {
  return request({
    url: "/home/data",
    params: {
      type,
      page,
    },
  });
}
