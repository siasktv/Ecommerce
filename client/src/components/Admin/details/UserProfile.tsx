import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Button } from '@mui/material'

const UserProfile = () => {
  const params = useParams()

  const [user, setUser] = useState({
    name: '',
    email: '',
    isAdmin: false,
    password: '',
  })

  const [loading, setLoading] = useState(false)
  const [updating, setUpdating] = useState(false)

  const toggleAdmin = () => {
    setUser((prevUser) => ({
      ...prevUser,
      isAdmin: !prevUser.isAdmin,
    }))
  }

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true)
        const res = await axios.get(
          `http://localhost:3001/users/stats/find/${params.id}`
        )

        setUser({ ...res.data, password: '' })
        setLoading(false)
      } catch (err) {
        console.log(err)
        setLoading(false)
      }
    }

    fetchUser()
  }, [params.id])

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      setUpdating(true)
      const res = await axios.put(
        `http://localhost:3001/users/stats/${params.id}`,
        {
          ...user,
        }
      )

      setUser({ ...res.data, password: '' })
      toast.success('Profile updated...', {
        position: 'bottom-left',
      })

      setUpdating(false)
    } catch (err) {
      console.log(err)
      setUpdating(false)
      toast.error(err.response.data, {
        position: 'bottom-left',
      })
    }
  }

  return (
    <StyledProfile>
      <ProfileContainer>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <h3>User Profile</h3>
            <div>
              <label htmlFor="isAdmin">Admin:</label>
              <input
                type="checkbox"
                id="isAdmin"
                checked={user.isAdmin}
                onChange={toggleAdmin}
              />
            </div>
            {user.isAdmin ? (
              <Admin>Admin</Admin>
            ) : (
              <Customer>Customer</Customer>
            )}
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <label htmlFor="password">Password:</label>
            <input
              type="text"
              value={user.password}
              id="password"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <Button type="submit">
              {updating ? 'Updating' : 'Update Profile'}
            </Button>
          </form>
        )}
      </ProfileContainer>
    </StyledProfile>
  )
}

export default UserProfile

const StyledProfile = styled.div`
  margin: 3rem;
  display: flex;
  justify-content: center;
`

const ProfileContainer = styled.div`
  background-color: white
  max-width: 500px;
  width: 100%;
  height: auto;
  display: flex;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 5px;
  padding: 2rem;

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h3 {
      margin-bottom: 0.5rem;
    }

    label {
      margin-bottom: 0.2rem;
      color: gray;
    }
    input {
      margin-bottom: 1rem;
      outline: none;
      border: none;
      border-bottom: 1px solid gray;
    }
  }
`

const Admin = styled.div`
  color: rgb(253, 181, 40);
  background: rgb(253, 181, 40, 0.12);
  padding: 3px 5px;
  border-radius: 3px;
  font-size: 14px;
  margin-bottom: 1rem;
`
const Customer = styled.div`
  color: rgb(38, 198, 249);
  background-color: rgb(38, 198, 249, 0.12);
  padding: 3px 5px;
  border-radius: 3px;
  font-size: 14px;
  margin-bottom: 1rem;
`
