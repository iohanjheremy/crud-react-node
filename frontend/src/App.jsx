import React from "react"
import Navbar from './components/Navbar'
import TableList from './components/TableList'
import ModalForm from './components/ModalForm';
import './App.css'

function App() {

  const [isOpen, setIsOpen] = React.useState(false);
  const [modalMode, setModalMode] = React.useState('add');

  const handleOpen = (mode) => {
    setModalMode(mode);
    setIsOpen(true);
  };

  const handleSubmit = () => {
    if (modalMode === 'add') {
      console.log('Modal Mode Add');
    } else {
      console.log('Modal mode Edit');
    }
  }

  return (
    <>
      <div>
        <Navbar onOpen={() => handleOpen('add')} />
        <TableList handleOpen={handleOpen}/>
        <ModalForm 
          isOpen={isOpen}
          OnSubmit={handleSubmit}
          onClose={() => setIsOpen(false)}
          mode={modalMode} 
        />
      </div>
    </>
  )
}

export default App
