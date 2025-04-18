import React from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { LogOut, User, BookOpen, LayoutDashboard, FileText, CheckSquare, Users } from 'lucide-react';
import { useAuthStore } from '../stores/authStore';

const NavLink: React.FC<{ to: string; icon: React.ReactNode; children: React.ReactNode }> = ({
  to,
  icon,
  children,
}) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
        isActive
          ? 'bg-indigo-100 text-indigo-700'
          : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
      }`}
    >
      {icon}
      <span>{children}</span>
    </Link>
  );
};

export const Layout: React.FC = () => {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="h-16 flex items-center px-4">
          <Link to="/" className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-indigo-600" />
            <span className="text-lg font-semibold text-gray-900">Évaluation</span>
          </Link>
        </div>
        <nav className="mt-4 px-2 space-y-1">
          <NavLink to="/" icon={<LayoutDashboard size={20} />}>
            Tableau de bord
          </NavLink>
          {user?.role === 'professor' ? (
            <>
              <NavLink to="/exercises/create" icon={<FileText size={20} />}>
                Créer un exercice
              </NavLink>
              <NavLink to="/submissions" icon={<CheckSquare size={20} />}>
                Soumissions
              </NavLink>
              <NavLink to="/students" icon={<Users size={20} />}>
                Étudiants
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to="/exercises" icon={<FileText size={20} />}>
                Exercices
              </NavLink>
              <NavLink to="/mes-soumissions" icon={<CheckSquare size={20} />}>
                Mes soumissions
              </NavLink>
            </>
          )}
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <header className="h-16 bg-white shadow-sm flex items-center justify-end px-8">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <User size={20} className="text-gray-500" />
              <span className="text-sm font-medium text-gray-700">{user?.name}</span>
              <span className="text-xs px-2 py-1 rounded-full bg-indigo-100 text-indigo-800">
                {user?.role === 'professor' ? 'Professeur' : 'Étudiant'}
              </span>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
            >
              <LogOut size={20} />
              <span>Déconnexion</span>
            </button>
          </div>
        </header>

        <main className="flex-1 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};