import { fireEvent, render, screen } from "@testing-library/react";
import PostComment from ".";

describe("Teste para o componente PostComment", () => {
  test("Deve adicionar 'Massa!!!' e 'Muito bom! ao campo de comentário'", () => {
    const { debug } = render(<PostComment />);

    fireEvent.change(screen.getByTestId("campo-comentario"), {
      target: { value: "Massa!!!" },
    });
    fireEvent.click(screen.getByTestId("btn-comentar"));

    fireEvent.change(screen.getByTestId("campo-comentario"), {
      target: { value: "Muito bom!" },
    });
    fireEvent.click(screen.getByTestId("btn-comentar"));

    debug();

    expect(screen.getByText("Massa!!!")).toBeInTheDocument();
    expect(screen.getByText("Muito bom!")).toBeInTheDocument();
  });
});
