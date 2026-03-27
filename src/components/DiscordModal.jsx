import React from 'react';
import './DiscordModal.css'; 
// Importamos la imagen directamente para que Vite la gestione
import logoDiscord from '/images/discordlogo.png'; 

const DISCORD_LINK = 'https://discord.gg/KjmfZP8AXJ';

export default function DiscordModal({ show, onClose }) {
  if (!show) return null;
  
  return (
    <div className="discord-modal-bg">
      <div className="discord-modal-content premium-anime" style={{padding:'2.5rem 2rem', minWidth:'320px', position:'relative', textAlign: 'center'}}>
        
        {/* Botón Cerrar */}
        <button 
          onClick={onClose} 
          style={{position:'absolute', top:'10px', right:'10px', background:'none', border:'none', color:'#f5f5f5', fontSize:'24px', cursor:'pointer', fontWeight:'bold', lineHeight: '1'}}
        >
          ×
        </button>

        {/* LOGO DE DISCORD - Usando la importación directa */}
        <img 
          src={logoDiscord} 
          alt="Discord" 
          className="discord-icon" 
          style={{height: '70px', width: 'auto', marginBottom: '1rem', display: 'block', margin: '0 auto 1rem auto'}}
        />

        {/* Título */}
        <div style={{margin:'0 0 1.5rem 0'}}>
          <span style={{fontSize:'1.6rem', fontWeight:800, letterSpacing:'0.5px', color:'#fff', display: 'block'}}>
            Únete a nuestra comunidad
          </span>
        </div>

        {/* BOTÓN DE INVITACIÓN */}
        <a 
          href={DISCORD_LINK} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="discord-link-btn" 
          style={{
            display:'inline-block',
            marginBottom:'0.5rem',
            fontSize:'1.1rem',
            padding:'0.8rem 2.5rem',
            borderRadius:'8px',
            background:'#5865F2', 
            color:'#fff',
            fontWeight:600,
            boxShadow:'0 4px 14px rgba(88,101,242,0.3)',
            textDecoration:'none',
            transition:'background 0.2s ease, transform 0.1s ease',
          }}
          onMouseOver={(e) => e.currentTarget.style.background = '#4752C4'}
          onMouseOut={(e) => e.currentTarget.style.background = '#5865F2'}
        >
          <span style={{verticalAlign:'middle'}}>Aceptar invitación</span>
        </a>
      </div>
    </div>
  );
}
