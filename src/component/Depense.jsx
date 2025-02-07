const Depense = ({depense, index, dispatch, ouvrirModale}) => {

    const deleteDepense = (id) => {
        dispatch({
            type: 'delete_depense',
            payload: {
                id: id
            }
        });
    };

    return (
        <tr>
            <td>{index}</td>
            <td><button>{depense.intitule}</button></td>
            <td>{depense.montant}</td>
            <td>{depense.categorie}</td>
            <td>
                <div className="btn-group">
                    {/* Bouton Modifier Paiement */}
                    <button type="button" className="btn btn-sm btn-secondary" onClick={() => ouvrirModale(depense.id)}>Modifier</button>

                    {/* Bouton Supprimer Paiement */}
                    <button type="button" className="btn btn-sm btn-danger" onClick={() => deleteDepense(depense.id)}>Supprimer</button>
                </div>
            </td>
        </tr>
    )
   }
   
export default Depense