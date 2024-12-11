import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { createPortal } from 'react-dom';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  url?: string;
}

export default function AppointmentModal({ 
  isOpen, 
  onClose,
  url = 'https://calendly.com/risknumber-savemyretirement/30min'
}: AppointmentModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      // Store the currently focused element
      previousFocusRef.current = document.activeElement as HTMLElement;
      // Lock scroll
      document.body.style.overflow = 'hidden';
      // Add keyboard listener
      window.addEventListener('keydown', handleEscape);
      // Focus the modal
      modalRef.current?.focus();
    }

    return () => {
      if (previousFocusRef.current) {
        // Restore focus when modal closes
        previousFocusRef.current.focus();
      }
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return createPortal(
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        ref={modalRef}
        className="relative w-full max-w-4xl h-[80vh] bg-white rounded-lg shadow-xl transform transition-all duration-300 ease-out"
        onClick={e => e.stopPropagation()}
        tabIndex={-1}
      >
        <div className="absolute right-4 top-4 z-10">
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 group"
            aria-label="Close modal"
          >
            <X className="h-6 w-6 text-gray-500 group-hover:text-gray-700" />
          </button>
        </div>
        
        <div className="w-full h-full pt-12">
          <iframe
            src={url}
            className="w-full h-full rounded-b-lg"
            frameBorder="0"
            title="Schedule Appointment"
            loading="lazy"
            allow="camera; microphone; fullscreen; payment"
          />
        </div>
      </div>

      {/* Focus trap - keyboard navigation */}
      <div tabIndex={0} onFocus={() => modalRef.current?.focus()} />
    </div>,
    document.body
  );
}