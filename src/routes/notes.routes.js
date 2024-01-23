// Criamos uma pasta com o nome de *routes* dentro da pasta *SRC* e é nela que ficará as rotas da aplicação, logo em seguida foi criado um arquivo (users.routes.js) tudo que for relacionado a rota de usuario ficará aqui)

// foi retirado do arquivo server.js a rota de notes que agora se chama notesRoutes

// importa de express o *Router*
const { Router } = require("express");

const NotesController = require("../controllers/NotesController");

const notesRoutes = Router();

const notesController = new NotesController();

notesRoutes.get("/", notesController.index);
notesRoutes.post("/:user_id", notesController.create);
notesRoutes.get("/:id", notesController.show);
notesRoutes.delete("/:id", notesController.delete);

module.exports = notesRoutes;
