import React from 'react';
import styles from '../Styles/Register.module.css'
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';


function createData(spec, mobile, basic, standard, premium) {
  return { spec, mobile, basic, standard, premium };
}

const rows = [
  createData('Monthly Price', '₹199', '₹499', '₹649', '₹799'),
  createData('Video Quality', 'Good', 'Good', 'Better', 'Best'),
  createData('Resolution', '480p', '480p', '1080p', '4K+HDR'),
  createData('Watch on your TV and computer', 0, 1, 1, 1),
  createData('Watch on your mobile phone and tablet', 1, 1, 1, 1),
  createData('Screens you can watch on at the same time', '1', '1', '2', '4'),
  createData('Unlimited movies and TV shows', 1, 1, 1, 1),
  createData('Cancel Anytime', 1, 1, 1, 1),
];

export default function RegisterPlanTable({ plan, setPlan }) {
  var c1,c2,c3,c4;
  if (plan === 199) {
    c1 = 'red'
    c2 = '#757575'
    c3 = '#757575'
    c4 = '#757575'
  }
  if (plan === 499) {
    c2 = 'red'
    c1 = '#757575'
    c3 = '#757575'
    c4 = '#757575'
  }
  if (plan === 649) {
    c3 = 'red'
    c1 = '#757575'
    c2 = '#757575'
    c4 = '#757575'
  }
  if (plan === 799) {
    c4 = 'red'
    c2 = '#757575'
    c3 = '#757575'
    c1 = '#757575'
  }

  return (
    <table  className={styles.plan_table}>
        <thead>
            <tr>
                <th></th>
                <th className={styles.plan_table_th} onClick={() => setPlan(199)}>Mobile</th>
                <th></th>
                <th className={styles.plan_table_th} onClick={() => setPlan(499)}>Basic</th>
                <th></th>
                <th className={styles.plan_table_th} onClick={() => setPlan(649)}>Standard</th>
                <th></th>
                <th className={styles.plan_table_th} onClick={() => setPlan(799)}>Premium</th>
            </tr>
        </thead>
        <tbody>
            {
                rows.map((row) => (
                    <tr key={row.spec}>
                        <td>{row.spec}</td>
                        <td className={styles.plan_table_td} style={{color:`${c1}`}}>{typeof(row.mobile) == 'number' ? row.mobile ? <CheckIcon/> : <CloseIcon/> : row.mobile}</td>
                        <td></td>
                        <td className={styles.plan_table_td} style={{color:`${c2}`}}>{typeof(row.basic) == 'number' ? row.basic ? <CheckIcon/> : <CloseIcon/> : row.basic}</td>
                        <td></td>
                        <td className={styles.plan_table_td} style={{color:`${c3}`}}>{typeof(row.standard) == 'number' ? row.standard ? <CheckIcon/> : <CloseIcon/> : row.standard}</td>
                        <td></td>
                        <td className={styles.plan_table_td} style={{color:`${c4}`}}>{typeof(row.premium) == 'number' ? row.premium ? <CheckIcon/> : <CloseIcon/> : row.premium}</td>
                    </tr>
                ))
            }
        </tbody>
    </table>
  );
}

