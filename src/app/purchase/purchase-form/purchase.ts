import { Client } from "src/app/clients/clients-form/client";
import { Product } from "src/app/product/product-form/product";

export class Purchase {
    id: number;
    client: Client;
    products: Product[];
    amount: number;
    dateTimeCreation: string;
}