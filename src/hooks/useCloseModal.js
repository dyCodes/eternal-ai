import { useEffect } from 'react';

export default function useCloseModal(closeModal) {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' || event.key === ' ') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEscape);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return null;
}
