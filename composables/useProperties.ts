import { MUSCLES, EQUIPMENTS } from "@/constants";

export const useProperties = () => {

    const getPropertyText = (type: string, name: string): string => {
        console.log(type);
        
        switch (type) {
            case 'muscle':
                return MUSCLES[name]
            case 'equipment':
                return EQUIPMENTS[name]
            default:
                return 'Другое'
        }
    }

    return {
        getPropertyText
    }
}