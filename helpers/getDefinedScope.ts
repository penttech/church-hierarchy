import { ChurchHierarchy } from "../hierarchy/hierarchy.interface";

export const getDefinedScope = (hierarchy: ChurchHierarchy, scope: string, 
    regionId?: string, nationId?: string, areaId?: string, districtId?: string, assemblyId?: string) => {
    switch (scope) {
        case 'region': {
            return hierarchy.regions.find(r => r.id === regionId);
        }
        case 'nation': {
            return hierarchy.regions.find(r => r.id === regionId)
                    .nations.find(n => n.id === nationId);
        }
        case 'area': {
            return hierarchy.regions.find(r => r.id === regionId)
                    .nations.find(n => n.id === nationId)
                    .areas.find(a => a.id === areaId);
        }
        case 'district': {
            return hierarchy.regions.find(r => r.id === regionId)
                    .nations.find(n => n.id === nationId)
                    .areas.find(a => a.id === areaId)
                    .districts.find(d => d.id === districtId);
        }
        case 'assembly': {
            return hierarchy.regions.find(r => r.id === regionId)
                    .nations.find(n => n.id === nationId)
                    .areas.find(a => a.id === areaId)
                    .districts.find(d => d.id === districtId)
                    .assemblies.find(a => a.id === assemblyId);
        }
    }
}