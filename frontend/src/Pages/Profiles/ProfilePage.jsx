import React, { useEffect } from 'react'
import styles from "./ProfilePage.module.css"
import {useDispatch, useSelector} from "react-redux"
import { getProfiles, addProfile, setCurrentProfile } from '../../Redux/Profile/actions/profileActions'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Modal from "react-modal"
import { useState } from 'react';
import {Link, useHistory} from "react-router-dom"

export const ProfilePage = () => {

    const [open, setOpen] = useState(false)
    const [name, setName] = useState("")
    const [err, setErr] = useState("")
   
    const customStyles = {

        overlay : {
            backgroundColor: "rgba(13, 13, 13)"
        },

        content : {
          backgroundColor                 : "transparent",
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)',
          border: "none",
          width: "40%",
        }
      };

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const dispatch = useDispatch()
    const history = useHistory()
    const token = localStorage.getItem("token")
    const {profile:profiles} = useSelector((state) => state.profiles)
    
    useEffect(() => {
        dispatch(getProfiles(token))
    }, [])

    useEffect(()=>{

    },[profiles])

    const handleAddProfile = (e) => {
        e.preventDefault();

        if(name.length > 0) {
            dispatch(addProfile({token, name}))
            setOpen(false)
            setErr("")
            setName("")
        }
        else {
            setErr("Please enter a name.")
        }
    }

    const handlePush = (item,e) => {
        e.preventDefault()
        
        dispatch(setCurrentProfile(item))
        history.push("/browse")
    }

    const handleInput = (e) => {
        setName(e.target.value)

        if(name.length > 2) {
            setErr("")
        }
    }
    

    return (
        <div className = {styles.full}>
            <Link to="/browse" className = {styles.logo}>
            <img
              src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
              alt="Netflix"
            />
            </Link>
            <div className = {styles.page}>
                <h2>Who's watching?</h2>
                <div className = {styles.box}>
                    {profiles && profiles.map((item) => (
                        <div onClick = {(e) => handlePush(item, e)} key = {item._id}>
                            <img src = {item.profilePic} className = {styles.profilebox}/>
                            <div className = {styles.profilename}> {item.name} </div>
                        </div>
                    ))}
                    <div>
                    <div onClick = {handleOpen} className = {styles.addprofile}> 
                    <AddCircleIcon style={{ fontSize: "100px", color: "grey",  marginTop: "20px" }} /> </div>
                    <div onClick = {handleOpen} className = {styles.profilename}> Add Profile </div>
                    <Modal 
                    isOpen = {open}
                    style={customStyles}
                    ariaHideApp={false} 
                    >
                        <h1 className = {styles.h1} > Add Profile </h1> 
                        <div className = {styles.profilename1}>Add a profile for another person watching Netflix.</div>
                        <div className = {styles.line}></div>
                        <div className = {styles.modalbox}>
                            <img src = "https://occ-0-3646-1007.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABbpWL03fAkaht1Kd_AmGpW43lGT2xWZr5AybdoYkJfedddBB5-LZLy8rTCTga8foi_HtOZxznQJ-hmwaIuD4RTRRJ5Qs.png?r=b97"/>
                            <input value = {name} onChange = {(e) => handleInput(e)} placeholder = "Name" type = "text" className = {styles.inputbox}/>
                            
                        </div>
                        {err && <div className = {styles.error}> {err} </div> }
                        <div className = {styles.line}></div>
                        <div className = {styles.btns}>
                            <button onClick = {handleAddProfile} className = {styles.cont}>CONTINUE</button>
                            <button onClick = {handleClose} className = {styles.cancel}>CANCEL</button>
                        </div>
                    </Modal>
                    </div>
                </div>
            </div>
        </div>
    )
}
