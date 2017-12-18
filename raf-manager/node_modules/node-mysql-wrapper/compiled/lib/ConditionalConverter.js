var Helper_1 = require("./Helper");
var ConditionalConverter = (function () {
    function ConditionalConverter() {
    }
    ConditionalConverter.toMysql = function (_symbol) {
        _symbol = _symbol.replace(/\s/g, "");
        switch (_symbol) {
            case "===":
                return "=";
                break;
            case "!==":
                return "<>";
                break;
            default:
                return _symbol;
                break;
        }
    };
    ConditionalConverter.toJS = function (_symbol) {
        _symbol = _symbol.replace(/\s/g, "");
        switch (_symbol) {
            case "=":
                return "===";
                break;
            case "<>":
                return "!==";
                break;
            default:
                return _symbol;
                break;
        }
    };
    ConditionalConverter.toMysqlConditional = function (ifevalStatement) {
        var where = Helper_1.default.replaceAll(ifevalStatement, "===", "=");
        where = Helper_1.default.replaceAll(ifevalStatement, "!==", "<>");
        where = Helper_1.default.replaceAll(ifevalStatement, "&&", " and ");
        where = Helper_1.default.replaceAll(ifevalStatement, "||", " or ");
        return where;
    };
    ConditionalConverter.toJSConditional = function (whereStatementConditional) {
        var ifEval = Helper_1.default.replaceAll(whereStatementConditional, "=", "===");
        ifEval = Helper_1.default.replaceAll(whereStatementConditional, "<>", "!==");
        ifEval = Helper_1.default.replaceAll(whereStatementConditional, "!=", "!==");
        ifEval = Helper_1.default.replaceAll(whereStatementConditional, " and ", " && ");
        ifEval = Helper_1.default.replaceAll(whereStatementConditional, " AND ", " && ");
        ifEval = Helper_1.default.replaceAll(whereStatementConditional, " or ", " || ");
        ifEval = Helper_1.default.replaceAll(whereStatementConditional, "  OR  ", " || ");
        return ifEval;
    };
    return ConditionalConverter;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ConditionalConverter;
