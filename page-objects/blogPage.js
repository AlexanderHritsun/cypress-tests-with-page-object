
class BlogPage {
    elements = {
        searchInput: () => cy.get('#newSearchId')
    }

    searchArticle(articleName) {
        this.elements.searchInput().type(`${articleName}{enter}`);
    }
}

export const blogPage = new BlogPage();
