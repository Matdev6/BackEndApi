const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
  
    if (!authHeader) {
      return res.status(401).json({ message: 'Token não fornecido' });
    }
  
    const token = authHeader.split(' ')[1];
  
    try {
      const decoded = jwt.verify(token, SECRET_KEY);
      req.userId = decoded.userId;
      next();
    } catch (error) {
      return res.status(401).json({ message: 'Token inválido' });
    }
  };
  
  // Exemplo de rota protegida
  app.get('/protected', authMiddleware, (req, res) => {
    res.status(200).json({ message: 'Acesso permitido' });
  });
  