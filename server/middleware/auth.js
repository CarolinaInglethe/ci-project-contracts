const authService = require("../services/utils/authService");

module.exports = (req,res,next) => {
  try {
    const { authorization } = req.headers;

    if(!authorization) {
      return res.status(401).json({ message: "Token não informado !"})
    }

    // funcao que contem verificaçao de token do jwt:
    // retorna username ou null
    const user = authService.verifyToken(authorization);

    if (!user) {
      return res.status(401).json({ message: 'Token invalido' });
    }

    // para reutilizar o username no proximo middleware
    req.user = user; 

    next();
    } catch (err) {
      return res.status(401).json({ message: "Falha na autenticação" });
    }
}