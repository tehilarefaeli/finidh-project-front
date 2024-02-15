import React from 'react';
import SimpleCard from '../components/basic/card';

function Profile() {
  const { email } = useParams();
  const { password } = useParams();
    
  const [user,setuser] = useState();
 
   
     console.log("e",email)
    console.log("p",password)
   
 
 
 
   useEffect(() => {
      GetRequest('/users/getUsersExist', {
       email,
       password
     }).then(res => {
       console.log("user:" + res);
             setuser(res)
     }
     ).catch(e => console.log(e))
     
   }, []);

  return (
    <SimpleCard
    title="Profile"
    data='Im profile'
    size='small'
    
    />
  );
}

export default Profile;
