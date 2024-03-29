export default async function checkSession(req, res, next) {
  try {
    
    // Vérifie si l'utilisateur n'est pas administrateur
    if (!req.session || !req.session.user) {
      // Si l'utilisateur n'est pas administrateur, envoie un message d'erreur d'accès refusé
      return res.status(403).json({
        error: "Accès refusé...",
      });
    }
    // Si tout est OK, passez au middleware suivant

    next();
  } catch (error) {
    console.error(
      "Erreur lors de la vérification des données utilisateur :",
      error
    );
    return res.status(error.status || 500).json({
      error: error.message || "Une erreur est survenue lors de la connexion",
    });
  }
}
