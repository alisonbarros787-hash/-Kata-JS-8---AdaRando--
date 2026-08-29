


const CarteRando = ({rando}) => {
    return (
        <article className="container">
            <h3>{rando.nom}</h3>
            <h3>{rando.difficulte}</h3>
            <h3>{rando.duree_r}</h3>
            <h3>{rando.denivele_m}</h3>
            <h3>{rando.region}</h3>
            <h3>{rando.balisee}</h3>
        </article>
    )
}

export default CarteRando