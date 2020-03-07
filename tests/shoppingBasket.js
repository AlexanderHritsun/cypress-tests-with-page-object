import {addItemToShoppingBasket, removeItemFromBasket, searchItem} from "./helpers";

describe('Shopping basket test', () => {
    beforeEach(() => {
        cy.server();
    });
    describe('Search item', () => {
        it('Positive case', () => {
              searchItem('macbook');
        });
    });
    describe('Add item to the basket', () => {
        it('Steps', () => {
            searchItem('macbook');
            addItemToShoppingBasket('Ноутбук Apple MacBook Pro 13" Retina 128Gb (MUHQ2UA/A) Silver');
        })
    });
    describe('Remove item from the basket', () => {
        it('Steps', () => {
            searchItem('macbook');
            addItemToShoppingBasket('Ноутбук Apple MacBook Pro 13" Retina 128Gb (MUHQ2UA/A) Silver');
        })
    });
    describe('Clear shopping basket', () => {
        it('Steps', () => {
            removeItemFromBasket('macbook', 'Ноутбук Apple MacBook Pro 13" Retina 128Gb (MUHQ2UA/A) Silver');
        })
    })
});