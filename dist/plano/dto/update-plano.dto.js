"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePlanoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_plano_dto_1 = require("./create-plano.dto");
class UpdatePlanoDto extends (0, mapped_types_1.PartialType)(create_plano_dto_1.CreatePlanoDto) {
}
exports.UpdatePlanoDto = UpdatePlanoDto;
//# sourceMappingURL=update-plano.dto.js.map