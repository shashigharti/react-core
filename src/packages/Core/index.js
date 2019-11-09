import Dashboard from './src/dashboard/Dashboard';

//should remove
import AddTemplate from './src/email-management/AddTemplate';
import Templates from './src/email-management/Templates';
//
import TemplateList from './src/email-management/src/TemplateList';
import TemplateContextProvider from './src/email-management/contexts/templateContext';

import AddRole from './src/roles/AddRole';
import Roles from './src/roles/RolePageList';
import RRow from './src/roles/Row';
// roles
import RoleList from './src/roles/src/RoleList';
import RoleContextProvider from './src/roles/contexts/roleContext';

import FrontPageSettings from './src/settings/FrontPageSettings';
import GeneralSettings from './src/settings/GeneralSettings';
import LinkSettings from './src/settings/LinkSettings';
import PriceSettings from './src/settings/PriceSettings';
import SearchSettings from './src/settings/SearchSettings';
import Settings from './src/settings/Settings';
import SiteSettings from './src/settings/SiteSettings';

// users
import AddUser from './src/users/AddUser';
//should remove previous users component
import Users from './src/users/Users';
import UserList from './src/users/src/UserList';
import UserContextProvider from './src/users/contexts/userContext';
//

import URow from './src/users/Row';
import RegisterPage from './src/users/RegisterPage';
import ForgotPasswordPage from './src/users/ForgotPasswordPage';
import LoginPage from './src/users/LoginPage';

// partials
import Header from './Components/Header';

// contexts
import AuthContextProvider, { AuthContext } from './contexts/AuthContext';
import { authReducer } from './reducers/authReducer';

export {
  Dashboard,
  //
  AddTemplate,
  Templates,
  TemplateList,
  TemplateContextProvider,
  //
  AddRole,
  Roles,
  URow,
  RoleList,
  RoleContextProvider,
  //
  FrontPageSettings,
  GeneralSettings,
  LinkSettings,
  PriceSettings,
  SearchSettings,
  Settings,
  SiteSettings,
  //
  AddUser,
  Users,
  RRow,
  RegisterPage,
  ForgotPasswordPage,
  LoginPage,
  UserList,
  UserContextProvider,
  //
  Header,
  AuthContextProvider,
  AuthContext,
  authReducer,
};
