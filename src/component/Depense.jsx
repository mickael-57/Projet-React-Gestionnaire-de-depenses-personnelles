const Depense = ({depense, index, handleClick}) => {
    return (
        <>
            <td>{index}</td>
            <td><button onClick={handleClick}>{depense.intitule}</button></td>
            <td>{depense.montant}</td>
            <td>{depense.categorie}</td>
            <td>
                <div class="btn-group">
                    {/* Bouton Modifier Paiement */}
                    <button type="button" className="btn btn-sm btn-secondary" onClick="open_modalAjouterPaiement(<?= $paiement->id ?>)">Modifier</button>

                    {/* Bouton Supprimer Paiement */}
                    <button type="button" className="btn btn-sm btn-danger">Supprimer</button>
                </div>
            </td>
        </>
    )
   }
   
export default Depense