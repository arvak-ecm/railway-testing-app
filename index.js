const express = require('express');
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3900;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
	res.status(200).send({ message: "Welcome to the API REST" });
});

app.get("/v1/:id/screen1", (req, res) => {
	const userId = req.params.id;
	if (userId === "00126793807") {
		res.status(200).send(mockupOk);
	} else {
		res
			.status(404)
			.send({ message: "Not found or does not meet the acceptance criteria" });
	}
});

app.listen(port, () => {
	console.log(`API REST corriendo en http://localhost:${port}`);
});

const mockupOk = {
	clientId: "00126793807",
	clientType: "F",
	clientOffice: "0338",
	clientOfficeDescription: "AHUMADA II",
	clientPhonePrefix: "02",
	clientPhoneNumber: "029875000",
	clientPhoneCell: "0985555088",
	clientMail: "GGGGGGG@gmail.com",
	clientName: "AAAAAAA BBBBB",
	clientLastName: "CC CCCCCCCC",
	clientSurname: "DDDDDDDDDD",
	clientAddress: "EL BOSQUE OSCURO 1369 CERRO RA",
	comunneDescription: "VALPARAISO",
	executiveOffice: "0002",
	positionNumber: "2771",
	entityCode: "0035",
	captureCenter: "0002",
	queryYear: "2023",
	queryNumber: "00000039",
	queryType: "RENEG/REFINAN DE CONTRAT",
	queryClass: "013",
	queryClassDescription: "RENEG/REFINAN DE CONTRATOS",
	queryDate: "2023-04-14",
	situationCode: "529",
	limitLocalImport
	productTerm: "060",
	termDescription: "MESES",
	product: "65",
	subProduct: "6521",
	productDescription
	assignedAmmount: "5800000.00",
	totalAmountProduct: "1376152.0000",
	listProductsRefinance: [
		{
			productCode: "65",
			subProductCode: "6500",
			productDescription: " LIBRE DISPONIBILIDAD EN PESOS",
			contractEntity: "0035",
			contractCenter: "0002",
			numberContract: "650026189292",
			totalSettlementLocation: "1376152.0000",
			badgeData: "CLP",
		},
	],
};