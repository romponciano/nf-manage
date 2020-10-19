import React, { useState } from 'react'
import '../menu/Navbar.css'
import './NF.css'

const NewNF = () => {

  function generateCardForm(id, type, placeholder, mdSize) {
    let colClass = mdSize ? "card p-0 col-md-" + mdSize : "col p-1"
    return (
      <div className={colClass}>
        <div className="card-header p-0 text-center">{placeholder}</div>
        <div className="card-body p-0">
          <input type={type} className="form-control" id={id} placeholder={placeholder} />
        </div>
      </div>
    )
  }

  function generateHelpForm(helpText, id, type, mdSize, placeholder) {
    let colClass = mdSize ? "px-1 col-md-" + mdSize : "col px-1"
    return (
      <div className={colClass}>
        <div className="input-group">
          <div className="input-group-prepend w-100">
            <div className="input-group-text">{helpText}</div>
            <input type={type} className="form-control" id={id} placeholder={placeholder} />
          </div>
        </div>
      </div>
    )
  }

  function emptyProduct() {
    return {
      name: "",
    ncm: "",
    cst: "",
    cfop: "",
    unit: "",
    qtd: "1",
    value: "",
    total: "",
    baseIcms: "0,00",
    valueIcms: "0,00",
    valueIpi: "0,00",
    aliqIcms: "0",
    aliqIpi: "0",
    tributeValue: "0,00"
    }
  }

  function addProduct(idx) {
    return products.concat(emptyProduct())
  }

  function removeProduct(idx) {
    const remains = products.filter(el => el !== products[idx])
    if(remains.length === 0) 
      remains.concat(emptyProduct())
    return remains
  }

  function editProduct(idx) {
    return
  }

  const [products, setProduct] = useState([emptyProduct()])

  return (
    <div className="content">
      <form>

        <div className="form-group row align-items-center">
          <div className="col-md-3"><h1 className>Nova NF:</h1></div>            
          {generateHelpForm("Nº NF-e", "nfNumber", "number", 5, "Número NF-e")}
          {generateHelpForm("Série", "serieNumber", "text", 2, "Série")}
          <div className="col-md-2">
            <button type="button" className="mx-3 btn btn-primary btn-lg float-right" id="saveNF">Salvar</button>
          </div>
        </div>
          
        <div className="form-group row">
          <div className="card">
            <button className="no-style p-0" type="button" id="mandatory" data-toggle="collapse" data-target="#mandatoryContent" aria-expanded="true" aria-controls="mandatoryContent">
              <div className="card-header">
                <h4>Informações obrigatórias</h4>
              </div>
            </button>
            <div className="card-body collapse show" aria-labelledby="mandatory">
              <div className="form-group row">
                <div className="col-md-2 px-1">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text">Folha</div>
                      <input type="number" className="p-1 form-control" id="currentPage" value="1" />
                      <div className="input-group-text">/</div>
                      <input type="number" className="p-1 form-control" id="totalPage"  />
                    </div>
                  </div>
                </div>
                {generateHelpForm("Data", "emissionDate", "date")}
                {generateHelpForm("Desconto", "discountValue", "number", 3, "Desconto")}
                {generateHelpForm("Total", "totalValue", "number", 3, "Total")}
              </div>
            </div>
          </div>
        </div>

        <div className="form-group row">
          <div className="card">
            <button className="no-style p-0" type="button" id="optional" data-toggle="collapse" data-target="#optionalContent" aria-expanded="true" aria-controls="optionalContent">
              <div className="card-header">
                <h4>Informações complementares</h4>
              </div>
            </button>
            <div className="card-body collpase show" aria-labelledby="optional">
              <div className="form-group row">
                {generateHelpForm("CNPJ", "cnpj", "number", 4, "CNPJ Fornecedor")}
                {generateHelpForm("Nome", "companyName", "text", 8, "Nome do fornecedor")}
              </div>

              <div className="form-group row">
                {generateHelpForm("Chave", "accessKey", "number", 12, "Chave de acesso")}
              </div>

              <div className="form-group row">
                {generateCardForm("icmsBase", "number", "Base ICMS")}
                {generateCardForm("icmsValue", "number", "Valor ICMS")}
                {generateCardForm("icmsBaseSub", "number", "Base ICMS Sub")}
                {generateCardForm("icmsValueSub", "number", "Valor ICMS Sub")}
                {generateCardForm("taxValue", "number", "Valor Frete")}
                {generateCardForm("insuranceValue", "number", "Seguro")}
                {generateCardForm("ipiValue", "number", "Valor IPI")}
                {generateCardForm("otherValue", "number", "Outras")}
              </div>

            </div>
          </div>
        </div>

        <div className="form-group row">
          <div className="card">
            <button type="button" className="no-style p-0" id="products" data-toggle="collapse" data-target="#productContent" aria-expanded="true" aria-controls="productContent">
              <div className="card-header">
                <h4>Produtos</h4>
              </div>
            </button>
            <div className="card-body p-0 collapse show" aria-labelledby="product">
              <table className="table table-sm">
                <thead>
                  <tr className="d-flex">
                    <th scope="col" className="col-6 text-center">Nome do Produto</th>
                    <th scope="col" className="col-1 text-center">Qtd</th>
                    <th scope="col" className="col-3 text-center">Preço Unitário</th>
                    <th scope="col" className="col-2 text-center">Ação</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((value, index) => {
                    return (
                      <tr className="d-flex">
                        <td className="col-6"><input type="text" className="form-control" placeholder="Nome" value={value.name} /></td>
                        <td className="col-1"><input type="number" className="p-2 form-control" placeholder="Qtd" value={value.qtd} /></td>
                    <td className="col-3"><input type="number" className="form-control" placeholder="Preço unitário" value={value.value} /></td>
                        <td className="col-2 d-flex justify-content-between">
                          <button type="button" className="btn btn-success btn-sm" onClick={() => setProduct(addProduct(index))}><span class="material-icons">done</span></button>
                          <button type="button" className="btn btn-primary btn-sm" onClick={() => editProduct(index)}><span class="material-icons">create</span></button>
                          <button type="button" className="btn btn-danger btn-sm" onClick={() => setProduct(removeProduct(index))}><span class="material-icons">clear</span></button>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </form>
    </div >
  )
}

export default NewNF
