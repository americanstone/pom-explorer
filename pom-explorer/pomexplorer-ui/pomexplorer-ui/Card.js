var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Card = (function (_super) {
    __extends(Card, _super);
    function Card() {
        _super.call(this, "\n<div class=\"project-card mdl-card mdl-shadow--2dp\">\n  <div class=\"mdl-card__title mdl-card--expand\">\n    <h2 class=\"mdl-card__title-text\"></h2>\n  </div>\n  <div class=\"mdl-card__supporting-text\">\n  </div>\n  <div class=\"mdl-card__actions mdl-card--border\">\n    <a class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\">Details</a>\n    <a class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\">Build</a>\n  </div>\n</div>\n", {
            'main': [],
            'title': [0, 0],
            'content': [1],
            'actions': [2]
        });
    }
    Card.prototype.main = function () {
        return this.point("main");
    };
    Card.prototype.title = function () {
        return this.point("title");
    };
    Card.prototype.content = function () {
        return this.point("content");
    };
    Card.prototype.actions = function () {
        return this.point("actions");
    };
    return Card;
})(MaterialDomlet);
//# sourceMappingURL=Card.js.map