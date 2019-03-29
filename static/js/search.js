/* jshint esversion: 9 */
var search = instantsearch({
    indexName: 'atmanaut.us',
    searchClient: algoliasearch(
        '8ACVSKKUVV',
        '1618b98c010ba005355a57e5a3a8a9b4'
    )
});

search.addWidget(
    instantsearch.widgets.configure({
        hitsPerPage: 8,
    })
);

search.addWidget(
    instantsearch.widgets.infiniteHits({
        container: '#hits',
        templates: {
            empty: 'No results for <q>{{ query }}</q>',
            showMoreText: "Show more",
            item: `
            <div>
                <h4><a href="{{ permalink }}">{{{ _highlightResult.title.value }}}</a></h4>
                <p class="muted">{{ summary }}</p>
            </div>
            `,
        },
    })
);

search.addWidget(
    instantsearch.widgets.searchBox({
        container: '#searchbox',
        placeholder: 'Search Atmanaut',
        autofocus: true,
        searchAsYouType: true,
    })
);

search.start();
