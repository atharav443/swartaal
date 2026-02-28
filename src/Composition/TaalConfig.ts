import { TaalInfo, TaalTypes } from './types';

/**
 * Taal Configuration - Contains metadata for all taals
 * totalmatras: Total number of matras in the taal
 * khands: Number of khands/sections in the taal
 * khandmatras: Array of matras in each khand (e.g., [4, 4, 4, 4] means 4 khands with 4 matras each)
 */
export const TAAL_CONFIG: Record<TaalTypes, TaalInfo> = {
    teentaal: {
        name: 'teentaal',
        totalmatras: 16,
        khands: 4,
        khandmatras: [4, 4, 4, 4],
    },
    ektaal: {
        name: 'ektaal',
        totalmatras: 12,
        khands: 3,
        khandmatras: [4, 4, 4],
    },
    jhaptaal: {
        name: 'jhaptaal',
        totalmatras: 10,
        khands: 5,
        khandmatras: [2, 2, 2, 2, 2],
    },
    rupak: {
        name: 'rupak',
        totalmatras: 7,
        khands: 3,
        khandmatras: [3, 2, 2],
    },
};
