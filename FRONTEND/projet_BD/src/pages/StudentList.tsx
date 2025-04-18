import React from 'react';
import { User, Mail, Calendar, BookOpen } from 'lucide-react';

export const StudentList: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Liste des étudiants</h1>
        <p className="mt-1 text-sm text-gray-500">
          Gérez vos étudiants et suivez leurs progrès
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-12 w-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <User className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Étudiant {i}</h3>
                  <div className="flex items-center text-sm text-gray-500">
                    <Mail className="h-4 w-4 mr-1" />
                    <span>etudiant{i}@example.com</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center text-gray-500">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Inscrit le 01/03/2024</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <BookOpen className="h-4 w-4 mr-1" />
                  <span>{5 + i} exercices complétés</span>
                </div>
              </div>

              <div className="mt-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Progression globale</span>
                  <span className="font-medium text-indigo-600">{60 + i}%</span>
                </div>
                <div className="mt-2 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-indigo-600 h-2 rounded-full"
                    style={{ width: `${60 + i}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="bg-gray-50 px-6 py-4">
              <div className="flex justify-between items-center">
                <div className="text-sm">
                  <span className="font-medium text-gray-900">Moyenne :</span>
                  <span className="ml-2 text-indigo-600 font-bold">{15 + (i % 3)}/20</span>
                </div>
                <button className="text-sm text-indigo-600 hover:text-indigo-900 font-medium">
                  Voir le profil
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};