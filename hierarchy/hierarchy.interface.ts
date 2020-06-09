export interface ChurchHierarchy {
    regions: {
        id: string;
        name: string;
        nations: {
            id: string;
            name: string;
            areas: {
                id: string;
                name: string;
                districts: {
                    id: string;
                    name: string;
                    assemblies?: {
                        id: string;
                        name: string;
                    }[];
                }[];
            }[];
        }[];
    }[];
}