interface ICartItem {
    id: number,
    title: string,
    image: string,
    price: number,
    count: number
}



export default interface ICartItems extends Array<ICartItem> {}
