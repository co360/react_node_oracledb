module.exports = {
    hrPool: {
        user: "sys",
        password: "Oracle18",
        connectString: "sys@//localhost:32118/XE",
        poolMin: 10,
        poolMax: 10,
        poolIncrement: 0
    }
};

// module.exports = {
//     hrPool: {
//         user: process.env.HR_USER || "spapx01d",
//         password: process.env.HR_PASSWORD || "Khaja01234",
//         connectString: process.env.HR_CONNECTIONSTRING || "vm0dnoravsd0085.twcable.com",
//         poolMin: 10,
//         poolMax: 10,
//         poolIncrement: 0
//     }
// };