import React, { useState } from 'react';

const Comments = () => {
  const [comment, setComment] = useState('');
  const [commentsList, setCommentsList] = useState([]);

  const handleAddComment = () => {
    if (comment.trim()) {
      setCommentsList([...commentsList, comment]);
      setComment(''); // Limpa o campo após a inserção
    }
  };

  return (
    <div>
      <input
        data-testid="comment-input"
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Escreva seu comentário"
      />
      <button data-testid="submit-button" onClick={handleAddComment}>
        Enviar
      </button>

      <ul data-testid="comments-list">
        {commentsList.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
