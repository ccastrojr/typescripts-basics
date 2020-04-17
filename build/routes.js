"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CreateUser_1 = __importDefault(require("./services/CreateUser"));
function helloWorld(request, response) {
    var user = CreateUser_1.default({
        name: 'Cláudio',
        email: 'claudiocastro@acad.ifma.edu.br',
        password: '123pass',
        techs: [
            'React',
            'React Native',
            { title: 'Node.js', experience: 75 }
        ]
    });
    return response.json(user);
}
exports.helloWorld = helloWorld;
