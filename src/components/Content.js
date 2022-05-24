import React,{useEffect,useContext} from 'react'
import Bookcard from './Bookcard';
import './Content.css';
import { InputContext } from './Context';

function Content() {
    const {searchVal, maxEntries,page,books,loading, error,fetchData,filterModal, setFilterModal,filterparams} = useContext(InputContext);
    
    useEffect(() => {
     fetchData();
    }, [searchVal,maxEntries,page,filterparams]);

    const getbooks=()=>{
        if(error){
            return <div className="errors">{error}</div>
        }
        else if(books.item?.length>0){
            return books.item?.map((book)=><Bookcard book={book} key={book.id}/>)
        }
        else {
            return <div className="note">No results for this query.</div>
        }
    }


  return (
        <div className={`book-container ${filterModal?"overflowtrue":""}`} onScroll={()=>{setFilterModal(false)}}>
       {
        loading?<div className="loading">loading...</div>:getbooks()
       }
    </div>
  )
}

export default Content
