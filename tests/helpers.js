export const searchItem = (itemName) => {
  cy.route('GET', '/v2/sections/get-ids?*').as('waitMainBlocks');
  cy.route('GET', '/v2/goods/get-price/?ids=*').as('getPrice');
  cy.visit('/');
  waitRequest('waitMainBlocks', 200);
  cy.get('input[name="search"]')
      .type(`${itemName}{enter}`);
  waitRequest('getPrice', 200);
};

export const waitRequest = (alias, status) => {
    cy.wait(`@${alias}`).its('status')
        .should('eq', status);
};
export const addItemToShoppingBasket = (itemFullName) => {
  cy.get('a')
      .contains(itemFullName)
      .parent()
      .nextUntil('.goods-tile__price')
      .find('.buy-button')
      .click({force:true});
  cy.wait(700);
  cy.get('div[modaloverlay="modal"]')
      .should('be.exist');
};
export const removeItemFromBasket = (searchParameter, itemFullName) => {
    searchItem(searchParameter);
    addItemToShoppingBasket(itemFullName);
    cy.wait(500);
    cy.get('.cart-modal__remove')
        .click({force:true});
    cy.get('.cart-modal__actions-control_type_remove')
        .click({force:true});
    cy.get('div')
        .contains(' Корзина пуста ')
        .should('be.exist');
};