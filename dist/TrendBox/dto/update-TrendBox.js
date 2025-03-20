"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTrendBoxDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_TrendBox_dto_1 = require("./create-TrendBox.dto");
class UpdateTrendBoxDto extends (0, mapped_types_1.PartialType)(create_TrendBox_dto_1.CreateTrendBoxDto) {
}
exports.UpdateTrendBoxDto = UpdateTrendBoxDto;
//# sourceMappingURL=update-TrendBox.js.map