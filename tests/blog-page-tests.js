import { stxMainPage } from "../page-objects/stxMainPage";
import { blogPage } from "../page-objects/blogPage";
import { searchResultsWindow } from "../page-objects/searchResultsWindow";

describe('Blog page tests', () => {
    beforeEach(() => {
        stxMainPage.navigateToStxPage();
    });

    it('should be possible to find articles on the blog page', () => {
        const expectedArticleTitle = 'How Can Your Software Benefit from Automated Testing?';

        stxMainPage.openBlogLink();
        blogPage.searchArticle('test');

        searchResultsWindow.elements.articlesBlocks().should('have.length', 6);
        searchResultsWindow.elements.articleTitle().contains(expectedArticleTitle).should('exist');
    });
});

