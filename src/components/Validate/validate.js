export const validate = (data , type)=> {

  const errors = {}

  
  //email
  if (!data.email) {
    errors.email = "Email required"
  }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.email)) {
    errors.email = "Email address is invalid"
  } else {
    delete errors.email
  }
  
  //password
  if (!data.password) {
    errors.password = "password required"
  } else if (data.password.length < 6) {
    errors.password = "password must be more 6 character"
  } else {
    delete errors.password
  }
  
  

  if(type === "signin") {

    //username
    if (!data.username) {
      errors.username = "Username required"
    }else {
      delete errors.username
    }

    


  //isAccepted
  if (!data.isAccepted) {
    errors.isAccepted = "please confirm that you are not a robot"
  }else{
    delete errors.isAccepted
  }

      //confirmPassword
      if (!data.confirmPassword) {
        errors.confirmPassword = "confirm password required"
      } else if (data.confirmPassword !== data.password) {
        errors.confirmPassword = "confirm password do not match"
      } else {
        delete errors.confirmPassword
      }

  }
  
  return errors
}