import useDepensesReducer from "../reducer/DepensesReducer.jsx";
import Depense from "./Depense.jsx";

const Depenses = () => {
  const [depenses, dispatch] = useDepensesReducer();

  const ajouterDepense = () => {
    dispatch({
      type: "add_depense",
      payload: { id: Date.now(), intitule: "Café", categorie: "Alimentation", montant: 5 }
    });
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Liste des Dépenses</h2>
      <button className="btn btn-primary mb-3" onClick={ajouterDepense}>
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
    </div>
  );
};

export default Depenses;