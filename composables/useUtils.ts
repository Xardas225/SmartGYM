export const useUtils = () => {
    const getElementUrl = (type: string, id: number): string => {
        return `/${type}/${id}`;
    };

    const getImageUrl = (type: string, id: number): string => {
        // FOR TEST
        id > 1 ? (id = 1) : id;
        // ########
        const url = `../public/img/${type}/${id}.jpg`;
        return new URL(url, import.meta.url).href;
    };

    return {
        getElementUrl,
        getImageUrl
    }
}