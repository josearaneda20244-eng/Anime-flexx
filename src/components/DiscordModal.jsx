import React from 'react';
import './DiscordModal.css'; 

const DISCORD_LINK = 'https://discord.gg/KjmfZP8AXJ';

export default function DiscordModal({ show, onClose }) {
  if (!show) return null;
  
  return (
    <div className="discord-modal-bg">
      <div className="discord-modal-content premium-anime" style={{padding:'2.5rem 2rem', minWidth:'320px', position:'relative', textAlign: 'center'}}>
        
        <button 
          onClick={onClose} 
          style={{position:'absolute', top:'10px', right:'10px', background:'none', border:'none', color:'#f5f5f5', fontSize:'24px', cursor:'pointer', fontWeight:'bold', lineHeight: '1'}}
        >
          ×
        </button>

        {/* RUTA DE TEXTO SIMPLE (Vite la buscará en /public al compilar) */}
        <img 
          src="/images/discordlogo.png" 
          alt="Discord" 
          style={{height: '70px', width: 'auto', marginBottom: '1rem', display: 'block', margin: '0 auto 1rem auto'}}
        />

        <div style={{margin:'0 0 1.5rem 0'}}>
          <span style={{fontSize:'1.6rem', fontWeight:800, letterSpacing:'0.5px', color:'#fff', display: 'block'}}>
            Únete a nuestra comunidad
          </span>
        </div>

        <a 
          href={DISCORD_LINK} 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{
            display:'inline-block',
            padding:'0.8rem 2.5rem',
            borderRadius:'8px',
            background:'#5865F2', 
            color:'#fff',
            fontWeight:600,
            textDecoration:'none',
          }}
        >
          Aceptar invitación
        </a>
      </div>
    </div>
  );
}
