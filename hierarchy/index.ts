import { ChurchHierarchy } from "./hierarchy.interface";

export const churchHierarchy: ChurchHierarchy = {
    regions: [
        {
            id: 'hq',
            name: 'Head Quarters',
            nations: [
                {
                    id: 'ghana',
                    name: 'Ghana',
                    areas: [
                        {
                            id: 'teshie-nungua-area',
                            name: 'Teshie Nungua Area',
                            districts: [
                                {
                                    id: 'sakumono-piwc-district',
                                    name: 'Sakumono PIWC District'
                                },
                                {
                                    id: 'sakumono-piwc-district2',
                                    name: 'Sakumono PIWC District2',
                                    assemblies: [
                                        {
                                            id: 'some-assembly',
                                            name: 'Some Assembly'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};