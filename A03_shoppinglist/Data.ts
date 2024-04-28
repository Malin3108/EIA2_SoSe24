namespace Shoppinglist {

    export interface Item{
        product: string;
        quantity: number;
        date: string;
        comment: string;
        check1: boolean;
        check2: boolean;
    }

    export interface Data{
        [category: string]: Item[];
    }
    
    export let data = [
        { product: "Banane", quantity: 5, date: "20.04.2024", comment: "Bio", need: true, bought: false },
        { product: "Tomaten", quantity: 10, date: '15.04.2024', comment: "cherrytomaten", need: false, bought: false },
        { product: "Brot", quantity: 1, date: "27.04.2024", comment: "Weizen", need: true, bought: true },
        { product: "Nudeln", quantity: 2, date: "20.04.2024", comment: "Penne", need: true, bought: false }
    ];
}