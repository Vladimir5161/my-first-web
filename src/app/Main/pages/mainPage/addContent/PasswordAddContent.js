import React from "react"

const PasswordAddContent = ({
    passwordWindow, 
    UserPuttedName, 
    UserPuttedPass, 
    OnNameChange, 
    OnPassChange, 
    OnPassCheckClickSuccess,
    OnPassCheckClickNot,
    OnPassCheckClick,
    userName, 
    userPass,
    userInfoField,
    OnUserFiledClick,
}) => {
    let Name = React.createRef();
    let Pass = React.createRef();
    let onInputNameChange = () => {
        let newName = Name.current.value;
        OnNameChange(newName);
    }
    let onInputPassChange = () => {
        let newPass = Pass.current.value;
        OnPassChange(newPass);
    }
    let OnPassCheck = () => {
        if (UserPuttedName === userName && UserPuttedPass === userPass) {
            OnPassCheckClickSuccess()
            Name.current.value = "";
            Pass.current.value = "";
        } else if(UserPuttedPass === "" ) {
            OnPassCheckClick();
            alert("Password field cannot be empty");
            Name.current.value = "";
        } else if(UserPuttedName === "") {
            OnPassCheckClick();
            alert("Name field cannot be empty");
            Pass.current.value = "";
        } else {
            OnPassCheckClickNot();
            alert("your User Name or Password is wrong");
            Name.current.value = "";
            Pass.current.value = "";
        }
    }
    return(
        <div className={passwordWindow}>
            <div className="userInfoText">User Name</div>
            <input type="text" className={userInfoField} ref={Name}  onChange={()=>{onInputNameChange()}} onClick={()=>{OnUserFiledClick()}}/>
            <div className="userInfoText">User Password</div>
            <input type="password" className={userInfoField} ref={Pass} onChange={()=>{onInputPassChange()}} onClick={()=>{OnUserFiledClick()}}/>
            <input type="submit" className="filterButton Submit" value="Send" onClick={()=>{OnPassCheck()}}/>
        </div>
    )
}

export default PasswordAddContent;