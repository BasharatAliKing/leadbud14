import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Register from './pages/register/Register'
import Login from './pages/login/Login'
import DatabaseSearch from './pages/database-search/DatabaseSearch'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Loader from './components/Loader'
import VerifyEmail from './pages/verifyemail/VerifyEmail'
import DashBoardAnt from './pages/dashboard-ant'
import IndividualVerificatinToolPage from './pages/verificationtools'
import EmailSearch from './pages/emailsearch'
import PricingPage from './pages/pricing'
import ProspectsPage from './pages/prospects'
import DomainSearch from './pages/domain-search/DomainSearch'
import BulkEmailSearch from './pages/bulkemail-search/BulkEmailSearch'
import FinderPage from './pages/findertools/index'
import NewProspectsPage from './pages/new-prospects/Index'
import Account from './pages/my-account/Account'
import Billing from './pages/billing/Billing'
import EmailAccounts from './pages/email-accounts/EmailAccounts'
import DontEmailList from './pages/donot-email-list/DontEmailList'
import MyTeam from './pages/my-team/MyTeam'
import Transactions from './pages/transactions/Transactions'
import SearchSettings from './pages/search-settings/SearchSettings'
import Error from './pages/Error/Error'
import FbFanpage from './pages/FbFanpage'

function App() {

  return (
    <div className='app'>
      <Router>
      <Routes>
        <Route exact path='/' element={<Register />} />
        <Route path='/verify-email'  element={<VerifyEmail />}/>
        <Route path='/login' element={<Login /> } />
        <Route path="/dashboard"  element = {<DashBoardAnt />} />
        <Route path="/verify-individual-emails" element={<IndividualVerificatinToolPage />} />
        <Route path="/email-search" element={<EmailSearch />} />
        <Route path="/finder-tools" element={<FinderPage />}/>
        <Route path='/database-search' element={<DatabaseSearch />} />
        <Route path='/prospects' element={<ProspectsPage />} />
        <Route path='/pricing' element={<PricingPage />} />
        <Route path='/domain-search' element={<DomainSearch />} />
        <Route path='/bulk-email-search' element={<BulkEmailSearch />} />
        <Route path='/prospects/new' element={<NewProspectsPage />} />
        <Route path='/account/profile' element={<Account />}  />
        <Route path='/account/billing' element={<Billing />}  />
        <Route path='/account/email-accounts' element={<EmailAccounts />} />
        <Route path='/account/do-not-email-list' element={<DontEmailList />} />
        <Route path='/account/team' element={<MyTeam />} />
        <Route path='/account/transactions' element={<Transactions />} />
        <Route path='/account/search-settings' element={<SearchSettings />} />
        <Route path="/facebook" element={<FbFanpage/>} />
        <Route path='*' element={<Error/>} />

      </Routes>

      </Router>
    </div>
  )
}

export default App
