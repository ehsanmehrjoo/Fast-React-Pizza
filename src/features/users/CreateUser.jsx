import { useState } from 'react';
import Button from '../../Ui/Button';
import { useDispatch } from 'react-redux';
import { updateName } from './userSlice';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate()
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(updateName({username}))
    navigate(`/menu`)
  }

  return (
    <form onSubmit={handleSubmit}  >
      <p className='mb-5 text-sm text-stone-600 md:text-base'>👋 Welcome! Please start by telling us your name:</p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className='w-72 h-8 md:h-10 md:w-75 p-5 input'
      />

      {username !== '' && (
        <div>
          <Button type="primary">Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
