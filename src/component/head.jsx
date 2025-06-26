export function Header(){ 
    return <>
    <header>
        <p>VOS MEILLEURS PRONOSTICS DE FRUITS DE SAISON CHEZ DEAV.</p>
        <nav>  
            <ul>  
            <li><a href="acceuil.html"> <i className="fa fa-home">Acceuil</i></a></li>  
            <li><a href="deav.html"><i className="fa fa-phone">Forum</i></a></li>  
            <li><a href="contact.html"><i className="fa fa-comments">commentaires</i></a></li>  
            </ul>  
        </nav>
       
    </header> 
    </>
}


// ------------------------------------------------------------------------------------------------
export function Footer(){
    return <>
    <footer>
    <div class="footer-container">
      <div class="footer-section">
        <div class="footer-logo">
          Fruits de Saison
        </div>
        <p>Découvrez chaque semaine les meilleurs fruits frais, locaux et de saison pour une alimentation saine et savoureuse.</p>
      </div>
      <div class="footer-section">
        <h3>Liens utiles</h3>
        <ul class="footer-links">
          <li><a href="#">Accueil</a></li>
          <li><a href="#">Catalogue</a></li>
          <li><a href="#">Panier</a></li>
          <li><a href="#">Livraison</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div class="footer-section footer-contact">
        <h3>Contact</h3>
        <p>📞 <a href="tel:+----------">6 92 55 84 00</a></p>
        <p>✉️ <a href="mailto:contact@fruitsdesaison.fr">contact@fruitsdesaison.fr</a></p>
        <p>📍 12 rue ekoumdoum, 75000 yaounde</p>
        <div class="footer-socials">
          <a href="#" title="Facebook" aria-label="Facebook">
          </a>
          <a href="#" title="Instagram" aria-label="Instagram">
          </a>
          <a href="#" title="Twitter" aria-label="Twitter">
          </a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      &copy; 2025 Fruits de Saison. Tous droits réservés.
    </div>
    </footer>
</>
}