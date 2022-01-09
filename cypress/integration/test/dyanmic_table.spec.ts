describe('Dynamic Table', () => {
    beforeEach(() => {
        cy.visit('dynamictable');
    });

    it('Header', () => {
        cy.headerEqual('Dynamic Table')
    });

    it('Chrome CPU exist in table', () => {
        cy.get('.bg-warning').invoke('text').then((text) => {
            let cpu = Number(text.match('\\d\\.\\d'))
            expect(cpu).to.be.at.least(0)

            cy.xpath("//span[.='Chrome']/following-sibling::span/following-sibling::span[contains(text(), '%')]")
                .invoke('text')
                .then((text) => {
                    expect(cpu).to.be.equal(Number(text.replace('%', '')))
            })
        })
    });
});