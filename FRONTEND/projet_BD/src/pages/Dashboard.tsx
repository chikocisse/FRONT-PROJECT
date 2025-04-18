import React from 'react';
import { useAuthStore } from '../stores/authStore';
import { FileText, CheckSquare, Users, TrendingUp } from 'lucide-react';

const StatCard: React.FC<{
  title: string;
  value: string;
  icon: React.ReactNode;
  description: string;
}> = ({ title, value, icon, description }) => (
  <div className="bg-white rounded-lg shadow p-6">
    <div className="flex items-center">
      <div className="p-3 rounded-full bg-indigo-100 text-indigo-600">{icon}</div>
      <div className="ml-4">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <p className="text-3xl font-bold text-indigo-600">{value}</p>
        <p className="text-sm text-gray-500 mt-1">{description}</p>
      </div>
    </div>
  </div>
);

export const Dashboard: React.FC = () => {
  const { user } = useAuthStore();
  const isProfessor = user?.role === 'professor';

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          Tableau de bord {isProfessor ? 'Professeur' : 'Étudiant'}
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          Bienvenue, {user?.name}. Voici un aperçu de votre activité.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {isProfessor ? (
          <>
            <StatCard
              title="Exercices créés"
              value="0"
              icon={<FileText size={24} />}
              description="Total des exercices publiés"
            />
            <StatCard
              title="Soumissions"
              value="0"
              icon={<CheckSquare size={24} />}
              description="Soumissions en attente"
            />
            <StatCard
              title="Étudiants"
              value="0"
              icon={<Users size={24} />}
              description="Étudiants inscrits"
            />
            <StatCard
              title="Moyenne"
              value="0"
              icon={<TrendingUp size={24} />}
              description="Moyenne générale"
            />
          </>
        ) : (
          <>
            <StatCard
              title="Exercices"
              value="0"
              icon={<FileText size={24} />}
              description="Exercices disponibles"
            />
            <StatCard
              title="Complétés"
              value="0"
              icon={<CheckSquare size={24} />}
              description="Exercices terminés"
            />
            <StatCard
              title="En cours"
              value="0"
              icon={<FileText size={24} />}
              description="Exercices en cours"
            />
            <StatCard
              title="Moyenne"
              value="0"
              icon={<TrendingUp size={24} />}
              description="Votre moyenne"
            />
          </>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            {isProfessor ? 'Dernières soumissions' : 'Derniers exercices'}
          </h2>
          {/* <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-medium text-gray-900">
                    {isProfessor ? `Soumission #${i}` : `Exercice ${i}`}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {isProfessor ? 'Par Étudiant X' : 'SQL - Requêtes avancées'}
                  </p>
                </div>
                <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-800">
                  {isProfessor ? 'Non évalué' : 'Disponible'}
                </span>
              </div>
            ))}
          </div> */}
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            {isProfessor ? 'Performance des étudiants' : 'Vos performances'}
          </h2>
          {/* <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-medium text-gray-900">
                    {isProfessor ? `Groupe ${i}` : `Module ${i}`}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {isProfessor ? '25 étudiants' : 'Bases de données'}
                  </p>
                </div>
                <span className="text-lg font-semibold text-indigo-600">
                  {15 + i}/20
                </span>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};