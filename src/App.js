import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Attendance from './Attendance';
import FileUpload from './FileUpload'

function App() {
  return (
    <div>
      <FileUpload/>
      <Attendance/>
    </div>
  );
}
 
export default App;