import React, { useState } from 'react';

const ModaleAjouterDepense = ({depense, show, fermerModale, dispatch}) => {
    const [showModale, setShowModale] = useState(show);
    const [intitule, setIntitule] = useState('');
    const [categorie, setCategorie] = useState('');
    const [montant, setMontant] = useState('');

    console.log(depense)
    if(depense) {
        setIntitule(depense.intitule);
        setCategorie(depense.categorie);
        setMontant(depense.montant);
    }

    const soumettreFormulaire = () => {
        if(depense) {
            dispatch({
                type: "update_depense",
                payload: {
                    id: depense.id,
                    intitule: intitule,
                    categorie: categorie,
                    montant: montant
                }
            });
        } else {
            dispatch({
                type: "add_depense",
                payload: {
                    id: Date.now(),
                    intitule: intitule,
                    categorie: categorie,
                    montant: montant
                }
            });
        }

        fermerModale();
    };

    return (
        <div>
            {show && (
                <div className="modal fade show" style={{ display: 'block' }} id="modalAjouterPaiement">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Ajouter un paiement</h5>
                                <button type="button" className="btn-close" onClick={fermerModale}></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-row">
                                        {/* Intitulé */}
                                        <div className="col">
                                            <label className="form-label" htmlFor="modalAjouterPaiement_intitule">Intitulé</label>
                                            <input className="form-control" type="text" id="modalAjouterPaiement_intitule" name="intitule"
                                                // value={depense ? depense.intitule : ''} 
                                                onChange={(e) => setIntitule(e.target.value)} />
                                        </div>

                                        {/* Catégorie */}
                                        <div className="col">
                                            <label className="form-label" htmlFor="modalAjouterPaiement_categorie">Catégorie</label>
                                            <input className="form-control" type="text" id="modalAjouterPaiement_categorie" name="categorie"
                                                // value={depense ? depense.categorie : ''} 
                                                onChange={(e) => setCategorie(e.target.value)} />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        {/* Montant */}
                                        <div className="col">
                                            <label className="form-label" htmlFor="modalAjouterPaiement_montant">Montant</label>
                                            <input className="form-control" type="number" id="modalAjouterPaiement_montant" name="montant"
                                                // value={depense != null ? depense.montant : ''} 
                                                onChange={(e) => setMontant(e.target.value)}  />
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={fermerModale}>Annuler</button>
                                <button type="button" className="btn btn-primary" onClick={soumettreFormulaire}>Enregistrer</button>
                            </div>
                        </div>
                    </div>
                </div>
             )}
        </div>
    );
};

export default ModaleAjouterDepense;
