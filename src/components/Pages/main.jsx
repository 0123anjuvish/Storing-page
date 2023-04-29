import React from 'react'
import { ImDownload } from "react-icons/im";
import { MdDeleteForever } from "react-icons/md";

const Main = () => {
  return (
   <>
    
   <div className="container">
   <h2>My Files</h2>
  <ul className="responsive-table">
    <li className="table-header">
     
      <div className="col col-1">Doc-Name</div>
      <div className="col col-2">Owner Name</div>
      <div className="col col-3">File-Size</div>
      <div className="col col-4">
        Last-Modified
      </div>
    </li>
    <li className="table-row">
      <div className="col col-1" data-label="File-Name">42235</div>
      <div className="col col-2" data-label="Owner Name">John Doe</div>
      <div className="col col-3" data-label="Size">30kb</div>
      <div className="col col-4" data-label="Date">20,april,2023</div>
      <div className="col col-5" data-label="Date"><ImDownload/></div>
      <div className="col col-6" data-label="Date"><MdDeleteForever/></div>
    </li>
    <li className="table-row">
      <div className="col col-1" data-label="File-Name">42442</div>
      <div className="col col-2" data-label="Owner Name">Jennifer Smith</div>
      <div className="col col-3" data-label="Size">20kb</div>
      <div className="col col-4" data-label="Date">20,april,2023</div>
      <div className="col col-5" data-label="Date"><ImDownload/></div>
      <div className="col col-6" data-label="Date"><MdDeleteForever/></div>
    </li>
    <li className="table-row">
      <div className="col col-1" data-label="File-Name">42257</div>
      <div className="col col-2" data-label="Owner Name">John Smith</div>
      <div className="col col-3" data-label="Size">100kb</div>
      <div className="col col-4" data-label="Date">20,april,2023</div>
      <div className="col col-5" data-label="Date"><ImDownload/></div>
      <div className="col col-6" data-label="Date"><MdDeleteForever/></div>
    </li>
    <li className="table-row">
      <div className="col col-1" data-label="File-Name">42311</div>
      <div className="col col-2" data-label="Owner Name">John Carpenter</div>
      <div className="col col-3" data-label="Size">300kb</div>
      <div className="col col-4" data-label="Date">20,april,2023</div>
      <div className="col col-5" data-label="Date"><ImDownload/></div>
      <div className="col col-6" data-label="Date"><MdDeleteForever/></div>
    </li>
   
  </ul>
  
</div>
   </>
  )
}

export default Main
