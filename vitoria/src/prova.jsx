import './prova.css'

function Prova(){

    var url = 'https://opentdb.com/api.php?amount=30&category=15';


return(
    <>
    <header>
        <ul>
            <li> Main</li>
            <li> Footer</li>
            <li> Contact</li>
        </ul>
    </header>
    <main>
        <button>Retornar</button>
        <table className="categoria"></table>
        <table className="resposta"></table>
    </main>
    <footer>
        <h2>Vitoria Lopes</h2>

    </footer>
    </>

)}

export default Prova