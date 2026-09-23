// Exporta a função para ser utilizada noutros ficheiros (Módulos)
export const gerarTabelaGenerica = (itens, idDestino, cabecalhos, propriedades) => {
    const div = document.getElementById(idDestino);
    
    // Se o array vier vazio ou indefinido
    if (!itens || itens.length === 0) {
        div.innerHTML = "<p>Nenhum dado encontrado.</p>";
        return;
    }

    // Mapeamento dos cabeçalhos (<th>)
    const theadHtml = `
        <thead>
            <tr>
                ${cabecalhos.map(cab => `<th>${cab}</th>`).join('')}
            </tr>
        </thead>
    `;

    // Mapeamento das propriedades de cada item (<td>)
    // O item[prop] extrai dinamicamente o valor do JSON baseado no array de strings
    const tbodyHtml = `
        <tbody>
            ${itens.map(item => `
                <tr>
                    ${propriedades.map(prop => `<td>${item[prop]}</td>`).join('')}
                </tr>
            `).join('')}
        </tbody>
    `;

    // Monta a tabela final
    div.innerHTML = `
        <table>
            ${theadHtml}
            ${tbodyHtml}
        </table>
    `;
};