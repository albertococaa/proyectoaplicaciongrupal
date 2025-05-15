"use client"
import { useState } from 'react';
import { PlusIcon } from '@heroicons/react/24/solid';
import Modal from './Modal';

const FloatingButton = ({ addCommunity }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <button 
        onClick={handleShowModal}
        className="fixed bottom-10 right-10 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700"
      >
        <PlusIcon className="h-8 w-8" />
      </button>
      {showModal && <Modal onClose={handleCloseModal} addCommunity={addCommunity} />}
    </>
  );
};

export default FloatingButton;
