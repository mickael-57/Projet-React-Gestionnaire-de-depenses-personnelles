import React, { useState } from 'react';
import useDepensesReducer from "../reducer/DepensesReducer.jsx";
import Depense from "./Depense.jsx";
import ModaleAjouterDepense from "./ModalAjouterDepense.jsx";

const Depenses = () => {
  const [depenses, dispatch] = useDepensesReducer();
  const [showModale, setShowModale] = useState(false);
  const [depenseEnCours, setDepenseEnCours] = useState(null);

  const totalDepenses = depenses.reduce((total, depense) => total + parseFloat(depense.montant), 0);
  const depensesParCategorie = depenses.reduce((acc, depense) => {
    if (acc[depense.categorie]) acc[depense.categorie] += parseFloat(depense.montant);
    else acc[depense.categorie] = parseFloat(depense.montant);

    return acc;
  }, {});
  const categories = Object.keys(depensesParCategorie);

  const ouvrirModale = (depense) => {
    setDepenseEnCours(depense);
    setShowModale(true)
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
                    <Depense key={depense.id} index={index} ouvrirModale={() => ouvrirModale(depense)} depense={depense} dispatch={dispatch} />
                ))
                ) : (
                <tr>
                    <td colSpan="6" className="text-center">Aucune dépense ajoutée</td>
                </tr>
                )}
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan="2">Total</td>
                    <td>{totalDepenses}</td>
                    <td colSpan="2"></td>
                </tr>
            </tfoot>
        </table>

        {/* Tableau des catégories */}
        <table className="table table-striped table-bordered">
            <thead className="table-dark">
                <tr>
                    <th>Catégorie</th>
                    <th>Montant (€)</th>
                </tr>
            </thead>
            <tbody>
                {categories.map((categorie, index) => (
                    <tr key={index}>
                        <td className="text-center">{categorie}</td>
                        <td className="text-center">{depensesParCategorie[categorie]}</td>
                    </tr>
                ))}
            </tbody>
        </table>

        {showModale && (<ModaleAjouterDepense show={showModale} fermerModale={fermerModale} depense={depenseEnCours} dispatch={dispatch} />)}
    </div>
  );
};

export default Depenses;