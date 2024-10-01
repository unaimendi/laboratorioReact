export const routesPrefixes = {
	accountList: "/account-list",
	transfer: "/transfer",
	transferFromAccount: "/transfer",
};

export const appRoutes = {
	root: "/",
	accountList: routesPrefixes.accountList,
	editAccount: "/edit-account/:id",
	movements: "/movements/:id",
	transfer: routesPrefixes.transfer,
	transferFromAccount: `${routesPrefixes.transfer}/:id`,
};
