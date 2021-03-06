import {request} from './request'

export function Detail(iid) {
     return request ({
        url:'/detail',
        params:{
            iid
        }
    }) 
}

export function getRecommend() {
    return request({
        url:'/recommend'
    })
}

export class Goods {
    constructor(itemInfo,columns,services) {
        this.title = itemInfo.title
        this.price = itemInfo.price
        this.lowPrice = itemInfo.lowPrice
        this.oldPrice = itemInfo.oldPrice
        this.lowNowPrice = itemInfo.lowNowPrice
        this.discountDesc = itemInfo.discountDesc
        this.desc = itemInfo.desc
        this.columns = columns
        this.services = services
    }

}

export class Shop {
    constructor(shopInfo){
        this.logo = shopInfo.shopLogo
        this.name = shopInfo.name
        this.fans = shopInfo.cFans
        this.sells = shopInfo.cSells
        this.score = shopInfo.score
        this.goodsCount = shopInfo.cGoods
    }
}

export class GoodsParam{
    constructor(info, rule){
        //注：image可能没有值（某些商品有值，某些商品没有值）
        this.image = info.images ? info.images[0] : '';
        this.infos = info.set;
        this.sizea = rule.tables;
    }
}