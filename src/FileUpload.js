import React from 'react'
import axios from 'axios';
 
class FileUpload extends React.Component{
 
    constructor(){
        super();
        this.state = {
            file:'',
            attendance:[]
        };
 
        this.handleInputChange = this.handleInputChange.bind(this);
    }

 
    handleInputChange(event) {
        this.setState({
            file: event.target.files[0],
          })
    }
 
    submit(){      
        return new Promise((resolve, reject)=> {
            const data = new FormData() 
            data.append('file', this.state.file)
            let url = "http://127.0.0.1:8000/api/post-file";
            axios.post(url, data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                } 
            })
        .then(res => { // then print response status
            console.log(res);
            resolve(res)
            }).catch(error => {
                reject(error)
            });
          }); 
        }

 
    render(){
        return(
            <div className='container'>
                <div className="card col-md-12">
                    <div className="card-header text-center">
                        <div>
                            <input type="file" id='file' onChange={this.handleInputChange} />
                            <button type="submit" onClick={()=>this.submit()}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        )  
    }
}
 
export default FileUpload;