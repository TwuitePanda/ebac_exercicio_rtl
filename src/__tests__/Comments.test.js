import { render, screen, fireEvent } from '@testing-library/react';
import Comments from '../components/Comments'; // ajuste o caminho conforme necessário

describe('Testando inserção de comentários', () => {
  it('deve permitir a inserção de dois comentários', () => {
    // Renderizando o componente
    render(<Comments />);

    // Pegando os elementos pela data-testid
    const inputElement = screen.getByTestId('comment-input');
    const submitButton = screen.getByTestId('submit-button');

    // Simulando a inserção do primeiro comentário
    fireEvent.change(inputElement, { target: { value: 'Primeiro comentário' } });
    fireEvent.click(submitButton);

    // Verificando se o primeiro comentário foi inserido
    expect(screen.getByText('Primeiro comentário')).toBeInTheDocument();

    // Simulando a inserção do segundo comentário
    fireEvent.change(inputElement, { target: { value: 'Segundo comentário' } });
    fireEvent.click(submitButton);

    // Verificando se o segundo comentário foi inserido
    expect(screen.getByText('Segundo comentário')).toBeInTheDocument();

    // Verificando se ambos os comentários estão presentes na lista
    const commentsList = screen.getByTestId('comments-list');
    expect(commentsList.children.length).toBe(2); // Deve conter 2 comentários
  });
});
