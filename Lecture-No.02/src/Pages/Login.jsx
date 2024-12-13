  import {useState} from "react";


  const Login = () => {
      const [userData, setUserData] = useState({
          email: "",
          password: ""
      })
      console.log(userData);
      const handleChangeEmail = (event) => {
          setUserData({...userData, email: event.target.value})
      };
      const handleChangePassword = (event) => {
          setUserData({...userData, password: event.target.value});
      }
      const handleLogin = () => {
          const { email, password } = userData;
      
          if (email.trim().length === 0) {
            alert("Please enter email");
            return;
          }
          if (password.trim().length === 0) {
            alert("Please enter password");
            return;
          }
          setUserData({
            email: "",
            password: "",
          });
        };

      return (
          <>
          <div className="flex p-5 justify-center items-center flex-col h-screen">
            <div className=" flex justify-center text-center flex-col border-2 border-red-700 rounded-md text-zinc-50 w-[350px] h-[300px] p-4 bg-blue-700  ">

            
              <div className="mb-8 ">
                  <label className="mr-32">Email:</label><br />
                  <input className="w-[200px] h-10 rounded-md pl-2 text-black outline-none"
                    onChange ={handleChangeEmail}
                      type="email"
                      value={userData.email}
                      placeholder="Enter your Email" />
              </div>
              <div className="mb-8">
                      <label className="mr-32">Password:</label><br/>
                      <input className="w-[200px] h-10 rounded-md pl-2 text-black "
                      onChange = {handleChangePassword}
                      type="password"
                      value={userData.password}
                      placeholder="Enter your Password"/>
              </div>
              <div>

              <button onClick={handleLogin} className="w-[200px] h-10 py-1 bg-lime-700 rounded-md " type="submit">Login</button>
              </div>
              </div>
          </div>
          </>
      )
  }

  export default Login;