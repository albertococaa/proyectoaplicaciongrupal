import { useState } from 'react';

const Modal = ({ onClose, addCommunity }) => {
  const [communityName, setCommunityName] = useState('');
  const [description, setDescription] = useState('');
  const [imgUrl, setImgUrl] = useState(null);
  const [tags, setTags] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newCommunity = {
      id: Math.floor(Math.random() * 1000), // This should ideally be generated based on the existing max id.
      title: communityName,
      description: description,
      imgUrl: `./${imgUrl?.name}`, // Assuming image is uploaded to public directory
      tag: tags.split(',').map(tag => tag.trim()),
    };

    addCommunity(newCommunity);
    onClose();
  };

  const handleImageUpload = (e) => {
    setImgUrl(e.target.files[0]);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 relative">
        <h2 className="text-2xl font-bold mb-4">Crear nueva comunidad</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="communityName">
              Nombre de la comunidad
            </label>
            <input
              id="communityName"
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Nombre de la comunidad"
              value={communityName}
              onChange={(e) => setCommunityName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
              Descripción
            </label>
            <textarea
              id="description"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Descripción"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imageUpload">
              Subir imagen
            </label>
            <input
              id="imageUpload"
              type="file"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleImageUpload}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tags">
              Tags (separados por comas)
            </label>
            <input
              id="tags"
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Tags"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Crear
            </button>
            <button
              type="button"
              onClick={onClose}
              className="text-gray-600 hover:text-gray-900 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
