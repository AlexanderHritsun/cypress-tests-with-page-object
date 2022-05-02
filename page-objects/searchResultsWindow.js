
class SearchResultsWindow {
    elements = {
        articlesBlocks: () => cy.get('.pBoxSechB .postItem', {timeout: 1000.000}),
        articleTitle: () => cy.get('.pBoxSechB .postItemTitle')
    }
}

export const searchResultsWindow = new SearchResultsWindow();
