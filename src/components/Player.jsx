import { useState } from 'react';

const Player = ({ initialName, symbol, isActive }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPLayerName] = useState(initialName);

  const handleEditPLayer = (event) => {
    if (event.key === 'Enter' || event.type === 'click')
      setIsEditing((editing) => !editing);
  };

  const handleChange = (event) => {
    setPLayerName(event.target.value);
  };

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input
        type="text"
        required
        value={playerName}
        onChange={handleChange}
        onKeyDown={handleEditPLayer}
      />
    );
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditPLayer}>
        {!isEditing ? 'Editar' : 'Salvar'}
      </button>
    </li>
  );
};
export default Player;
