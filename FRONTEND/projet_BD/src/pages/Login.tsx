// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { toast } from 'react-hot-toast';
// import { BookOpen } from 'lucide-react';
// import { useAuthStore } from '../stores/authStore';

// export const Login: React.FC = () => {
//   const navigate = useNavigate();
//   const { login, isLoading } = useAuthStore();
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     remember: false,
//   });

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       await login(formData);
//       toast.success('Connexion réussie');
//       navigate('/');
//     } catch (error) {
//       toast.error('Erreur de connexion');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-100 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 space-y-8">
//         <div className="text-center">
//           <div className="flex justify-center">
//             <BookOpen className="h-12 w-12 text-indigo-600" />
//           </div>
//           <h2 className="mt-4 text-3xl font-extrabold text-gray-900">
//             Bienvenue
//           </h2>
//           <p className="mt-2 text-sm text-gray-600">
//             Plateforme d'évaluation automatisée
//           </p>
//         </div>
//         <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//           <div className="space-y-4">
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                 Adresse email
//               </label>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 required
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 placeholder="vous@exemple.com"
//                 value={formData.email}
//                 onChange={(e) =>
//                   setFormData({ ...formData, email: e.target.value })
//                 }
//               />
//             </div>
//             <div>
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                 Mot de passe
//               </label>
//               <input
//                 id="password"
//                 name="password"
//                 type="password"
//                 required
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 placeholder="••••••••"
//                 value={formData.password}
//                 onChange={(e) =>
//                   setFormData({ ...formData, password: e.target.value })
//                 }
//               />
//             </div>
//           </div>

//           <div className="flex items-center justify-between">
//             <div className="flex items-center">
//               <input
//                 id="remember"
//                 name="remember"
//                 type="checkbox"
//                 className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
//                 checked={formData.remember}
//                 onChange={(e) =>
//                   setFormData({ ...formData, remember: e.target.checked })
//                 }
//               />
//               <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
//                 Se souvenir de moi
//               </label>
//             </div>
//             <div className="text-sm">
//               <Link to="/reset-password" className="font-medium text-indigo-600 hover:text-indigo-500">
//                 Mot de passe oublié ?
//               </Link>
//             </div>
//           </div>

//           <div>
//             <button
//               type="submit"
//               disabled={isLoading}
//               className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               {isLoading ? 'Connexion...' : 'Se connecter'}
//             </button>
//           </div>

//           <div className="text-center text-sm">
//             <span className="text-gray-600">Pas encore de compte ?</span>{' '}
//             <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
//               S'inscrire
//             </Link>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };