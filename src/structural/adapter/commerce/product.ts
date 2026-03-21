export default class Product {
    constructor(private _productId: number, private _description: string, private _price: number) {}

    get productId(): number {
        return this._productId;
    }

    get description(): string {
        return this._description;
    }

    get price(): number {
        return this._price;
    }
}