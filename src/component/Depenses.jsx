import React, { useState } from 'react';
import useDepensesReducer from "../reducer/DepensesReducer.jsx";
import Depense from "./Depense.jsx";
import ModaleAjouterDepense from "./ModalAjouterDepense.jsx";

const Depenses = () => {
  const [depenses, dispatch] = useDepensesReducer();
  const [showModale, setShowModale] = useState(false);

  const ajouterDepense = () => {
    dispatch({
      type: "add_depense",
      payload: { id: Date.now(), intitule: "Café", categorie: "Alimentation", montant: 5 }
    });
  };

  const fermerModale = () => {
    setShowModale(false)
  };

  return (
    <div className="container mt-4">
        <h2 className="mb-3">Liste des Dépenses</h2>
        <button type="button" className="btn btn-primary mb-3" onClick={() => setShowModale(true)}>
            Ajouter une dépense
        </button>

        <table className="table table-striped table-bordered">
            <thead className="table-dark">
                <tr>
                <th>#</th>
                <th>Nom</th>
                <th>Montant (€)</th>
                <th>Catégorie</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                
                {depenses.length > 0 ? (
                depenses.map((depense, index) => (
                    <tr>
                        <Depense key={depense.id} index={index} depense={depense} handleClick={ajouterDepense} />
                    </tr>
                ))
                ) : (
                <tr>
                    <td colSpan="6" className="text-center">Aucune dépense ajoutée</td>
                </tr>
                )}
            </tbody>
        </table>

        {showModale && (<ModaleAjouterDepense show={showModale} fermerModale={fermerModale} dispatch={dispatch} />)}
    </div>
  );
};

export default Depenses;