import React, { useState, useEffect } from "react";

function ContentProduto() {
  const [produto, setProduto] = useState("");
  const [ingredientes, setIngredientes] = useState("");
  const [tamanho, setTamanho] = useState("");
  const [preco, setPreco] = useState("");

  const [produtoError, setProdutoError] = useState("");
  const [ingredientesError, setIngredientesError] = useState("");
  const [tamanhoError, setTamanhoError] = useState("");
  const [formError, setFormError] = useState("");
  const [precoError, setPrecoError] = useState("");

  const [produtos, setProdutos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);

  const validProduct = produto.trim() !== "";
  const validIngredientes = ingredientes.trim() !== "";
  const validTamanho = tamanho.trim() !== "";
  const validPreco = preco.trim() !== "";

  const validate = () => {
    setProdutoError(!validProduct ? "Campo obrigatório!" : "");
    setIngredientesError(!validIngredientes ? "Campo obrigatório!" : "");
    setTamanhoError(!validTamanho ? "Campo obrigatório!" : "");
    setPrecoError(!validPreco ? "Campo obrigatório!" : "");

    if (validProduct && validIngredientes && validTamanho && validPreco) {
      const newProduto = {
        produto: produto,
        ingredientes: ingredientes,
        tamanho: tamanho,
        preco: preco,
      };
      setProdutos([...produtos, newProduto]);
      // Limpa os campos após cadastrar
      setProduto("");
      setIngredientes("");
      setTamanho("");
      setPreco("");
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  useEffect(() => {
    setCurrentPage(1); // Define currentPage como 1 sempre que o searchTerm mudar
  }, [searchTerm]);

  const renderText = (text) => {
    const lines = text.split("\n");
    const MAX_LINES = 2;
    if (lines.length > MAX_LINES) {
      return (
        <>
          {lines.slice(0, MAX_LINES).join("\n")}
          <span id="dots">...</span>
          <span id="more" style={{ display: "none" }}>
            {lines.slice(MAX_LINES).join("\n")}
          </span>
          <button onClick={toggleReadMore} id="readMoreBtn">
            Ver mais
          </button>
        </>
      );
    } else {
      return text;
    }
  };

  const toggleReadMore = () => {
    const dots = document.getElementById("dots");
    const moreText = document.getElementById("more");
    const btnText = document.getElementById("readMoreBtn");

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.textContent = "Ver mais";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.textContent = "Ver menos";
      moreText.style.display = "inline";
    }
  };

  return (
    <div className="cadastroProd">
      <div className="contentProd">
        <div className="contentInputs">
          <h2>Cadastro de produto</h2>

          <div className="input-block">
            <label htmlFor="produto">Produto:</label>
            <input
              type="text"
              placeholder="Produto"
              value={produto}
              onChange={(event) => setProduto(event.target.value)}
            />
            {produtoError && <p>{produtoError}</p>}
          </div>

          <div className="input-block">
            <label htmlFor="ingredientes">Ingredientes:</label>
            <input
              type="text"
              placeholder="Ingredientes"
              value={ingredientes}
              onChange={(event) => setIngredientes(event.target.value)}
            />
            {ingredientesError && <p>{ingredientesError}</p>}
          </div>

          <div className="input-block">
            <label htmlFor="tamanho">Tamanho:</label>
            <input
              type="text"
              placeholder="Tamanho"
              value={tamanho}
              onChange={(event) => setTamanho(event.target.value)}
            />
            {tamanhoError && <p>{tamanhoError}</p>}
          </div>

          <div className="input-block">
            <label htmlFor="preco">Preço:</label>
            <input
              type="text"
              placeholder="Preço"
              value={preco}
              onChange={(event) => setPreco(event.target.value)}
            />
            {precoError && <p>{precoError}</p>}
          </div>

          {formError && <p>{formError}</p>}

          <button onClick={validate}>Cadastrar</button>
        </div>
      </div>
      <div className="titleProd">
        <div>
          <h2>Tabela de produtos</h2>
          <div className="search-block">
            <label htmlFor="search">
              Pesquisar:{" "}
              <input
                type="text"
                placeholder=""
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
              />
            </label>
          </div>
          <div className="table">
            <table id="lista">
              <thead>
                <tr className="tr title-table">
                  <th className="th">Produto</th>
                  <th className="th">Ingredientes</th>
                  <th className="th">Tamanho</th>
                  <th className="th">Preço</th>
                </tr>
              </thead>
              <tbody>
                {produtos
                  .filter((produto) =>
                    Object.values(produto).some(
                      (value) =>
                        typeof value === "string" &&
                        value.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                  )
                  .slice(indexOfFirstItem, indexOfLastItem)
                  .map((produto, index) => (
                    <tr key={index} className="tr">
                      <td className="th">{renderText(produto.produto)}</td>
                      <td className="th">{renderText(produto.ingredientes)}</td>
                      <td className="th">{renderText(produto.tamanho)}</td>
                      <td className="th">{renderText(produto.preco)}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <div className="pagination">
            <ul className="pagination-list">
              {Array(Math.ceil(produtos.filter((produto) =>
                Object.values(produto).some(
                  (value) =>
                    typeof value === "string" &&
                    value.toLowerCase().includes(searchTerm.toLowerCase())
                )
              ).length / itemsPerPage))
                .fill()
                .map((_, index) => {
                  const page = index + 1;
                  const pageHasItems = produtos.filter((produto) =>
                    Object.values(produto).some(
                      (value) =>
                        typeof value === "string" &&
                        value.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                  ).slice((page - 1) * itemsPerPage, page * itemsPerPage).length > 0;
                  return pageHasItems ? (
                    <li
                      key={index}
                      className={`pagination-item ${
                        currentPage === page ? "active" : ""
                      }`}
                    >
                      <button
                        onClick={() => setCurrentPage(page)}
                        className="pagination-button"
                      >
                        {page}
                      </button>
                    </li>
                  ) : null;
                })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentProduto;
