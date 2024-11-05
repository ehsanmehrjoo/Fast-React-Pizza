import { useState } from 'react';
import Button from '../../Ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { updateName } from './userSlice';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate()
  console.log(username);
  const userName = useSelector(state => state.user.username)
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(updateName({username}))
    navigate(`/menu`)
  }

  return (
    <form onSubmit={handleSubmit}  >
    {userName ?<div>
          <Button to='/menu' type="primary">Continue ordering, {userName}</Button>
        </div> : <> <p className='mb-5 text-sm text-stone-600 md:text-base'>👋 Welcome! Please start by telling us your name:</p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className='w-72 h-8 md:h-10 md:w-75 p-5 input'
      />  <div>
          <Button type="primary">Continue ordering, {userName}</Button>
        </div>

      {username !== '' && (
        <div>
          <Button type="primary">Start ordering</Button>
        </div>
      )}
      </>}
    </form>
  );
}

export default CreateUser;
