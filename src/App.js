import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCircleQuestion, faCircleInfo, faAngleDown, faEllipsisVertical, faArrowRightArrowLeft, faCalendar, faList, faTag } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <section className='pageInfo'>
        <div className='rows-1'>
          <div className=''>Mockup By:<br/> Kelly Granger</div>
          <div className=''><h1>Policy</h1></div>
          <div className='px-1 pt-1 policyCurrentPerson NP'>NP</div>
          <div className='px-1 pt-1 policyCurrentPerson ZF'>ZF</div>
          <div className='px-1 pt-1 policyCurrentPerson WS'>WS</div>
          <div className=''>+10</div>
          <div className='policyButton'>Invite</div>
          <div className='policyButton'>Report & Graph</div>
          <div className='icon dark'><FontAwesomeIcon icon={faCircleInfo} /></div>
          <div className='icon dark'><FontAwesomeIcon icon={faCircleQuestion}/></div>
          <div className='icon'><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
          <div className='px-1 pt-1 policyCurrentPerson NP'>NP</div>
        </div>

        <div className='rows-2'>
          <div className='leftMenu'>
            <div className='cols-1 internal'> Internal <span className='gridDots'><FontAwesomeIcon icon={faEllipsisVertical} /><FontAwesomeIcon icon={faEllipsisVertical} /><FontAwesomeIcon icon={faEllipsisVertical} /></span></div>
            <div className='cols-2 notices'> Notices <div><span className='noticeNumber'>1</span></div></div>
              
            <div className='cols-3 modules'>
              <ul>Modules
                <li>Policy</li>
                <li>Issue Managemen...</li>
                <li>Control Mapping</li>
              </ul>
            

              <div className='cols-4 comingSoon'> 
                <ul>Coming Soon
                  <li>Training</li>
                  <li>Governance</li>
                  <li>Token Due Diligence</li>
                  <li>Onboarding</li>
                  <li>Comms with Public</li>
                  <li>Privacy</li>
                </ul>   
              </div>
              <div className='cols-1'></div>
              <div className='cols-1 admin'> Admin <FontAwesomeIcon icon={faArrowRightArrowLeft} /></div>
            </div>
          </div>


          <div className='mx-5 mb-3 mt-2 p-3 tableStart'>
            <div className='rows-1'>
              <div className='px-4 py-2 draft'>Draft<span><FontAwesomeIcon icon={faAngleDown} /></span></div>
              <div className='px-4 py-2 export'>Export</div>
              <div className='moreChoices'>...</div>
            </div>
              <div className='rightTable'>
                <table>
                  <tbody>
                    <tr className='tableTitles'>
                      <th><FontAwesomeIcon icon={faCalendar} />Effective From</th>
                      <th><FontAwesomeIcon icon={faList} />Department Owner</th>
                      <th><span className='textBox'>T</span>Policy Name</th>
                      <th><FontAwesomeIcon icon={faTag} />Policy Owner</th>
                      <th><FontAwesomeIcon icon={faCalendar} />Review Date</th>
                    </tr>
                    <tr className='active '>
                      <td>01/21/2021</td>
                      <td>Finance</td>
                      <td>Expense Reimbursement Policy</td>
                      <td><span className='PS border owner'>PS</span><span className='PO'>Paul Smith</span></td>
                      <td>01/22/2021</td>
                      <td className='moreOptions'>...</td>
                    </tr>
                    <tr>
                      <td>01/21/2021</td>
                      <td className='deptOwner'>Compliance</td>
                      <td>Whistleblowing Policy</td>
                      <td><span className='DJ border owner'>DJ</span><span className='PO'>Daniel Johnson</span></td>
                      <td>01/23/2021</td>
                      <td className='moreOptions'>...</td>
                    </tr>
                    <tr>
                      <td>01/21/2021</td>
                      <td className='deptOwner'>IT</td>
                      <td>Data Access Policy</td>
                      <td><span className='TS border owner'>TS</span><span className='PO'>Taylor Smith</span></td>
                      <td>01/24/2021</td>
                      <td className='moreOptions'>...</td>
                    </tr>
                    <tr>
                      <td>06/03/2020</td>
                      <td className='deptOwner'>Compliance</td>
                      <td>Conflicts Policy</td>
                      <td><span className='SM border owner'>SM</span><span className='PO'>Silvia Miller</span></td>
                      <td>06/03/2021</td>
                      <td className='moreOptions'>...</td>
                    </tr>
                    <tr>
                      <td>06/03/2020</td>
                      <td className='deptOwner'>IT</td>
                      <td>Privacy Policy</td>
                      <td><span className='GC border owner'>GC</span><span className='PO'>George Campbell</span></td>
                      <td>06/03/2021</td>
                      <td className='moreOptions'>...</td>
                    </tr>
                    <tr className='active'>
                      <td>06/03/2020</td>
                      <td>IT</td>
                      <td>Disaster Recovery Policy</td>
                      <td><span className='NC border owner'>NC</span><span className='PO'>Neil Clark</span></td>
                      <td>06/03/2021</td>
                      <td className='moreOptions'>...</td>
                    </tr>
                    <tr>
                      <td>06/03/2020</td>
                      <td className='deptOwner'>Human Resources</td>
                      <td>Code of Conduct</td>
                      <td><span className='BW border owner'>BW</span><span className='PO'>Benson Walker</span></td>
                      <td>06/03/2020</td>
                      <td className='moreOptions'>...</td>
                    </tr>
                    <tr>
                      <td>06/03/2020</td>
                      <td className='deptOwner'>Human Resources</td>
                      <td>Vacation Policy</td>
                      <td><span className='TF border owner'>TF</span><span className='PO'>Tina Fraser</span></td>
                      <td>06/03/2020</td>
                      <td className='moreOptions'>...</td>
                    </tr>
                    <tr>
                      <td>03/31/2020</td>
                      <td className='deptOwner'>Sales</td>
                      <td>Salesforce Policy</td>
                      <td><span className='MB border owner'>MB</span><span className='PO'>Michelle Bruce</span></td>
                      <td>03/31/2021</td>
                      <td className='moreOptions'>...</td>
                    </tr>
                    <tr>
                      <td>03/31/2020</td>
                      <td className='deptOwner'>Finance</td>
                      <td>Payroll Policy</td>
                      <td><span className='JK border owner'>JK</span><span className='PO'>Judy King</span></td>
                      <td>03/31/2021</td>
                      <td className='moreOptions'>...</td>
                    </tr>
                    <tr>
                      <td className='newPolicy'>Add New Policy +</td>
                    </tr>
                  </tbody>
                </table>
              </div>
          </div>
        </div>  
      </section>
    </div>
  );
}

export default App;
