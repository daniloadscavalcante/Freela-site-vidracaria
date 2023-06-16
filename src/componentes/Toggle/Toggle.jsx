
export default function Toggle({ativo, onClick}){    
       
    return(
        <div className= {`toggle ${ativo ? 'menuAtivo' : ''}`} onClick={onClick}>
            <span className='line'></span>
            <span className='line'></span>
            <span className='line'></span>
        </div>
    )
}