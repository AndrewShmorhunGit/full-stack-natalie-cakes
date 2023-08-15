"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuParams = void 0;
const priceList = {
    mousses: [110, 140, 175, 280],
    biscuits: [160, 220, 290, 340],
    classic: [120, 0, 230, 0],
    cheesecakes: [110, 0, 210, 0],
};
// Musses params as a default
const defaultParams = {
    sizes: ["xs", "s", "m", "l"],
    persons: [8, 10, 12, 22],
    weight: [1.2, 1.6, 2.0, 3.3],
    radius: [180, 200, 220, 260],
    prices: priceList.mousses,
};
const biscuitParams = {
    sizes: defaultParams.sizes,
    persons: [12, 17, 23, 27],
    weight: [1.7, 2.5, 3.4, 3.9],
    radius: [180, 200, 220, 240],
    prices: priceList.biscuits,
};
const classicParams = {
    sizes: defaultParams.sizes,
    persons: [8, 0, 15, 0],
    weight: [1.2, 0, 2.4, 0],
    radius: defaultParams.radius,
    prices: priceList.classic,
};
const cheesecakesParams = {
    sizes: defaultParams.sizes,
    persons: classicParams.persons,
    weight: classicParams.weight,
    radius: defaultParams.radius,
    prices: priceList.cheesecakes,
};
const menuParams = {
    moussesParams: defaultParams,
    biscuitParams,
    classicParams,
    cheesecakesParams,
};
exports.menuParams = menuParams;
