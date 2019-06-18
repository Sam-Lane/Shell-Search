const assert = require('assert');
const search = require("../src/index");

const SearchShell = new search.ShellSearch();


describe('SearchShell Object', function() {
    describe('#buildQuery(queryArray)', function() {
        it('Takes a array of strings and creates a url frield query.', function(){
            assert.equal(SearchShell.buildQuery(['hello', 'world', 'this',
                                                 'is', 'my', 'query']),
            "hello+world+this+is+my+query");
        });
    });

    describe('#encoding(queryArray)', function() {
        it('Takes a unicode speical char returns url encoding for it.', function(){
            assert.equal(SearchShell.encode("&"), "%26");
        });
    });
  });

