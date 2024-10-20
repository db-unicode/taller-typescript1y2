export default class Serie {
    id: number;
    name: string;
    channel: string;
    seasons: number;
    description: string;
    seriesWebPageUrl: string;
    imageUrl: string;

    constructor(
        id: number,
        name: string,
        channel: string,
        seasons: number,
        description: string,
        seriesWebPageUrl: string,
        imageUrl: string
    ) {
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.seriesWebPageUrl = seriesWebPageUrl;
        this.imageUrl = imageUrl;
    }

    // Getters
    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getChannel(): string {
        return this.channel;
    }

    getSeasons(): number {
        return this.seasons;
    }

    getDescription(): string {
        return this.description;
    }

    getSeriesWebPageUrl(): string {
        return this.seriesWebPageUrl;
    }

    getImageUrl(): string {
        return this.imageUrl;
    }

    getInfo(): string {
        return `Serie: ${this.name}, Channel: ${this.channel}, Seasons: ${this.seasons}`;
    }
}
