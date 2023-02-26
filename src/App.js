import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCircleQuestion, faCircleInfo, faAngleDown, faEllipsisVertical, faArrowRightArrowLeft, faCalendar, faList, faTag } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      <section className='pageInfo'>
        <div className='row-1'>
          <div className='col-1'>Mockup By:<br/> Kelly Granger</div>
          <div className='col-2'><h1>Policy</h1></div>
          <div className='col-3 policyCurrentPerson NP'>NP</div>
          <div className='col-4 policyCurrentPerson ZF'>ZF</div>
          <div className='col-5 policyCurrentPerson WS'>WS</div>
          <div className='col-6'>+10</div>
          <div className='col-7 policyButton'>Invite</div>
          <div className='col-8 policyButton'>Report & Graph</div>
          <div className='col-9 icon dark'><FontAwesomeIcon icon={faCircleInfo} /></div>
          <div className='col-10 icon dark'><FontAwesomeIcon icon={faCircleQuestion}/></div>
          <div className='col-11 icon'><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
          <div className='col-12 NP'>NP</div>
        </div>

        <div className='row-2'>
          <div className='leftMenu'>
            <div className='col-1 internal'> Internal <span className='gridDots'><FontAwesomeIcon icon={faEllipsisVertical} /><FontAwesomeIcon icon={faEllipsisVertical} /><FontAwesomeIcon icon={faEllipsisVertical} /></span></div>
            <div className='col-2 notices'> Notices <div><span className='noticeNumber'>1</span></div></div>
              
            <div className='col-3 modules'>
              <ul>Modules
                <li>Policy</li>
                <li>Issue Managemen...</li>
                <li>Control Mapping</li>
              </ul>
            </div>

            <div className='col-4 comingSoon'> 
              <ul>Coming Soon
                <li>Training</li>
                <li>Governance</li>
                <li>Token Due Diligence</li>
                <li>Onboarding</li>
                <li>Comms with Public</li>
                <li>Privacy</li>
              </ul>   
            </div>
            <div className='col-1'></div>
            <div className='col-1 admin'> Admin <FontAwesomeIcon icon={faArrowRightArrowLeft} /></div>
          </div>
        </div>


        <div className='tableStart'>
          <div className='row-1'>
            <div className='col-1 draft'>Draft <FontAwesomeIcon icon={faAngleDown} /></div>
            <div className='col-1 export'>Export</div>
            <div className='col-1'>...</div>
          </div>
            <div className='rightTable'>
              <table>
                <tbody>
                  <tr>
                    <th><FontAwesomeIcon icon={faCalendar} />Effective From</th>
                    <th><FontAwesomeIcon icon={faList} />Department Owner</th>
                    <th><span className='textBox'>T</span>Policy Name</th>
                    <th><FontAwesomeIcon icon={faTag} />Policy Owner</th>
                    <th><FontAwesomeIcon icon={faCalendar} />Review Date</th>
                  </tr>
                  <tr className='active'>
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
      </section>
    </div>
  );
}

export default App;
