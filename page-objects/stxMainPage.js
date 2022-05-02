
class STXMainPage {
    elements = {
        blogLink: () => cy.get('.centerNavigation [href="https://www.stxnext.com/blog"]')
    }

    navigateToStxPage() {
        cy.visit('/');
    }

    openBlogLink() {
        this.elements.blogLink().click();
    }
}

export const stxMainPage = new STXMainPage();
