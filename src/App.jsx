import React, { useEffect, useState } from 'react';
// Cambiamos la importación de Telegram a Discord
import DiscordModal from './components/DiscordModal'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Home from './pages/Home/Home';
import Category from './pages/Category/Category';
import Movies from './pages/Movies/Movies';
import Series from './pages/Series/Series';
import Details from './pages/Details/Details';
import Episode from './pages/Episode/Episode';
import NotFound from './pages/NotFound/NotFound';
import ServiceUnavailable from './pages/ServiceUnavailable/ServiceUnavailable';

function App() {
    // Estado para controlar la visibilidad del modal de Discord
    const [showDiscord, setShowDiscord] = useState(false);

    useEffect(() => {
      // Se activa el modal al cargar la aplicación
      setShowDiscord(true);
    }, []);

    const handleCloseDiscord = () => setShowDiscord(false);

  return (
    <HelmetProvider>
      <Router>
        {/* Usamos el nuevo componente DiscordModal */}
        <DiscordModal show={showDiscord} onClose={handleCloseDiscord} />
        
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Rutas de Categorías y Letras */}
          <Route path="/letter/:letter" element={<Category />} />
          <Route path="/letter/:letter/page/:page" element={<Category />} />
          <Route path="/category/genre/:genreName" element={<Category />} />
          <Route path="/category/genre/:genreName/page/:page" element={<Category />} />
          <Route path="/category/language/:languageName" element={<Category />} />
          <Route path="/category/language/:languageName/page/:page" element={<Category />} />
          <Route path="/category/type/:categoryName" element={<Category />} />
          <Route path="/category/type/:categoryName/page/:page" element={<Category />} />
          <Route path="/category/network/:networkName" element={<Category />} />
          <Route path="/category/network/:networkName/page/:page" element={<Category />} />
          <Route path="/category/franchise/:franchiseName" element={<Category />} />
          <Route path="/category/franchise/:franchiseName/page/:page" element={<Category />} />
          <Route path="/category/:categoryName" element={<Category />} />
          <Route path="/category/:categoryName/page/:page" element={<Category />} />
          
          {/* Rutas de Películas */}
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/page/:page" element={<Movies />} />
          
          {/* Rutas de Series */}
          <Route path="/series" element={<Series />} />
          <Route path="/series/page/:page" element={<Series />} />
          
          {/* Detalles y Episodios */}
          <Route path="/series/:id" element={<Details />} />
          <Route path="/movies/:id" element={<Details />} />
          <Route path="/episode/:id" element={<Episode />} />
          
          {/* Páginas de Error */}
          <Route path="/503" element={<ServiceUnavailable />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
