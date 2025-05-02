import React from 'react';
import { FileText, Clock, CheckCircle } from 'lucide-react';

export const ExerciseList: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Exercices disponibles</h1>
          <p className="mt-1 text-sm text-gray-500">
            Liste des exercices à réaliser
          </p>
        </div>
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-indigo-100 rounded-lg">
                  <FileText className="h-6 w-6 text-indigo-600" />
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  i % 3 === 0
                    ? 'bg-green-100 text-green-800'
                    : i % 3 === 1
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {i % 3 === 0 ? 'Terminé' : i % 3 === 1 ? 'En cours' : 'À faire'}
                </span>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Exercice {i}</h3>
              <p className="mt-1 text-sm text-gray-500">
                Description de l'exercice {i} sur les requêtes SQL avancées...
              </p>
              <div className="mt-4 flex items-center justify-between text-sm">
                <div className="flex items-center text-gray-500">
                  <Clock size={16} className="mr-1" />
                  <span>45 minutes</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <CheckCircle size={16} className="mr-1" />
                  <span>20 points</span>
                </div>
              </div>
            </div>
            <div className="px-6 py-4 bg-gray-50 border-t rounded-b-lg">
              <button className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                {i % 3 === 0 ? 'Voir la correction' : i % 3 === 1 ? 'Continuer' : 'Commencer'}
              </button>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};
