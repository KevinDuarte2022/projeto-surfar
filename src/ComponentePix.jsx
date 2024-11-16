import { useState } from 'react';

const ComponentePix = () => {
  const [textoPix, setTextoPix] = useState('Copiar chave pix'); // Inicializando o estado

  const copiarChavePix = () => {
    const chavePix = '09097983000109';

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(chavePix)
        .then(() => setTextoPix('Chave pix copiada')) // Atualiza o estado ao copiar
        .catch(() => alert('Erro ao copiar a chave PIX. Tente manualmente.'));
    } else {
      // Fallback para navegadores sem suporte
      const textarea = document.createElement('textarea');
      textarea.value = chavePix;
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand('copy');
        setTextoPix('Chave pix copiada'); // Atualiza o estado ao copiar
      } catch (err) {
        alert('Erro ao copiar a chave PIX. Tente manualmente.');
      }
      document.body.removeChild(textarea);
    }
  };

  return (
    <button onClick={copiarChavePix}>
      {textoPix} {/* Exibindo o texto baseado no estado */}
    </button>
  );
};

export default ComponentePix;
