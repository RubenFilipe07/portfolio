import './ProjetosItem.css'

const ProjetosItem = (props) => {
  return (
    <div className="card-projetos" key={props.key}>
      <img className="projeto-imagem" src={props.imagem_principal_url} alt={props.titulo} />
      <a href={props.url} target="_blank" rel="noreferrer" className="projeto-link">
        <h1 className="projeto-titulo">{props.titulo}</h1>
      </a>
      <p className="projeto-descricao">{props.descricao}</p>
      <div className="projeto-tecnologias-bloco">
        {props.tecnologias_utilizadas.map((tecnologia) => (
          <span key={tecnologia} data-content={tecnologia.toLowerCase()} className="projeto-tecnologia">{tecnologia}</span>
        ))}
      </div>

    </div>

  );
}

export default ProjetosItem;