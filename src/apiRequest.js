const Apirequest = async(url="",optionObj=null,errMsg=null)=>{
  try{
    const response = await fetch(url,optionObj)
    if(!response.ok) throw Error ("plese reload app")

  }catch(err){
    errMsg=err.message;
  }finally{
    return errMsg
  }
}

export default Apirequest