import { useState } from "react";

export default function Header({ produtos }) {
  const [produtoInput, setProdutoInput] = useState("");
  const [ingredientesInput, setIngredientesInput] = useState("");
  const [tamanhoInput, setTamanhoInput] = useState("");
  const [precoInput, setPrecoInput] = useState("");

  return (
    <div className="titleLogin">
      <div className="title">
        <h2>Tabela de produtos</h2>
        <div className="table">
          <table id="lista">
            <thead>
              <tr>
                <th>Produto</th>
                <th>Ingredientes</th>
                <th>Tamanho</th>
                <th>Preço</th>
              </tr>
            </thead>
            <tbody>
              {produtos.map((produto, index) => (
                <tr key={index}>
                  <td>{produto.produto}</td>
                  <td>{produto.ingredientes}</td>
                  <td>{produto.tamanho}</td>
                  <td>{produto.preco}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <input
          type="text"
          value={produtoInput}
          onChange={(e) => setProdutoInput(e.target.value)}
          placeholder="Produto"
        />
        <input
          type="text"
          value={ingredientesInput}
          onChange={(e) => setIngredientesInput(e.target.value)}
          placeholder="Ingredientes"
        />
        <input
          type="text"
          value={tamanhoInput}
          onChange={(e) => setTamanhoInput(e.target.value)}
          placeholder="Tamanho"
        />
        <input
          type="text"
          value={precoInput}
          onChange={(e) => setPrecoInput(e.target.value)}
          placeholder="Preço"
        />
        <button>Cadastrar</button>
      </div>
    </div>
  );
}
