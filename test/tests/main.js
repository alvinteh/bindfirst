define(function(require) {
    require("common");
    require("bindfirst");

    var currentCount = 0;

    var createTestElement = function() {
        $("body").append("<div id=\"test-" + currentCount + "\"></div>");

        currentCount++;

        return $("#test-" + (currentCount - 1));
    };

    describe("bindFirst", function() {
        it("should be defined.", function(done) {
            var x = 4;
            expect($.fn.bindFirst).to.exist;

            done();
        });
    });

    describe("Elements without existing event listeners", function() {
        it("should have their bindFirst() event listeners triggered.", function(done) {
            var isRecorded = false;

            var element = createTestElement();

            element.bindFirst("click", function(event) {
                isRecorded = true;
            });

            element.click();

            element.remove();

            expect(isRecorded).to.be.true;

            done();
        });
    });

    describe("Elements with existing event listeners", function() {
        it("should have their bindFirst() event listeners triggered.", function(done) {
            var isRecorded = false;

            var element = createTestElement();

            element.bind("click", function(event) {

            });

            element.bindFirst("click", function(event) {
                isRecorded = true;
            });

            element.click();

            element.remove();

            expect(isRecorded).to.be.true;

            done();
        });

        it("should have their bindFirst() event listeners triggered first.", function(done) {
            var value = 0;

            var element = createTestElement();

            element.bind("click", function(event) {
                value = 1;
            });

            element.bindFirst("click", function(event) {
                value = 2;
            });

            element.click();

            element.remove();

            expect(value).to.equal(1);

            done();
        });
    });

});