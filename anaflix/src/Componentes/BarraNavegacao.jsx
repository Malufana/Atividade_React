import estilos from './BarraNavegacao.module.css';

export function BarraNavegacao(){
    return(
        <nav className={estilos.container}>
            <ul>
                <li>HOME</li>
                <li>FILMES</li>
                <li>SERIES</li>
            </ul>
        </nav>
    )
}