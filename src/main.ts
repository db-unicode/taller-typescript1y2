import { series } from './data';
import Serie from './Serie';

function displaySeries(): void {
    const tableBody = document.querySelector('#seriesTable tbody');

    if (tableBody) {
        series.forEach((serie) => {
            const row = document.createElement('tr');

            row.innerHTML = `
                <td>${serie.id}</td>
                <td class="serie-name" style="cursor: pointer; color: blue;">${serie.name}</td>
                <td>${serie.channel}</td>
                <td>${serie.seasons}</td>
            `;

            const nameCell = row.querySelector('.serie-name') as HTMLTableCellElement;
            nameCell.addEventListener('click', () => updateCard(serie));

            tableBody.appendChild(row);
        });

        const averageSeasons = calculateAverageSeasons();
        addAverageRow(tableBody, averageSeasons);

        updateCard(series[0]); 
    }
}

function calculateAverageSeasons(): number {
    const totalSeasons = series.reduce((sum, serie) => sum + serie.seasons, 0);
    return totalSeasons / series.length;
}

function addAverageRow(tableBody: Element, average: number): void {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td colspan="3" class="text-end font-weight-bold">Seasons average:</td>
        <td>${average.toFixed(2)}</td>
    `;
    tableBody.appendChild(row);
}

function updateCard(serie: Serie): void {
    const card = document.getElementById('seriesCard') as HTMLDivElement;
    const image = document.getElementById('seriesImage') as HTMLImageElement;
    const title = document.getElementById('seriesTitle') as HTMLHeadingElement;
    const description = document.getElementById('seriesDescription') as HTMLParagraphElement;
    const link = document.getElementById('seriesLink') as HTMLAnchorElement;

    image.src = serie.imageUrl;
    image.alt = serie.name;
    title.textContent = serie.name;
    description.textContent = serie.description;
    link.href = serie.seriesWebPageUrl;
    link.textContent = serie.seriesWebPageUrl;

    card.style.display = 'block';
}


displaySeries();
