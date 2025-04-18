import React from 'react';
import { useAuthStore } from '../stores/authStore';
import { FileText, Clock, User, CheckCircle, XCircle } from 'lucide-react';

export const SubmissionList: React.FC = () => {
  const { user } = useAuthStore();
  const isProfessor = user?.role === 'professor';

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          {isProfessor ? 'Soumissions des étudiants' : 'Mes soumissions'}
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          {isProfessor
            ? 'Liste des soumissions à évaluer'
            : 'Historique de vos soumissions'}
        </p>
      </div>

      {!isProfessor && (
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Joindre un exercice
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Titre de l'exercice</label>
              <input
                type="text"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Ex: Requêtes SQL avancées"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Fichier</label>
              <input
                type="file"
                className="mt-1 block w-full text-sm text-gray-700"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 bg-indigo-600 border border-transparent rounded-md text-white hover:bg-indigo-700"
            >
              Soumettre
            </button>
          </form>
        </div>
      )}

      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Exercice
                </th>
                {isProfessor && (
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Étudiant
                  </th>
                )}
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Statut
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Note
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[1, 2, 3, 4, 5].map((i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 text-gray-400 mr-2" />
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          Exercice {i}
                        </div>
                        <div className="text-sm text-gray-500">
                          SQL - Requêtes avancées
                        </div>
                      </div>
                    </div>
                  </td>
                  {isProfessor && (
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <User className="h-5 w-5 text-gray-400 mr-2" />
                        <div className="text-sm text-gray-900">Étudiant {i}</div>
                      </div>
                    </td>
                  )}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      Il y a {i} jours
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                  <span
  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
    i % 3 === 0
      ? 'bg-green-100 text-green-800'
      : i % 3 === 1
      ? 'bg-yellow-100 text-yellow-800'
      : 'bg-red-100 text-red-800'
  }`}
>
  {i % 3 === 0 ? 'Évalué' : i % 3 === 1 ? 'En cours' : 'Non évalué'}
</span>

                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {i % 3 === 0 ? (
                        <CheckCircle className="h-5 w-5 text-green-500 mr-1" />
                      ) : i % 3 === 1 ? (
                        <Clock className="h-5 w-5 text-yellow-500 mr-1" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-500 mr-1" />
                      )}
                      <span className="text-sm text-gray-900">
                        {i % 3 === 0 ? '18/20' : i % 3 === 1 ? 'En attente' : 'Non noté'}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-indigo-600 hover:text-indigo-900">
                      {isProfessor ? 'Évaluer' : 'Voir détails'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};



