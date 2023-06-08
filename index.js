const express = require('express');
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT | 3977;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get("/", (req, res) => {
	res.status(200).send({ message: "Welcome to the API REST" });
});

app.get('/v1/:id/screen1', (req, res) => {
	const userId = req.params.id;
	if (userId === '00126793807') {
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


const mockupOk= {
	clientName: "AAAAAAA BBBBB",
	clientLastName: "CC CCCCCCCC",
	clientSurname: "DDDDDDDDDD",
	clientMail: "GGGGGGG@gmail.com",
	branchOffice: "AHUMADA II ",
	clientTelephoneNumber: "029875000",
	clientPhoneCell: "0985555088",
	clientAddress: "EL BOSQUE OSCURO 1369 CERRO RA",
	comunneDescription: "VALPARAISO",
	queryNumber: "00000039",
	queryType: "RENEG/REFINAN DE CONTRAT",
	product: "65",
	subproduct: "6521",
	limitLocalImport: "5.800.000,00",
	productTerm: "060",
	refinanciedContracts: [
		{
			numberContract: "650026189254",
			amountDebt: "1.376.152,0000",
			badge: "CLP",
		},
		{
			numberContract: "650026189290",
			amountDebt: "1.376.152,0000",
			badge: "CLP",
		},
		{
			numberContract: "650026189292",
			amountDebt: "1.376.152,0000",
			badge: "CLP",
		},
	],
};
