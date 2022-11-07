import {request} from "network/request";

export function getProductDetail(iid) {
  return request({
    url: "/detail",
    params: {
      iid,
    }
  })
}

export class GoodInfo {
  constructor(columns, itemInfo, services) {
    this.services = services
    this.newPrice = itemInfo.newPrice
    this.oldPrice = itemInfo.oldPrice
    this.title = itemInfo.title
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.realPrice = itemInfo.realPrice
    this.desc = itemInfo.desc
  }
}

export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods
  }
}
